'use strict';

///////////////////////////////////////////////////////////
//csvを多次元配列として呼び出す
const arrayOfPoems = csv2Array('poem_list.csv');

//csvの位置をランダムに決定
const positionOfPoems = Math.floor(Math.random() * arrayOfPoems.length);

//csvの位置（ランダム）を呼び出し、一篇分の配列を得る
const story = arrayOfPoems[positionOfPoems];

//////////////////////////////
//一篇をHTMLに追加
const ul = document.getElementById('poem-area');

for (let i = 0; i < story.length; i++) {
    const li = document.createElement('li');
    li.textContent = story[i];
    ul.appendChild(li);
}

///////////////////////////////////////////////////////////
//csv呼び出し

function csv2Array(filePath) {
    let csvData = new Array();
    let data = new XMLHttpRequest();
    data.open('GET', filePath, false);
    data.send(null);

    let LF = String.fromCharCode(10); //改行ｺｰﾄﾞ
    let lines = data.responseText.split(LF);
    for (let i = 0; i < lines.length; ++i) {
        let cells = lines[i].split(',');
        if (cells.length != 1) {
            csvData.push(cells);
        }
    }
    return csvData;
}
