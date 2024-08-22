'use strict';

//-------------------------------------------------------------

//------------------------------------------------------------

//#menuOpenをいじる
const menuOpen = document.getElementById('menuOpen');
menuOpen.addEventListener('click', menuOpenOperate);
const menu = document.getElementById('menu');

function menuCloseOperate() {
    //閉じるとき
    console.log(menuOpen.textContent);
    //表示
    menuOpen.style.display = 'block';
    //自分を非表示
    menu.style.display = 'none';
}

function menuOpenOperate() {
    //あけるとき
    const menuClose = document.getElementById('menuClose');
    //表示
    menu.style.display = 'block';
    //イベントリスナーを付ける
    menuClose.addEventListener('click', menuCloseOperate);
    //自分を非表示
    menuOpen.style.display = 'none';
}
