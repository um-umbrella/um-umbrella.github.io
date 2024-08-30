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
    menuOpen.style.display = 'block';
    menu.style.display = 'none';
}

function menuOpenOperate() {
    //あけるとき
    const menuClose = document.getElementById('menuClose');
    menu.style.display = 'block';
    menuClose.addEventListener('click', menuCloseOperate);
    menuOpen.style.display = 'none';
}
