'use strict';

////////////////////////////////////////////
//配列を回収

//季節、天候？、時間帯//////

//csv呼び出し
const arrayAll = Csv2Array('data.csv');

//依頼
const arrayQuest = arrayAll[0];
arrayQuest.pop();
console.log(arrayQuest);
//行為
const arrayAction = arrayAll[2];
arrayAction.pop();
//ポエム・ワード
const arrayPoemWord = arrayAll[3];
arrayPoemWord.pop();
//ポエム・オブジェ
const arrayPoemObj = arrayAll[4];
arrayPoemObj.pop();
//魔物・動物
const arrayAnimal = arrayAll[5];
arrayAnimal.pop();
//色
const arrayColor = arrayAll[6];
arrayColor.pop();
//食材・材料
const arrayMaterial = arrayAll[7];
arrayMaterial.pop();
//飲食物
const arrayFood = arrayAll[8];
arrayFood.pop();
//職業
const arrayJob = arrayAll[9];
arrayJob.pop();
//場所
const arrayArea = arrayAll[10];
arrayArea.pop();
//武具・装備
const arrayWeapon = arrayAll[11];
arrayWeapon.pop();
//形容詞
const arrayAdjective = arrayAll[1];
arrayAdjective.pop();

/////////////////////
//csv読み込み

function Csv2Array(filePath) {
    //引数：csvファイルの相対or絶対パス
    const csvData = new Array();
    const data = new XMLHttpRequest();
    data.open('GET', filePath, false); //true:非同期,false:同期
    data.send(null);

    const LF = String.fromCharCode(10); //改行ｺｰﾄﾞ
    const lines = data.responseText.split(LF);
    for (let i = 0; i < lines.length; ++i) {
        const cells = lines[i].split(',');
        if (cells.length != 1) {
            csvData.push(cells);
        }
    }
    return csvData;
}

/////////////////////////////////////////////
//依頼書

document.getElementById('quest_button').addEventListener('click', QuestRequest);

function QuestRequest() {
    console.log('■依頼を表示');
    //依頼
    const quest = ArrayOneChoice(arrayQuest);
    //依頼人
    const who = ArrayOneChoice(arrayJob);
    //どこの
    const where = ArrayOneChoice(arrayArea);
    ////////////////////////////
    //目的語
    let target;
    if (quest === '討伐' || quest === '殲滅' || quest === '間引き') {
        //動物か魔物・形容詞な
        target = '「' + ArrayOneChoice(arrayAdjective.concat(arrayColor)) + ArrayOneChoice(arrayAnimal) + '」';
    } else {
        //何らかの目的語
        let array = DoubleWord();
        target = '「' + array[0] + array[1] + array[2] + '」';
    }

    const title = document.getElementById('quest_title');
    title.innerText = `${quest}依頼`;
    const text = document.getElementById('quest_text');
    text.innerText = `${where}にて${target}の${quest}をお願いします。`;
    document.getElementById('quest_name').innerText = `by ${who}`;
}

//ダブル
function DoubleWord() {
    //全てを追加
    let array = arrayQuest
        .concat(arrayAction)
        .concat(arrayPoemWord)
        .concat(arrayPoemObj)
        .concat(arrayAnimal)
        .concat(arrayColor)
        .concat(arrayMaterial)
        .concat(arrayFood)
        .concat(arrayJob)
        .concat(arrayArea)
        .concat(arrayWeapon)
        .concat(arrayAdjective);

    //色（の）○○
    //パン屋（の）○○
    let random = Math.floor(Math.random() * 100);

    let textA;
    let textB = 'の';

    if (random < 10) {
        textA = ArrayOneChoice(arrayColor);
    } else if (random < 25) {
        textA = ArrayOneChoice(arrayJob);
    } else {
        textA = ArrayOneChoice(array);
        random = Math.floor(Math.random() * 100);
        //接続詞を選択　と　の
        if (random > 85) {
            textB = 'の';
        } else if (random > 60) {
            textB = 'と';
        } else if (random > 40) {
        }
    }

    const textC = ArrayOneChoice(array);

    return [textA, textB, textC];
}

/////////////////////
//配列の内容を一つ選択
function ArrayOneChoice(name) {
    let num = Math.floor(Math.random() * name.length);
    console.log('配列のランダム指定：' + num);
    return name[num];
}

/////////////////////////////////////////////
//シャッフル

document.getElementById('shuffle').addEventListener('click', Shuffle);
Shuffle();

function Shuffle() {
    QuestRequest();
    LogAdd('arrayAction');
    LogAdd('arrayPoemWord');
    LogAdd('arrayPoemObj');
    LogAdd('arrayAnimal');
    Color();
    Material();
    LogAdd('arrayFood');
    LogAdd('arrayJob');
    LogAdd('arrayArea');
    LogAdd('arrayWeapon');
    LogAdd('arrayAdjective');
}

/////////////////////////////////////////////
//イベリス

const buttonAll = document.getElementsByClassName('switchButton');
const buttonAllArray = Array.from(buttonAll);

for (let i = 0; i < buttonAllArray.length; i++) {
    buttonAll[i].addEventListener('click', ButtonPush);
}

function ButtonPush(e) {
    console.log('開始場所：', e.target.id);
    LogAdd(e.target.id);
}

////////////////////////////////////////////
//ログを出力
function LogAdd(id) {
    //id：書き込む場所
    console.log('開始場所のID' + id);

    const array = LabelToArray(id);
    const text = ArrayOneChoice(array);
    document.getElementById(id + 'Input').innerText = text;
}

////IDを配列にがんばる
function LabelToArray(value) {
    console.log('頑張る元：' + value);
    const e = value;
    let result;
    if (e === 'arrayQuest') {
        result = arrayQuest;
    } else if (e === 'arrayAction') {
        //分岐
        result = arrayAction;
    } else if (e === 'arrayPoemWord') {
        //分岐
        result = arrayPoemWord;
    } else if (e === 'arrayPoemObj') {
        //分岐
        result = arrayPoemObj;
    } else if (e === 'arrayAnimal') {
        //分岐
        result = arrayAnimal;
    } else if (e === 'arrayColor') {
        //分岐
        result = arrayColor;
    } else if (e === 'arrayMaterial') {
        //分岐
        result = arrayMaterial;
    } else if (e === 'arrayFood') {
        //分岐
        result = arrayFood;
    } else if (e === 'arrayJob') {
        //分岐
        result = arrayJob;
    } else if (e === 'arrayArea') {
        //分岐
        result = arrayArea;
    } else if (e === 'arrayWeapon') {
        //分岐
        result = arrayWeapon;
    } else if (e === 'arrayAdjective') {
        //分岐
        result = arrayAdjective;
    } else {
        console.error('結果なし');
        result = '';
    }
    return result;
}

/////////////////////
//材料用
document.getElementById('arrayMaterial').addEventListener('click', Material);

function Material() {
    //色、ポエムオブジェ、ワード
    let first = ArrayOneChoice(arrayColor.concat(arrayPoemObj).concat(arrayPoemWord));
    const second = ArrayOneChoice(arrayMaterial);
    const target = document.getElementById('arrayMaterialInput');

    let random = Math.floor(Math.random() * 100);
    if (random < 50) {
        first += 'の';
    }
    target.innerText = first + second;
}

///////////////////////
//色用

document.getElementById('arrayColor').addEventListener('click', Color);

function Color() {
    //形容詞＋色
    const first = ArrayOneChoice(arrayAdjective) + 'な';
    const second = ArrayOneChoice(arrayColor);
    const target = document.getElementById('arrayColorInput');

    target.innerText = first + second;
}

///////////////////////////////////////////////////
//スクショ
const button = document.getElementById('cap_btn');
button.addEventListener('click', screenshot);
const main = document.body;

function screenshot() {
    console.log('呼び出したよ');
    html2canvas(document.getElementById('cap_area'), {}).then(function (canvas) {
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

        const filename = `依頼書_${date.getFullYear()}${nowDateArray[0]}${nowDateArray[1]}${nowDateArray[2]}${
            nowDateArray[3]
        }${nowDateArray[4]}_${document.getElementById('quest_title').innerText}`;

        const imageData = canvas.toDataURL('image/png');
        const element = document.createElement('a');
        element.setAttribute('href', imageData);
        element.setAttribute('download', `${filename}.png`);
        element.click();
    });
}
