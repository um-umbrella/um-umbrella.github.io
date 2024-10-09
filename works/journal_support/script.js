'use strict';

const version = 'ver 1.5';
const theme = ['mint', 'red', 'grass', 'sea', 'robot', 'brown', 'gray', 'night'];

const h1 = document.querySelector('h1');
const input = document.getElementById('input');
const input_submit = document.getElementById('input_submit');
const dice = document.getElementById('dice');
const cards = document.getElementById('cards');
const horizontal_role = document.getElementById('horizontal_role');
const output = document.getElementById('output');

const download = document.getElementById('download');
const allClear = document.getElementById('allClear');
//const help = document.getElementById('help');
//const help_txt = document.getElementById('help_txt');

//===== ===== ===== ===== ===== ===== ===== ===== ===== ===== ===== =====

input.addEventListener('keydown', keydown);
input_submit.addEventListener('click', writeSubmit);
h1.addEventListener('click', titleEdit);

//書き込み
function write(txt) {
    output.value += `${txt}\n`;
    //テキストボックスの末尾にキャレット移動
    const len = output.value.length;
    output.setSelectionRange(len, len);
    output.focus();
    input.focus(); //フォーカスを入力に
}

//決定ボタンによる書き込み
function writeSubmit() {
    const e = input.value;
    if (e.length > 0) {
        write(e);
        input.value = '';
    }
}

//エンター押下時の処理（keydown）
function keydown(e) {
    if (e.key === 'Enter') {
        write(input.value);
        input.value = '';
        input.focus();
        e.preventDefault();
    }
}

//ランダムダイス
dice.addEventListener('click', () => {
    const diceSide = document.getElementById('dice2').value;
    const dicePiece = document.getElementById('dice1').value;

    if (dicePiece <= 0 || diceSide <= 0) {
        //処理を中断
        return;
    }

    const result = [];
    for (let i = 0; i < dicePiece; i++) {
        const num = Math.floor(Math.random() * diceSide + 1); //ダイスの出目を決定
        result.push(num);
    }

    let txt = `🎲${dicePiece}d${diceSide} →　${result}`;
    if (dicePiece > 1) {
        txt += `（合計 ${result.reduce((previousValue, currentValue) => previousValue + currentValue, 0)}）`;
    }
    write(txt);
});

//トランプ  1~13かつ❤️♠♦🍀、ジョーカー2枚（３％）　全54枚
cards.addEventListener('click', () => {
    if (Math.floor(Math.random() * 100 + 1 < 3)) {
        write(`🃏 →　Joker！`);
    } else {
        const suit = ['🧡', '♠', '🍀', '🔶'];
        const random = Math.floor(Math.random() * 4);
        const card = Math.floor(Math.random() * 13) + 1;
        write(`🃏 →　${card + suit[random]}`);
    }
});

//区切り線
horizontal_role.addEventListener('click', () => {
    write('\n－－－－－　－－－－－　－－－－－　\n');
});

const hgroup = document.querySelector('hgroup');

//クリックでテキストエリアに変化
function titleEdit() {
    //  hgroupのh1を消去
    h1.remove();
    //ボタンを表示
    document.getElementById('titleButton').classList.toggle('none');
    //  一時的なinputを生成
    const input = document.createElement('input');
    //inputを配置
    hgroup.insertBefore(input, hgroup.lastElementChild);
    input.value = h1.textContent;
    input.id = 'titleName';
    input.autocomplete = 'off';

    //inputにaddEve
    input.addEventListener('keydown', titleKeydown);
    input.addEventListener('blur', titleKeydown);
    input.focus();

    //決定ボタン
    const titleButton = document.getElementById('titleButton');
    titleButton.addEventListener('click', titleSubmit);
}

//エンターを押したとき、またはフォーカスが外れたとき（無理でした）
function titleKeydown(e) {
    if (e.key === 'Enter') {
        titleSubmit();
    }
}

//タイトルを編集
function titleSubmit(e) {
    const input = document.getElementById('titleName');
    const text = input.value;

    //決定ボタンを非表示
    document.getElementById('titleButton').classList.toggle('none');

    //input削除
    input.remove();
    //hiを生成
    const hi = document.createElement('h1');
    h1.textContent = text;
    hi.autocomplete = 'off';
    hgroup.insertBefore(h1, hgroup.firstElementChild);

    //addEveを戻す
    hi.addEventListener('keydown', titleEdit);
}

//テキストエリアに入力された文字を.txtでダウンロード
download.addEventListener('click', () => {
    //テキスト内容
    if (output.value.length == 0) {
        window.alert('ログ履歴がないので保存を中止しました。');
    } else {
        const fileFirstPara = `# ${h1.textContent}\n\n－－－－－　－－－－－　－－－－－　－－－－－　－－－－－　        \n\n`;
        const fileLastPara = `\n－－－－－　－－－－－　－－－－－　－－－－－　－－－－－　        \n\n	ソロジャーナルプレイ支援ツール ${version}（by倉林）\n`;
        const text = fileFirstPara + output.value + fileLastPara; //ファイル内容

        //日付でファイル名生成
        const date = new Date();

        const nowDateArray = [
            date.getMonth() + 1,
            date.getDate(),
            date.getHours(),
            date.getMinutes(),
            date.getSeconds(),
        ];

        for (let i = 0; i < nowDateArray.length; i++) {
            if (nowDateArray[i] < 10) {
                nowDateArray[i] = '0' + nowDateArray[i];
            }
        }

        const filename = `${h1.textContent}_${date.getFullYear()}${nowDateArray[0]}${nowDateArray[1]}${
            nowDateArray[2]
        }${nowDateArray[3]}${nowDateArray[4]}`;

        const blob = new Blob([text], { type: 'text/plain' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = filename;
        link.click(); //リンクをクリック
    }
});

//タイトル・ダイス・入力・出力の内容をクリア
allClear.addEventListener('click', (e) => {
    if (output.value.length <= 0) {
        window.alert('初期化する内容がありません！');
        return;
    }
    const yes = window.prompt('ログ履歴を初期化します。よろしいですか？「はい/yes」で実行します。');
    if (yes === 'はい' || yes === 'yes') {
        h1.textContent = 'ログタイトル';
        dice.value = 3;
        input.value = '';
        output.value = '';
    }
});

/////////////////////////////////////////////////////////////
//テーマ関連

themeChangePre();

//テーマ切り替えの設置
function themeChangePre() {
    const menuSelect = document.getElementById('theme-select');

    for (const el of theme) {
        const option = document.createElement('option');
        option.textContent = el;
        menuSelect.appendChild(option);
        menuSelect.addEventListener('change', themeChange);
    }
}

//テーマ切り替えが発火　できた！！！！！！！！
function themeChange(e) {
    document.body.id = e.target.value;
}
