'use strict';

const select = document.getElementById('mark-theme');

select.addEventListener('change', function () {
    const ul = document.getElementById('cap-ul');
    ul.classList.remove(...ul.classList);
    ul.classList.toggle(this.value);
});

///////////////////////////////////////////////////////////////
//クリア
const clear = document.getElementById('clear');
clear.addEventListener('click', function () {
    const h2 = document.getElementById('cap-h2');
    const ul = document.getElementById('cap-ul');
    const newUl = document.createElement('ul');

    h2.textContent = 'メモ';
    ul.remove();
    newUl.id = 'cap-ul';
    newUl.className = 'list-mark-circle';
    h2.parentElement.appendChild(newUl);
});

///////////////////////////////////////////////////////////////////////
//入力

const inputHBtn = document.getElementById('input-h-btn');
const inputTextBtn = document.getElementById('input-text-btn');

inputHBtn.addEventListener('click', h2Change);
inputTextBtn.addEventListener('click', addList);

function h2Change() {
    const h2 = document.getElementById('cap-h2');
    const inputH = document.getElementById('input-h');

    if (inputH.value == '') {
        return;
    }

    h2.textContent = inputH.value;
    inputH.value = '';
}

function addList() {
    const ul = document.getElementById('cap-ul');
    const li = document.createElement('li');
    const inputText = document.getElementById('input-text');

    if (inputText.value == '') {
        return;
    }

    li.textContent = inputText.value;
    ul.appendChild(li);
    inputText.value = '';
}

/////////////////////////////////////////////////////////////

const button = document.getElementById('cap');
button.addEventListener('click', screenGo);
const title = document.getElementById('cap-h2');

function screenGo() {
    html2canvas(document.getElementById('main'), {}).then(function (canvas) {
        const date = new Date();
        let dayPlus = '';
        if (date.getMonth() < 10) {
            dayPlus = 0;
        }
        const filename = `${title.textContent}_${date.getFullYear()}${dayPlus}${
            date.getMonth() + 1
        }${date.getDate()}${date.getHours()}${date.getMinutes()}${date.getSeconds()}`;

        const imageData = canvas.toDataURL('image/png');
        const element = document.createElement('a');
        element.setAttribute('href', imageData);
        element.setAttribute('download', `${filename}.png`);
        element.click();
    });
}
