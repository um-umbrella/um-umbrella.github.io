'use strict';

/* -------------------------------------------------------
 * Template: 倉林
 * ©2024 under my umbrella（https://um-umbrella.github.io/template/）
 *------------------------------------------------------ */

/////////////////////////////////////////////////////////////////////////
//h2[0]とh3を目次として#contents-table下に追加する

window.onload = function () {
    const h2 = document.getElementsByTagName('h2');
    if (!(h2.length === 0)) {
        AddPara(h2);
    }

    const h3 = document.getElementsByTagName('h3');
    if (!(h3.length === 0)) {
        AddPara(h3);
    }
};

////////////////////////////////
//リスト内容を返す
function AddPara(obj) {
    let condition;
    if (obj[0].tagName === 'H2') {
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
        } else if (obj[i].tagName === 'H2') {
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
