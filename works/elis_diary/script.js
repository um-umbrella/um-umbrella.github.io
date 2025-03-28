'use strict';

////////////////////////////////////////////////////
//疑似パスワード

window.onload = function () {
    document.body.style.display = 'none';
    let pass = prompt('にんじんの次に苦いものといえば？');
    if (pass === 'fj') {
        document.body.style.display = 'block';
    }
};
