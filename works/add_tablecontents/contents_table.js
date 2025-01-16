'use strict';

/* -------------------------------------------------------
 * Template: 倉林
 * ©2024 under my umbrella（https://um-umbrella.github.io/template/）
 *------------------------------------------------------ */

/////////////////////////////////////////////////////////////////////////
//h2/h3を目次として#contents-table下に追加します。

window.onload = function () {
    Search();
};

///////////////////////////////

function Search() {
    //全ての要素を取得
    const table = document.getElementById('contents-table');
    if (!table) {
        return;
    }

    const ul = document.createElement('ul');
    table.appendChild(ul);
    const idName = 'contents-table-';

    const pageDocument = document.getElementsByTagName('*');
    const allDocument = pageDocument;

    for (let i = 0; i < allDocument.length; i++) {
        //h2またはh3でない場合はループを抜ける
        if (allDocument[i].tagName === 'H2' || allDocument[i].tagName === 'H3') {
            if (!allDocument[i].id) {
                //IDがない場合は設定
                allDocument[i].id = idName + i;
            }

            //リストを生成
            const li = document.createElement('li');
            if (allDocument[i].tagName === 'H2') {
                li.classList.toggle(idName + 'h2');
            } else if (allDocument[i].tagName === 'H3') {
                li.classList.toggle(idName + 'h3');
            } else {
                console.error('');
            }

            const text = document.createElement('a');
            text.href = '#' + allDocument[i].id;
            text.textContent = allDocument[i].textContent;

            ul.appendChild(li);
            li.appendChild(text);

            i += 2;
        }
    }
}
