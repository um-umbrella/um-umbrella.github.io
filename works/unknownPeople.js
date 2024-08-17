'use strict';

//文字版、やるぞ
const word = ['⌒ ⌒', '💢', '💭', '❓❔', '💗', '❗', '🎵', '✨'];
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

  let num = Math.floor(Math.random() * word.length);
  //switchから配列に変更
  mark = word[num];
  if (num === 0) {
    score += 1;
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
