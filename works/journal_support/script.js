'use strict';
//アイコンが消える：h1の削除をstyle.display.noneに変えてみる？

const version = 'ver 1.1';

const anoTxt = [
    'このツールは、ソロジャーナルを（物理的な紙やサイコロではなく）デジタルで遊んだり、プレイログを作ったりするためのものです。',
    'ランダマイザ、ログの書き込みとその保存（.txtファイル）などの機能を付けています。だいたい押せば動くと思います。ソロジャーナル以外の用途でもどうぞ。',
    '不具合は多分ありますが、直せたり直せなかったりします。大目に見てください。',
];

const memo = [
    '操作できる項目：ダイス、トランプ、区切り。',
    '編集できる項目：ログタイトル、ログ履歴。',
    '下部「保存」　：ログ履歴を.txtファイルでダウンロードします。「日付＋ログタイトル」がファイル名になります。',
    '下部「初期化」：タイトル・ログ履歴を全て消去します。ブラウザ自体の再読み込みなどでも同様に初期化されます。',
    'ダイスロール後、フォーカスがテキストエリアではなくダイスに戻る→直せませんでした。',
    'デザインが崩れている→すみません。大目に見てください。',
];
const update = [
    { day: '8/18', change: 'ver 0.01（仮）　作り始めた。' },
    { day: '8/20', change: 'ver 1.0　いったん完成。' },
    {
        day: '8/25',
        change: 'ver 1.1　細かい手入れと使用アイコンの差し替え。タイトル編集時に編集マークが消える不具合を生んだ（直せたら直します）。',
    },
];

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
const help = document.getElementById('help');
const help_txt = document.getElementById('help_txt');

//===== ===== ===== ===== ===== ===== ===== ===== ===== ===== ===== =====

input.addEventListener('keydown', keydown);
input_submit.addEventListener('click', writeSubmit);
h1.addEventListener('click', titleEdit);

//書き込み
function write(txt) {
    output.value += `${txt}\n`;
    //テキストボックスの末尾にキャレット移動
    const len = output.value.length;
    output.focus(); //フォーカスをログに
    output.setSelectionRange(len, len);
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
        //inputをformの中に入れると消える（何で…？）
        input.focus();
    }
}

//ランダムダイス
dice.addEventListener('click', () => {
    const diceSide = document.getElementById('dice2').value;
    const dicePiece = document.getElementById('dice1').value;
    console.log('ダイス処理↓' + dicePiece + 'd' + diceSide);
    if (dicePiece <= 0 || diceSide <= 0) {
        //処理中断
        return;
    }
    const result = [];
    for (let i = 0; i < dicePiece; i++) {
        const num = Math.floor(Math.random() * diceSide + 1); //ダイスの出目を決定
        result.push(num);
    }
    let txt = `🎲${dicePiece}d${diceSide} →　${result}`;
    if (dicePiece > 1) {
        //合計あり
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

//クリックでテキストエリアに変化
function titleEdit() {
    //  titleAreaのh1を消去
    h1.remove();
    //  一時的なinputを生成
    const input = document.createElement('input');
    //inputを配置
    const titleArea = document.getElementById('titleArea');
    titleArea.insertBefore(input, titleArea.lastElementChild);
    input.value = h1.textContent;
    input.id = 'titleName';
    //inputにaddEve
    input.addEventListener('keydown', titleKeydown);
    input.addEventListener('blur', titleKeydown);
    input.focus();

    //決定ボタンを生成します…
    const h1_after = document.createElement('p');
    h1_after.textContent = '決定';
    h1_after.id = 'titleButton';
    h1_after.className = 'button';
    input.parentElement.insertBefore(h1_after, input.parentElement.lastElementChild);
    h1_after.addEventListener('click', titleSubmit);
}

//エンターを押したとき  //、またはフォーカスが外れたとき（無理でした）
function titleKeydown(e) {
    if (e.key === 'Enter') {
        console.log('エンターを押した！');
        titleSubmit();
    }
}

//タイトルを編集
function titleSubmit(e) {
    const titleName = document.getElementById('titleName');
    const text = titleName.value;
    const input = document.getElementById('titleName');

    document.getElementById('titleButton').remove(); //決定ボタンを削除

    //input削除
    input.remove();
    //hiを生成
    const hi = document.createElement('h1');
    h1.textContent = text;
    hi.autocomplete = 'off';
    titleArea.insertBefore(h1, titleArea.firstElementChild);

    //addEveを戻す
    hi.addEventListener('keydown', titleEdit);
}

//テキストエリアに入力された文字を.txtでダウンロード
download.addEventListener('click', () => {
    //テキスト内容
    if (output.value.length == 0) {
        window.alert('ログ履歴がないので保存を中止しました。');
    } else {
        const fileFirstPara = `# ${h1.textContent}\n`;
        const fileLastPara = `\n－－－－－　－－－－－　－－－－－　－－－－－　－－－－－　        \n\n	ソロジャーナル向けプレイ支援ツール ${version}（by倉林）\n`;
        const text = fileFirstPara + output.value + fileLastPara; //ファイル内容

        const date = new Date();
        const filename = `${
            h1.textContent
        }_${date.getFullYear()}${date.getMonth()}${date.getDate()}${date.getHours()}${date.getMinutes()}.txt`; //ファイル名

        const blob = new Blob([text], { type: 'text/plain' }); //クラスか
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = filename;
        link.click(); //リンクをクリックした状態を起こすってこと！？
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

/* ---------------------------------------------------------------------- */

//ヘルプ関連
// クリックの度にdisplayプロパティを切り替える
help.addEventListener('click', displaySwitch);

function displaySwitch() {
    if (help_txt.style.display === 'block') {
        help_txt.style.display = 'none';
    } else {
        help_txt.style.display = 'block';
    }
}

//要素呼び出し
const h2 = document.createElement('h2'); //当ツールについて
const h3_list = document.createElement('h3'); //細かいこと
const h3_update = document.createElement('h3'); //更新履歴
const ano_ol = document.createElement('ol'); //リストを生成

//要素のタイトル
h2.textContent = '当ツールについて';
h3_list.textContent = '細かいこと';
h3_update.textContent = '更新履歴';

htd.appendChild(h2);
htd.appendChild(ano_ol);
for (const txt of anoTxt) {
    const ano_li = document.createElement('li');
    ano_li.textContent = txt;
    ano_ol.appendChild(ano_li);
}

//追加！
htd.appendChild(h3_list);
memoWrite(memo);
htd.appendChild(h3_update);
updateWrite(update);

//配列を羅列
function memoWrite() {
    const ul = document.createElement('ul');
    htd.appendChild(ul);
    for (const txt of memo) {
        const li = document.createElement('li');
        li.textContent = txt;
        ul.appendChild(li);
    }
}

//オブジェクトを羅列
function updateWrite(ev) {
    const dl = document.createElement('dl');
    htd.appendChild(dl);
    for (const ob of ev) {
        const dt = document.createElement('dt');
        const dd = document.createElement('dd');

        const { day, change } = ob;
        dt.textContent = day;
        dd.textContent = change;
        dl.appendChild(dt);
        dl.appendChild(dd);
    }
}

//★ヘルプのメニュー用意～～～～～------------------------------------
const htdMenu = document.getElementById('htd-menu'); //戻るボタンの行
const menuClose = document.getElementById('menuClose');
const menuMail = document.getElementById('menuMail');
const menuSelect = document.createElement('Select');
menuClose.addEventListener('click', displaySwitch);

themeChangePre();

//テーマ切り替えの設置
function themeChangePre() {
    const form = document.createElement('form');
    htdMenu.appendChild(form);
    for (const el of theme) {
        const option = document.createElement('option');
        option.textContent = el;
        form.appendChild(menuSelect);

        menuSelect.appendChild(option);
        menuSelect.addEventListener('change', themeChange);
    }
}

//テーマ切り替えが発火　できた！！！！！！！！
function themeChange(e) {
    document.body.id = e.target.value;
}
