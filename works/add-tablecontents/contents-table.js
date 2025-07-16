'use strict';

/* -------------------------------------------------------
 * Template: 倉林
 * ©2024 under my umbrella（https://um-umbrella.github.io/template/）
 *------------------------------------------------------ */

//h2/h3/h4を目次として#contents-table下に追加します。

window.onload = function () {
    Search();
};

function Search() {
    //該当IDがない場合に処理を終了
    const table = document.getElementById('contents-table');
    if (!table) {
        return;
    }

    const ul = document.createElement('ul');
    table.appendChild(ul);
    const idName = 'contents-table-';

    //全ての要素を取得
    const allDocument = Array.from(document.querySelectorAll('h2, h3, h4'));
    console.log(allDocument);

    for (let i = 0; i < allDocument.length; i++) {
        if (!allDocument[i].id) {
            allDocument[i].id = idName + i; //IDを設定
        }

        const li = document.createElement('li'); //リストを生成

        //クラスを追加
        li.classList.toggle(idName + allDocument[i].tagName.toLowerCase());

        const text = document.createElement('a');
        text.href = '#' + allDocument[i].id;
        text.textContent = allDocument[i].textContent;

        ul.appendChild(li);
        li.appendChild(text);
    }
}
