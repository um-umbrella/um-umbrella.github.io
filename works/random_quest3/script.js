'use strict';

////////////////////////////////////////////

//csv呼び出し
const arrayAll = Csv2Array('data.csv');
arrayAll[0].pop();
arrayAll[1].pop();
arrayAll[2].pop();
arrayAll[3].pop();
arrayAll[4].pop();
arrayAll[5].pop();

//0:行為、1:ポエムワード、2:ポエムオブジェクト、3:魔物・動物、4:職業、5:場所、6:特殊ルール、7:形容詞

//全て
const all = arrayAll[0]
    .concat(arrayAll[1])
    .concat(arrayAll[2])
    .concat(arrayAll[3])
    .concat(arrayAll[4])
    .concat(arrayAll[5]);

const purpose = arrayAll[0]; //目的
const people = arrayAll[4]; //依頼人
const place = [arrayAll[7], arrayAll[5], ' ']; //場所
const enemy = [all, arrayAll[3].concat(arrayAll[4]), 'の ']; //敵
const obstacle = arrayAll[1].concat([2]).concat([6]); //障害・問題
const rule = [arrayAll[7], arrayAll[6], ' ']; //特殊ルール系

/////////////////////////////////////////////
//全てシャッフルで再抽選

document.getElementById('random_button').addEventListener('click', Shuffle);
Shuffle();

function Shuffle() {
    LogAdd('r_purpose');
    LogAdd('r_people');
    LogAdd('r_place');
    LogAdd('r_obstacle');
    LogAdd('r_enemy');
    LogAdd('r_rule');
}

////////////////////////////////////////////
//結果を追加
function LogAdd(id) {
    //id：書き込む場所
    const arrayName = id.slice(2);
    let selectedArray;

    switch (arrayName) {
        case 'purpose':
            selectedArray = purpose;
            break;
        case 'people':
            selectedArray = people;
            break;
        case 'place':
            selectedArray = place;
            break;
        case 'obstacle':
            selectedArray = obstacle;
            break;
        case 'enemy':
            selectedArray = enemy;
            break;
        case 'rule':
            selectedArray = rule;
            break;

        default:
            console.log('指定された配列は存在しません');
            return;
    }

    let text;
    if (selectedArray.flat().length !== selectedArray.length) {
        text = ArrayOneChoice(selectedArray[0]) + ArrayOneChoice(selectedArray[2]) + ArrayOneChoice(selectedArray[1]);
    } else {
        text = ArrayOneChoice(selectedArray);
    }
    document.getElementById(id).innerText = text;
}

/////////////////////////////////////////////
//配列の内容を一つ選択
function ArrayOneChoice(name) {
    let num = Math.floor(Math.random() * name.length);
    return name[num];
}

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

///////////////////////////////////////////////////
//スクショ
const button = document.getElementById('cap_btn').addEventListener('click', screenshot);
const main = document.body;

function screenshot() {
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

        const filename = `ランダムお題_${date.getFullYear()}${nowDateArray[0]}${nowDateArray[1]}${nowDateArray[2]}${
            nowDateArray[3]
        }${nowDateArray[4]}`;

        const imageData = canvas.toDataURL('image/png');
        const element = document.createElement('a');
        element.setAttribute('href', imageData);
        element.setAttribute('download', `${filename}.png`);
        element.click();
    });
}

////////////////////////////
//コピペ

document.getElementById('copy_btn').addEventListener('click', Copy);

function Copy() {
    const h2 = document.querySelectorAll('h2');
    let text1 = `${h2[0].innerText}　：${document.getElementById('r_purpose').innerText}`;
    let text2 = `${h2[1].innerText}　：${document.getElementById('r_people').innerText}`;
    let text3 = `${h2[2].innerText}　：${document.getElementById('r_place').innerText}`;
    let text4 = `${h2[3].innerText}：${document.getElementById('r_enemy').innerText}`;
    let text5 = `${h2[4].innerText}　：${document.getElementById('r_obstacle').innerText}`;
    let text6 = `${h2[5].innerText}　　　　：${document.getElementById('r_rule').innerText}`;

    navigator.clipboard.writeText(`\n【クエストお題】\n${text1}\n${text2}\n${text3}\n${text4}\n${text5}\n${text6}\n`);
}
