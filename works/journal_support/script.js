'use strict';

const version = 'ver 1.8';
const theme = ['mint', 'red', 'grass', 'sea', 'robot', 'brown', 'gray', 'night'];
const majorArcanas = [
    { name: '愚者', power: '自由/夢想/型破り', abuse: '極端/苛立ち/落ちこぼれ' },
    {
        name: '魔術師',
        power: '意志/才能/創造',
        abuse: '混迷/スランプ/裏切り',
    },

    {
        name: '女教皇',
        power: '感性/神秘/聡明',
        abuse: '悲観/孤立/疑心暗鬼',
    },
    {
        name: '女帝',
        power: '豊穣/情熱/謙虚',
        abuse: '挫折/嫉妬/虚言',
    },
    {
        name: '皇帝',
        power: '統治/堅固/責任感',
        abuse: '未熟/傲慢/意志薄弱',
    },
    {
        name: '教皇',
        power: '人徳/尊敬/社会性',
        abuse: '束縛/不信/虚栄',
    },
    {
        name: '恋人',
        power: '愛美/自信/情熱',
        abuse: '空虚/無干渉/不道徳',
    },
    {
        name: '戦車',
        power: '勝利/征服',
        abuse: '暴走/独断/傍若無人',
    },
    {
        name: '力',
        power: '強大/強固/不撓不屈',
        abuse: '甘え/卑下/人任せ',
    },
    {
        name: '隠者',
        power: '深慮/難解/高尚な助言',
        abuse: '閉鎖/陰湿',
    },
    {
        name: '運命の輪',
        power: '転機/変化/向上',
        abuse: '悪化/別れ/降格',
    },
    {
        name: '正義',
        power: '公平/正当/均衡',
        abuse: '偏向/不均等/一方通行',
    },
    {
        name: '吊るされた男',
        power: '忍耐/努力/試練',
        abuse: '徒労/投げやり/やせ我慢',
    },
    {
        name: '死神',
        power: '停止/離散/終局',
        abuse: '再生/転生/新展開',
    },
    {
        name: '節制',
        power: '謙虚/倹約/管理',
        abuse: '浪費/消耗/不規則',
    },
    {
        name: '悪魔',
        power: '暴力/束縛/悪循環',
        abuse: '回復/反省/転生',
    },
    {
        name: '塔',
        power: '破滅/悲劇/崩壊',
        abuse: '緊迫/誤解/必要悪/不幸',
    },
    {
        name: '星',
        power: '希望/閃き/吉兆',
        abuse: '絶望/無気力/高望み',
    },
    {
        name: '月',
        power: '幻惑/欺瞞/潜在的な危険',
        abuse: '好転/優れた直感',
    },
    {
        name: '太陽',
        power: '成功/祝福/約束された将来',
        abuse: '不調/落胆/衰退/無為な時間',
    },
    {
        name: '審判',
        power: '復活/改善/更新',
        abuse: '悔恨/再起不能/悪い知らせ',
    },
    {
        name: '世界',
        power: '完成/永久不滅/約束された成功',
        abuse: '衰退/低迷/調和の崩壊',
    },
];

const h1 = document.querySelector('h1');
const input = document.getElementById('input');
const input_submit = document.getElementById('input_submit');
const dice = document.getElementById('dice');
const cards = document.getElementById('cards');
const majorArcana = document.getElementById('major_arcana');
const horizontal_role = document.getElementById('horizontal_role');
const output = document.getElementById('output');

const download = document.getElementById('download');
const allClear = document.getElementById('allClear');

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

//ダイス
dice.addEventListener('click', (e) => {
    const diceSide = document.getElementById('dice2').value;
    const dicePiece = document.getElementById('dice1').value;

    console.log(e.target.id);
    if (!(e.target.id === 'dice')) {
        return;
    }

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

//トランプ  1~13かつ❤️♠♦🍀/ジョーカー2枚（３％）　全54枚
cards.addEventListener('click', () => {
    if (Math.floor(Math.random() * 100 + 1 < 3)) {
        write(`🃏 →　Joker！`);
    } else {
        const suit = ['♠スペード', '🧡ハート', '🔶ダイヤ', '🍀クローバー'];
        const random = Math.floor(Math.random() * 4);
        const card = Math.floor(Math.random() * 13) + 1;
        write(`🃏 →　${suit[random]}の ${card}`);
    }
});

//タロット・大アルカナ
majorArcana.addEventListener('click', () => {
    const num = Math.floor(Math.random() * majorArcanas.length);
    let number = num;
    if (num < 10) {
        number = ' ' + number;
    }
    write(`🔮＜${number} ${majorArcanas[num].name}＞　${majorArcanas[num].power} // ${majorArcanas[num].abuse}`);
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

//エンターを押したとき/またはフォーカスが外れたとき（無理でした）
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
