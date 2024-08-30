'use strict';

//カラーコード生成
const colorCodes = [0, 1, 2, 3, 4, 5, 'a', 'b', 'c', 'd', 'e', 'f'];
//髪質
const hairType = [
    'ウェーブ',
    'ストレート',
    '癖毛',
    'ぼさぼさ',
    'さっぱり',
    'あっさり',
    'ごわごわ',
    'つんつん',
    'ちりちり',
    'もこもこ',
];
//髪型
const hairStyle = ['ぱっつん', '編み込み', '結い髪', '長髪', '短髪', '刈り上げ', 'マンバン', '尻尾髪', 'アシンメトリ'];

//目の特徴
const eyeTyle = [
    'ぎょろりとした',
    '目力のある',
    'にやにやした',
    '陰気な',
    '強気な',
    '眠たそうな',
    '虚ろな',
    'きらきらした',
    '前向きな',
    '澄んだ',
];
const eyeStyle = [
    'まんまる目',
    '釣り目',
    '垂れ目',
    '猫目',
    '糸目',
    'まつ毛',
    '三白眼',
    '下まつげ目',
    '伏目',
    'つぶら目',
];

//見て分かる雰囲気
const lookStyle = [
    '癒し系な',
    '近寄りがたい',
    '強面な',
    'やさしげな',
    'おどおどした',
    '根暗な',
    '男っぽい',
    '女っぽい',
    '美形な',
    '醜悪な',
    '老け込んだ',
    '寡黙な',
    '控えめな',
    'ひねくれた',
    '無礼な',
    '高飛車な',
    '淑やかな',
    'とげとげしい',
    '柳に風の',
    '好青年な',
];
//付き合って分かる性格
const talkStyle = [
    'けちんぼ',
    'おっとりさん',
    'せっかち',
    'ポジティブ',
    '後ろ向き',
    '無頓着',
    '無頼漢',
    '少女趣味',
    '（心が）少年',
    '正義感',
    '稚魚',
    '雨女/男',
    '晴れ女/男',
    '倒錯者',
    '体力お化け',
    '貪欲',
    '大食い',
    '嫉妬心',
    '負け犬',
    '泣き虫',
    'ミニマリスト',
    '嘘つき',
    '前科者',
    '正直者',
];

///////////////////////////////////////////////////
//呼ぶやつ１セット
document.querySelector('button').addEventListener('click', () => {
    hairWrite('hair');
    hairWrite('eye');
    hairWrite('personal');
});

//クリップボードにコピー
document.querySelectorAll('button')[1].addEventListener('click', () => {
    let result = '';
    const hair = document.getElementById('hair');
    const eye = document.getElementById('eye');
    const personal = document.getElementById('personal');

    result += `－－－－－　ランダムヒト　－－－－－`;
    result += `\n髪${hair.firstElementChild.textContent}`;
    result += `${hair.lastElementChild.textContent}`;
    result += `\n目${eye.firstElementChild.textContent}`;
    result += `${eye.lastElementChild.textContent}`;
    result += `\n人となり　${personal.lastElementChild.textContent}`;
    result += `\n－－－－－　－－－－－－　－－－－－\n`;

    console.log(result);
    navigator.clipboard.writeText(result);
});

///////////////////////////////////////////////////

//色を生成
function colorSelect() {
    let colorCode = '';
    for (let i = 0; i < 6; i++) {
        colorCode += oneChoise(colorCodes);
    }
    return `#${colorCode}`;
}

//配列から一つを選択する
function oneChoise(e) {
    return e[Math.floor(Math.random() * e.length)];
}

////////////////////////////////////////////////////

//髪選出セット
function hairStyleSelect() {
    //アロー関数でできそうな気がするが、忘れた
    let result = oneChoise(hairType) + 'で' + oneChoise(hairStyle);
    return result;
}

//目選出セット
function eyeStyleSelect() {
    let result = oneChoise(eyeTyle) + oneChoise(eyeStyle);
    return result;
}

//性格選出セット
function lookStyleSelect() {
    let result = oneChoise(lookStyle) + oneChoise(talkStyle);
    return result;
}

////////////////////////////////////////////////////

//髪・目を出力
function hairWrite(e) {
    const div = document.getElementById(e);
    const h = document.createElement('h2');
    const p = document.createElement('p');

    //色を呼ぶ
    const color = colorSelect();
    h.textContent = `（${color}）`;

    let main;
    //質を呼ぶ
    if (e === 'hair') {
        main = hairStyleSelect();
        h.style.color = color;
    } else if (e === 'eye') {
        main = eyeStyleSelect();
        h.style.color = color;
    } else {
        //髪・目でない場合
        main = lookStyleSelect();
        h.textContent = ``;
    }
    p.textContent = `${main}`;
    //出す
    div.firstElementChild.replaceWith(h);
    div.lastElementChild.replaceWith(p);
}

///////////////////////////////////////////////////

const button = document.getElementById('cap');
button.addEventListener('click', screenGo);
const main = document.body;

function screenGo() {
    console.log('呼び出したよ');
    html2canvas(document.querySelector('main'), {}).then(function (canvas) {
        console.log(canvas.toDataURL());

        //日付でファイル名生成
        const date = new Date();
        let dayPlus = '';
        if (date.getMonth() < 10) {
            dayPlus = 0;
        }
        console.log(dayPlus);
        const filename = `ランダムヒト_${date.getFullYear()}${dayPlus}${
            date.getMonth() + 1
        }${date.getDate()}${date.getHours()}${date.getMinutes()}${date.getSeconds()}`;

        const imageData = canvas.toDataURL('image/png');
        const element = document.createElement('a');
        element.setAttribute('href', imageData);
        element.setAttribute('download', `${filename}.png`);
        element.click(); //リンクをクリック
    });
}
