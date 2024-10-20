'use strict';

/* -------------------------------------------------------
 * Template: 倉林
 * ©2024 under my umbrella（https://um-umbrella.github.io/template/）
 *------------------------------------------------------ */

/////////////////////////////////////////////////////////////////////////
//h2を目次として#contents-table下に追加する

window.onload = function () {
    const h2 = document.getElementsByTagName('h2');
    if (!(h2.length === 0)) {
        AddPara(h2);
    }
};

////////////////////////////////
//リスト内容を返す
function AddPara(obj) {
    const table = document.getElementById('contents-table');
    if (!table) {
        return;
    }

    const ul = document.createElement('ul');
    table.appendChild(ul);

    for (let i = 0; i < obj.length; i++) {
        const idName = 'contents-table-';

        if (!obj[i].id) {
            obj[i].id = idName + i;
        }

        const li = document.createElement('li');
        let text = document.createElement('a');
        text.href = '#' + obj[i].id;

        text.textContent = obj[i].textContent;
        ul.appendChild(li);
        li.appendChild(text);
    }
}
