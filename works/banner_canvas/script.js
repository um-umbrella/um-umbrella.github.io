'use strict';

const colorCodes = ['a', 'b', 'c', 'd', 'e', 'f', 0, 1, 2, 3, 4, 5, 6];

const windowSize = window.devicePixelRatio;

//////////////////////////////////
//配列から一つを選択する

function OneChoice(e) {
    return e[Math.floor(Math.random() * e.length)];
}

////////////////////////////////////////////////////////////////////
//入力を反映する（サイズ？用）
/*
const a = document.getElementById('ID名');
ID名.addEventListener('change', ToOutputText);
*/

const inputBgText = document.getElementById('input-bg-color');
inputBgText.addEventListener('change', ToOutputText);

const inputText = document.getElementById('input-text');
inputText.addEventListener('change', ToOutputText);
const inputTextColor = document.getElementById('input-text-color');
inputTextColor.addEventListener('change', ToOutputText);
const inputTextSize = document.getElementById('input-text-size');
inputTextSize.addEventListener('change', ToOutputText);
const inputTextStyle = document.getElementById('input-text-style');
inputTextStyle.addEventListener('change', ToOutputText);
const inputTextAngle = document.getElementById('input-text-angle');
inputTextAngle.addEventListener('change', ToOutputText);

const inputTextCoordinateX = document.getElementById('input-text-coordinate-x');
inputTextCoordinateX.addEventListener('change', ToOutputText);
const inputTextCoordinateY = document.getElementById('input-text-coordinate-y');
inputTextCoordinateY.addEventListener('change', ToOutputText);

const inputBorderLine = document.getElementById('input-border-line');
inputBorderLine.addEventListener('change', ToOutputText);
const inputBorderColor = document.getElementById('input-border-color');
inputBorderColor.addEventListener('change', ToOutputText);
const inputBorderSize = document.getElementById('input-border-size');
inputBorderSize.addEventListener('change', ToOutputText);

const inputShapesDesign = document.getElementById('input-shapes-design');
inputShapesDesign.addEventListener('change', ToOutputText);
const inputShapesSize = document.getElementById('input-shapes-size');
inputShapesSize.addEventListener('change', ToOutputText);
const inputShapesColor = document.getElementById('input-shapes-color');
inputShapesColor.addEventListener('change', ToOutputText);

const inputBorderCoordinateX = document.getElementById('input-shapes-coordinate-x');
inputBorderCoordinateX.addEventListener('change', ToOutputText);
const inputBorderCoordinateY = document.getElementById('input-shapes-coordinate-y');
inputBorderCoordinateY.addEventListener('change', ToOutputText);
const inputShapesAngle = document.getElementById('input-shapes-angle');
inputShapesAngle.addEventListener('change', ToOutputText);

const inputCanvasX = document.getElementById('input-canvas-x');
inputCanvasX.addEventListener('change', ToOutputText);
const inputCanvasY = document.getElementById('input-canvas-y');
inputCanvasY.addEventListener('change', ToOutputText);

function ObjFrame(id, value, outputEle, styleItem) {
    this.id = id;
    this.value = value;
    this.outputEle = outputEle;
    this.styleItem = styleItem;
}

//呼び出し
function ToOutputText(e) {
    const id = e.target.id;
    const value = e.target.value;

    if (id === 'input-bg-color') {
        AddContent(new ObjFrame(id, value, 'cap-area', 'background-color'));
    } else if (id === 'input-text') {
        addText(new ObjFrame(id, value, 'output-text', ''));
    } else if (id === 'input-text-color') {
        AddContent(new ObjFrame(id, value, 'output-text', 'color'));
    } else if (id === 'input-text-size') {
        AddNumPx(new ObjFrame(id, value, 'output-text', 'font-size'));
    } else if (id === 'input-text-style') {
        AddClassSwap(new ObjFrame(id, value, 'output-text', 'font-family'));
    } else if (id === 'input-text-angle') {
        AddContent(new ObjFrame(id, value, 'output-text', 'transform'));
    } else if (id === 'input-text-coordinate-x') {
        AddNumPx(new ObjFrame(id, value, 'output-text', 'left'));
    } else if (id === 'input-text-coordinate-y') {
        AddNumPx(new ObjFrame(id, value, 'output-text', 'top'));
    } else if (id === 'input-border-line') {
        AddContent(new ObjFrame(id, value, 'cap-area', 'border-style'));
    } else if (id === 'input-border-color') {
        AddContent(new ObjFrame(id, value, 'cap-area', 'border-color'));
    } else if (id === 'input-border-size') {
        AddNumPx(new ObjFrame(id, value, 'cap-area', 'border-width'));
    } else if (id === 'input-shapes-design') {
        AddClassSwap(new ObjFrame(id, value, 'output-shapes', ''));
    } else if (id === 'input-shapes-size') {
        AddNumPx(new ObjFrame(id, value, 'output-shapes', 'width'));
    } else if (id === 'input-shapes-color') {
        AddContent(new ObjFrame(id, value, 'output-shapes', 'background-color'));
    } else if (id === 'input-shapes-coordinate-x') {
        AddNumPx(new ObjFrame(id, value, 'output-shapes', 'left'));
    } else if (id === 'input-shapes-coordinate-y') {
        AddNumPx(new ObjFrame(id, value, 'output-shapes', 'top'));
    } else if (id === 'input-shapes-angle') {
        AddContent(new ObjFrame(id, value, 'output-shapes', 'transform'));
    } else if (id === 'input-canvas-x') {
        AddCanvas(new ObjFrame(id, value, 'cap-area', 'width'));
    } else if (id === 'input-canvas-y') {
        AddCanvas(new ObjFrame(id, value, 'cap-area', 'height'));
    } else {
        console.error('値が不正だよ～');
    }
}

/////////////////////
//テキスト反映
function addText(obj) {
    const element = document.getElementById(obj.outputEle);
    element.textContent = obj.value;
}

//数字反映
function AddNumPx(obj) {
    console.log('数字（px）を反映');
    const element = document.getElementById(obj.outputEle);
    element.style[obj.styleItem] = `${obj.value}px`;

    topInputValue(obj);
}

//数字反映（キャンバスサイズ不正用）
function AddCanvas(obj) {
    console.log('キャンバスサイズを不正する');
    const element = document.getElementById(obj.outputEle);
    let num = obj.value;
    num = num / 1.25;
    console.log(num);
    element.style[obj.styleItem] = `${num}px`;
}

//その他の全ての内容を反映
function AddContent(obj) {
    console.log('内容（単位なし）を反映');
    const element = document.getElementById(obj.outputEle);

    if (obj.id.includes('angle')) {
        element.style[obj.styleItem] = `rotate(${obj.value}deg)`;
    } else {
        element.style[obj.styleItem] = `${obj.value}`;
    }
    topInputValue(obj);
}

//図形、クラスを付け替え
function AddClassSwap(obj) {
    console.log('図形のクラスを付け替え');
    const element = document.getElementById(obj.outputEle);

    element.classList.remove(...element.classList);
    topInputValue(obj);

    if (obj.value) {
        element.classList.toggle(obj.value);
    }
}

/////////////////
//入力をinputに返す
function topInputValue(obj) {
    document.getElementById(obj.id).value = obj.value;
}

////////////////////////////////////////////////////////////////////
//全ランダム試作
const randomBtn = document.getElementById('random-btn');
randomBtn.addEventListener('click', StyleRandom);

function StyleRandom(e) {
    AddContent(new ObjFrame('input-bg-color', ColorCode(), 'cap-area', 'background-color'));
    AddNumPx(new ObjFrame('input-text-size', Math.floor(Math.random() * 16 + 8), 'output-text', 'font-size'));
    AddContent(new ObjFrame('input-text-color', ColorCode(), 'output-text', 'color'));
    AddNumPx(new ObjFrame('input-text-coordinate-x', Math.floor(Math.random() * 160 + 20), 'output-text', 'left'));
    AddNumPx(new ObjFrame('input-text-coordinate-y', Math.floor(Math.random() * 20 + 10), 'output-text', 'top'));

    let array = ['solid', 'dotted', 'double', 'dashed', 'ridge', 'none'];
    let arrayResult = Math.floor(Math.random() * array.length);
    AddContent(new ObjFrame('input-border-line', array[arrayResult], 'cap-area', 'border-style'));

    AddContent(new ObjFrame('input-border-color', ColorCode(), 'cap-area', 'border-color'));
    AddNumPx(new ObjFrame('input-border-size', Math.floor(Math.random() * 10), 'cap-area', 'border-width'));

    array = ['circle', 'square', 'none'];
    arrayResult = Math.floor(Math.random() * array.length);
    AddClassSwap(new ObjFrame('input-shapes-design', array[arrayResult], 'output-shapes', '？'));

    AddNumPx(new ObjFrame('input-shapes-size', Math.floor(Math.random() * 400), 'output-shapes', 'width'));
    AddContent(new ObjFrame('input-shapes-color', ColorCode(), 'output-shapes', 'background-color'));
    AddNumPx(new ObjFrame('input-shapes-coordinate-x', Math.floor(Math.random() * 400 - 200), 'output-shapes', 'left'));
    AddNumPx(new ObjFrame('input-shapes-coordinate-y', Math.floor(Math.random() * 80 - 40), 'output-shapes', 'top'));
}

//////////////////////////////
//カラーコード生成

function ColorCode() {
    let colorCode = '';
    for (let i = 0; i < 6; i++) {
        colorCode += OneChoice(colorCodes);
    }
    return '#' + colorCode;
}

////////////////////////////////////////////////////////////////////

const button = document.getElementById('cap-btn');
button.addEventListener('click', screenshot);
const main = document.body;

function screenshot() {
    const canvasX = inputCanvasX.value / windowSize;
    const canvasY = inputCanvasY.value / windowSize;

    html2canvas(document.getElementById('cap-area'), {
        width: canvasX,
        height: canvasY,
        windowWidth: canvasX,
        windowHeight: canvasY,
    }).then(function (canvas) {
        const date = new Date();
        let dayPlus = '';
        if (date.getMonth() < 10) {
            dayPlus = 0;
        }
        console.log(dayPlus);
        const filename = `バナー画像を作るやつ_${date.getFullYear()}${dayPlus}${
            date.getMonth() + 1
        }${date.getDate()}${date.getHours()}${date.getMinutes()}${date.getSeconds()}`;

        const imageData = canvas.toDataURL('image/png');
        const element = document.createElement('a');
        element.setAttribute('href', imageData);
        element.setAttribute('download', `${filename}.png`);
        element.click(); //リンクをクリックした状態を起こす
    });
}
