'use strict';

/* -------------------------------------------------------
 * Template: 倉林
 * ©2024 under my umbrella（https://um-umbrella.github.io/template/）
 *------------------------------------------------------ */

//パーツ総計
// 前髪
const parts_hair_front = 15;
// 後ろ髪
const parts_hair_back = 11;
// 眉
const parts_eyebrow = 7;
// 目
const parts_eye = 9;
// ペイント
const parts_paint = 4;
// ひげ
const parts_whisker = 4;
// 口
const parts_mouse = 10;
// 輪郭
const parts_face = 3;

////////////////////////////////////////////////////////////

//ボタンでランダムに画像を表示

const play_button = document.getElementById('play_button').addEventListener('click', ButtonEvent);

function ButtonEvent() {
    RandomImageOn();
}

//画像を順に出す
function RandomImageOn() {
    const fileName = './img/';

    //髪
    document.getElementById('parts_hairfront').src = `${fileName}hairfront_${Math.floor(
        Math.random() * parts_hair_front
    )}.png`;
    document.getElementById('parts_hairback').src = `${fileName}hairback_${Math.floor(
        Math.random() * parts_hair_back
    )}.png`;

    //顔
    document.getElementById('parts_face').src = `${fileName}face_${Math.floor(Math.random() * parts_face)}.png`;

    document.getElementById('parts_eyebrow').src = `${fileName}eyebrow_${Math.floor(
        Math.random() * parts_eyebrow
    )}.png`;
    document.getElementById('parts_eye').src = `${fileName}eye_${Math.floor(Math.random() * parts_eye)}.png`;
    document.getElementById('parts_mouse').src = `${fileName}mouse_${Math.floor(Math.random() * parts_mouse)}.png`;

    //オプション
    if (Math.floor(Math.random() * 100 < 30)) {
        document.getElementById('parts_paint').src = `${fileName}paint_${Math.floor(Math.random() * parts_paint)}.png`;
    } else {
        document.getElementById('parts_paint').src = `${fileName}_nullimage.png`;
    }

    if (Math.floor(Math.random() * 100 < 30)) {
        document.getElementById('parts_whisker').src = `${fileName}whisker_${Math.floor(
            Math.random() * parts_whisker
        )}.png`;
    } else {
        document.getElementById('parts_whisker').src = `${fileName}_nullimage.png`;
    }

    //    document.getElementById('parts_あ～').src = `${fileName}${Math.floor(Math.random() * parts_あ～)}.png`;
}
