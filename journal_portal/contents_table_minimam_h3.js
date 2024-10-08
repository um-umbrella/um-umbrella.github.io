'use strict';

/////////////////////////////////////////////////////////////////////////
//h2[0]とh3を目次として#contents-table下に追加する

window.onload = function () {
    const h3 = document.getElementsByClassName('scenario-h3');
    if (!(h3.length === 0)) {
        AddPara(h3);
    }
};

////////////////////////////////
//リスト内容を返す
function AddPara(obj) {
    let condition = obj.length;

    const ul = document.getElementById('contents-table');
    for (let i = 0; i < condition; i++) {
        const li = document.createElement('li');

        let text = document.createElement('a');
        text.href = '#' + obj[i].id;
        text.textContent = obj[i].textContent;
        ul.appendChild(li);
        li.appendChild(text);
    }
}
