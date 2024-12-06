'use strict';

/* -------------------------------------------------------
祝生誕祭
 *------------------------------------------------------ */

const congratulations =
    'なんと本日はお誕生日です、おめでとうございます！！　やった～～～！　めでたい！　人生最初の記念日！！！　🍖🍻🎉🎂HAPPY BIRTH DAY🎂🎉🍻🍖　今後益々のご活躍とご健勝をお祈り申し上げます！！！！！';
const day = 21; //21

Main();

//日付判定メニュー
function Main() {
    const days = Scheduling();
    SectionSpan(days);
    if ((days.month === 12, days.date === day)) {
        console.log('主役の日だ！　祭りだ！');
        document.getElementById('section_text').innerText = congratulations;
        document.body.classList.toggle('default');
        document.body.classList.toggle('birthday');
        Confetti();
    } else {
        console.log('主役の日ではないが祭りだ！');
    }
}

//日付を取得
function Scheduling() {
    const date = new Date();

    const nowDateArray = { year: date.getFullYear(), month: date.getMonth() + 1, date: date.getDate() };

    console.log(nowDateArray);
    return nowDateArray;
}

//日付をsection_spanに適用
function SectionSpan(e) {
    const span = document.getElementById('section_span');
    span.innerText = `${e.year}年${e.month}月${e.date}日`;
}

////////////////////////////////////////////////////////
//紙吹雪

function Confetti() {
    window.requestAnimationFrame =
        window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame;
    var canvas = document.querySelector('canvas');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    var ctx = canvas.getContext('2d');
    ctx.globalCompositeOperation = 'source-over';
    var particles = [];
    var pIndex = 0;
    var x, y, frameId;
    function Dot(x, y, vx, vy, color) {
        this.x = x;
        this.y = y;
        this.vx = vx;
        this.vy = vy;
        this.color = color;
        particles[pIndex] = this;
        this.id = pIndex;
        pIndex++;
        this.life = 0;
        this.maxlife = 1000;
        this.degree = getRandom(0, 360);
        this.size = Math.floor(getRandom(8, 10));
    }

    Dot.prototype.draw = function (x, y) {
        this.degree += 1;
        this.vx *= 0.99;
        this.vy *= 0.999;
        this.x += this.vx + Math.cos((this.degree * Math.PI) / 600);
        this.y += this.vy;
        this.width = this.size;
        this.height = Math.cos((this.degree * Math.PI) / 40) * this.size;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.moveTo(this.x + this.x / 2, this.y + this.y / 2);
        ctx.lineTo(this.x + this.x / 2 + this.width / 2, this.y + this.y / 2 + this.height);
        ctx.lineTo(this.x + this.x / 2 + this.width + this.width / 2, this.y + this.y / 2 + this.height);
        ctx.lineTo(this.x + this.x / 2 + this.width, this.y + this.y / 2);
        ctx.closePath();
        ctx.fill();
        this.life++;
        if (this.life >= this.maxlife) {
            delete particles[this.id];
        }
    };
    window.addEventListener('resize', function () {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        x = canvas.width / 2;
        y = canvas.height / 2;
    });

    function loop() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        if (frameId % 4 == 0) {
            new Dot(
                canvas.width * Math.random() - canvas.width + canvas.width * Math.random(),
                -canvas.height / 2,
                getRandom(1, 3),
                getRandom(2, 4),
                '#ED1A3D'
            );
            new Dot(
                canvas.width * Math.random() - canvas.width + canvas.width * Math.random(),
                -canvas.height / 2,
                getRandom(1, 3),
                getRandom(2, 4),
                '#FFEB3D'
            );
            new Dot(
                canvas.width * Math.random() - canvas.width + canvas.width * Math.random(),
                -canvas.height / 2,
                getRandom(1, 3),
                getRandom(2, 4),
                '#009688'
            );
            new Dot(
                canvas.width * Math.random() - canvas.width + canvas.width * Math.random(),
                -canvas.height / 2,
                getRandom(1, 3),
                getRandom(2, 4),
                '#0693e3'
            );
        }
        for (var i in particles) {
            particles[i].draw();
        }
        frameId = requestAnimationFrame(loop);
    }

    loop();

    function getRandom(min, max) {
        return Math.random() * (max - min) + min;
    }
}
