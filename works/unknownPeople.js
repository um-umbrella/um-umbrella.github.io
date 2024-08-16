'use strict';

//文字版、やるぞ
const eye = document.getElementById('eye');
const people = document.getElementById('people');
const ano = document.getElementById('ano');
const playCount = document.getElementById('playCount');
let count = 0; //回答数
let score = 0; //正解かどうかを見る
const anoText = 'くりっく　してね';

//イベントリスナ
people.addEventListener('click', gameStart);

function gameStart() {
  eye.textContent = '';
  let mark = 0; //記号を入れるやつ

  let num = Math.floor(Math.random() * 5 + 1);
  console.log(num);
  switch (num) {
    case 1 || 6:
      mark = '💗';
      break;
    case 2 || 7:
      mark = '💢';
      break;
    case 3 || 8:
      mark = '💭';
      break;
    case 4 || 9:
      mark = '❓❔';
      break;
    case 5 || 10:
      mark = '⌒ ⌒';
      score += 1;
      break;
    default:
      mark = '？？？';
  }

  eye.textContent = mark;
  count++; //回数を追加

  //解答回数を表示
  playCount.textContent = `（${count}回目）`;

  if (score > 0) {
    //正解のとき
    youWin();
  }
}

function youWin() {
  ano.textContent = 'あ！　にっこり！';

  //やりなおしボタンを設置
  const button = document.createElement('button');
  button.textContent = 'はじめから';

  /*これはｐの隣に追加だけど、メインに追加でいいのか…？
  ano.parentElement.append(br);
  ano.parentElement.appendChild(button);        */
  ano.parentElement.parentElement.appendChild(button);

  button.addEventListener('click', resetGame);
  people.removeEventListener('click', gameStart);
}

function resetGame() {
  console.log('ゲームをリセット！');
  score = 0;
  count = 0;

  eye.textContent = '';
  ano.textContent = anoText;
  playCount.textContent = '';

  document.querySelector('button').remove();
  people.addEventListener('click', gameStart);
}

/*
const canvas = document.querySelector('script');
script.src = 'html2canvas.js'; //ファイルパス
document.body.appendChild(canvas);

/*
//pict.addEventListener('click', html2canvas);

html2canvas(document.body).then(function (canvas) {
  document.body.appendChild(canvas);
});

/*
//const img = document.getElementsByClassName('img');
const img = document.querySelector('img');

let i = 5;
img.addEventListener('click', () => {
  //クリックするたびにでかくなる
  /*
  img.style.height = 100 + i + 'px';
  img.style.width = 100 + i + 'px';
  
  //クリックで星が出るとか  動かんな
  //  img.classList.toggle('star');

  //クリックごとに後光が差す
  img.classList.toggle('gokoh');

  //クリックすると動く  これは座標を動かすことだね
  // img.style.
  if (document.querySelectorAll('p').length == 0) {
    const p = document.createElement('p');
    p.textContent = 'あ！　野生のフードの男だ！';

    const div = document.querySelector('div');
    div.insertBefore(p, div.lastElementChild);
  } else {
    //pを削除
    const p = document.querySelector('p');
    p.textContent = '';
  }

  i += 50;
});
*/
