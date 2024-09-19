'use strict';

//画像にリスナー追加
const imgArray = document.querySelectorAll('img');
for (const imgClass of imgArray) {
    if (imgClass.className.includes('modal-window')) {
        imgClass.addEventListener('click', imgClick);
    }
}

function imgClick() {
    //i生成
    let div = document.createElement('div');
    let img = document.createElement('img');
    let p = document.createElement('p');

    img.src = this.src;
    p.textContent = this.alt;
    div.classList.toggle('addWindow');

    document.body.appendChild(div);
    div.appendChild(img);
    div.appendChild(p);
    div.addEventListener('click', imgDelete);

    //イベント中止
    event.preventDefault();
}

const sleep = (time) => new Promise((resolve) => setTimeout(resolve, time)); //timeはミリ秒

//sleep/async
async function imgDelete() {
    this.style.opacity = 0;
    await sleep(250);
    this.remove();
}
