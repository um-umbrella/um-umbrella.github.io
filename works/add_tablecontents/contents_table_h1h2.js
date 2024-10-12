'use strict';

/* -------------------------------------------------------
 * Template: 倉林
 * ©2024 under my umbrella（https://um-umbrella.github.io/template/）
 *------------------------------------------------------ */

/////////////////////////////////////////////////////////////////////////
//h1[0]とh2を目次として#contents-table下に追加する

window.onload = function () {
    const h1 = document.getElementsByTagName('h1');
    if (!(h1.length === 0)) {
        AddPara(h1);
    }

    const h2 = document.getElementsByTagName('h2');
    if (!(h2.length === 0)) {
        AddPara(h2);
    }
};

////////////////////////////////
//リスト内容を返す
function AddPara(obj) {
    let condition;
    if (obj[0].tagName === 'H1') {
        condition = 1;
    } else {
        condition = obj.length;
    }

    const ul = document.getElementById('contents-table');
    for (let i = 0; i < condition; i++) {
        const li = document.createElement('li');

        let text;
        if (obj[i].id) {
            text = document.createElement('a');
            text.href = '#' + obj[i].id;
        } else if (obj[i].tagName === 'H1') {
            text = document.createElement('a');
            text.href = '#';
        } else {
            text = document.createElement('span');
        }

        text.textContent = obj[i].textContent;
        ul.appendChild(li);
        li.appendChild(text);
    }
}
