'use strict';

//カラーコード生成
const colorCodes = [0, 1, 2, 3, 4, 5, 'a', 'b', 'c', 'd', 'e', 'f'];

///////////////////////////////////////////////////////////
//キー押下・クリック時に発火
document.body.addEventListener('keydown', colorChange);
document.body.addEventListener('click', colorChange);
//クリックで全反応→困る→Pだけ除外する方法を探る→（CSSでz-indexをいじってみたりするが空振り）→pのときだけ処理を中止したらいいんじゃね！？と気付く→出た！！targetだ～～！！！！

///////////////////////
//色をclassに適用
function colorChange(e) {
    if (e.target.className == 'colorCode' || e.target.id == 'cap') {
        //押した対象がpかbuttonのとき中止
        return;
    }
    const color1 = document.getElementById('color1');
    const color2 = document.getElementById('color2');
    const p = document.getElementsByClassName('colorCode');

    const bg = colorSelect();
    const color = colorSelect();

    color1.style.backgroundColor = bg;
    color1.style.color = color;
    p[0].textContent = bg;

    color2.style.backgroundColor = color;
    color2.style.color = bg;
    p[1].textContent = color;
}

//色を生成
function colorSelect() {
    let colorCode = '';
    for (let i = 0; i < 6; i++) {
        colorCode += oneChoise(colorCodes);
    }
    return `#${colorCode}`;
}

//配列から一つを選択
function oneChoise(e) {
    return e[Math.floor(Math.random() * e.length)];
}

//////////////////////////////////////////////////////////

const button = document.getElementById('cap');
button.addEventListener('click', screenGo);
const main = document.body;

function screenGo() {
    html2canvas(document.querySelector('main'), {
        //オプション
        width: 400,
        windowWidth: 400,
    }).then(function (canvas) {
        //出力処理  canvas

        //日付でファイル名生成
        const date = new Date();
        let dayPlus = '';
        if (date.getMonth() < 10) {
            dayPlus = 0;
        }
        console.log(dayPlus);
        const filename = `twoColors_${date.getFullYear()}${dayPlus}${
            date.getMonth() + 1
        }${date.getDate()}${date.getHours()}${date.getMinutes()}${date.getSeconds()}`;

        const imageData = canvas.toDataURL('image/png');
        const element = document.createElement('a');
        element.setAttribute('href', imageData);
        element.setAttribute('download', `${filename}.png`);
        element.click(); //リンクをクリックした状態を起こす
    });
}
