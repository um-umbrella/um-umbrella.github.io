'use strict';

////////////////////////////////////////////////////
//疑似パスワード

window.onload = function () {
    let pass = prompt('にんじんの次に苦いものといえば？');
    if (pass === 'fj') {
        document.getElementById('loading').classList.add('loaded');
    }
};
