'use strict';

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
    let result = oneChoise(eyeType) + oneChoise(eyeStyle);
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

        const filename = `ランダムヒト_${date.getFullYear()}${nowDateArray[0]}${nowDateArray[1]}${nowDateArray[2]}${
            nowDateArray[3]
        }${nowDateArray[4]}`;

        const imageData = canvas.toDataURL('image/png');
        const element = document.createElement('a');
        element.setAttribute('href', imageData);
        element.setAttribute('download', `${filename}.png`);
        element.click(); //リンクをクリック
    });
}

////////////////////////////////csv読み込み
const colorCodes = csv2Array('data.csv')[0];
colorCodes.pop();
const hairType = csv2Array('data.csv')[1];
hairType.pop();
const hairStyle = csv2Array('data.csv')[2];
hairStyle.pop();
const eyeType = csv2Array('data.csv')[3];
eyeType.pop();
const eyeStyle = csv2Array('data.csv')[4];
eyeStyle.pop();
const lookStyle = csv2Array('data.csv')[5];
lookStyle.pop();
const talkStyle = csv2Array('data.csv')[6];
talkStyle.pop();

function csv2Array(filePath) {
    //引数：csvファイルの相対or絶対パス
    var csvData = new Array();
    var data = new XMLHttpRequest();
    data.open('GET', filePath, false); //true:非同期,false:同期
    data.send(null);

    var LF = String.fromCharCode(10); //改行ｺｰﾄﾞ
    var lines = data.responseText.split(LF);
    for (var i = 0; i < lines.length; ++i) {
        var cells = lines[i].split(',');
        if (cells.length != 1) {
            csvData.push(cells);
        }
    }
    return csvData;
}
