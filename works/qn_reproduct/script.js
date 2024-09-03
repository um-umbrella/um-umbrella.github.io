'use strict';

const memo = ['will→…………………………………作った！'];

///////////////////////////////////////////////////////

//新しい行の追加
const newColumSub = document.getElementById('new_colum_sub');
newColumSub.addEventListener('click', newColumAdd);
const capture = document.getElementById('capture');

function newColumAdd() {
    //行動者名を取得
    const newColum = document.getElementById('new_colum');

    //div   tl_frame_large
    const tlFrameLarge = document.createElement('div');
    tlFrameLarge.className = 'tl_frame_large';
    //p     action_player
    const actionPlayer = document.createElement('p');
    actionPlayer.className = 'action_player';
    actionPlayer.textContent = newColum.value;
    //div   tl_frame_small
    const tlFrameSmall = document.createElement('div');
    tlFrameSmall.className = 'tl_frame_small';

    capture.appendChild(tlFrameLarge);
    tlFrameLarge.appendChild(actionPlayer);
    tlFrameLarge.appendChild(tlFrameSmall);
}

//最下部の行を削除
const deleteColumSub = document.getElementById('delete_colum_sub');
deleteColumSub.addEventListener('click', deleteColumAdd);

function deleteColumAdd() {
    const tlFrameLarge = document.getElementsByClassName('tl_frame_large');
    tlFrameLarge[tlFrameLarge.length - 1].remove();

    //    capture.removeChild(capture.lastElementChild);
}

//最新の行動を削除
const deleteLastAction = document.getElementById('delete_last_action');
deleteLastAction.addEventListener('click', deleteLastActionAdd);

function deleteLastActionAdd() {
    const actionSet = document.getElementsByClassName('action_set');

    actionSet[actionSet.length - 1].remove();
}

//「プリセット」change時に#action_～に反映する
const preset = document.getElementById('preset');

preset.addEventListener('change', (e) => {
    //アイコン・アクション名・AP・対象とか
    let icon;
    let name;
    let ap;
    let etc;

    if (e.target.value === '攻撃') {
        icon = '剣';
        name = '攻撃';
        ap = '4';
        etc = '対象';
    } else if (e.target.value == '移動') {
        icon = '移動';
        name = '移動';
        ap = '3';
        etc = '[x,y]';
    } else if (e.target.value == '待機') {
        icon = '丸';
        name = '待機';
        ap = '1';
        etc = '';
    } else if (e.target.value == 'アイテム') {
        icon = 'アイテム';
        name = 'アイテム';
        ap = '4';
        etc = '';
    } else if (e.target.value == 'アクション') {
        icon = '手';
        name = 'アクション';
        ap = '6';
        etc = '[x,y]';
    }

    const actionIcon = document.getElementById('action_icon');
    actionIcon.value = icon;

    const actionName = document.getElementById('action_name');
    actionName.value = name;

    const actionAp = document.getElementById('action_ap');
    actionAp.value = ap;

    const actionTarget = document.getElementById('action_target');
    actionTarget.value = etc;
    const spd = document.getElementById('action_spd');
    spd.value = '通常';
    const will = document.getElementById('action_will');
    will.value = '0';
});

//「決定」時に新規追加
const newAction = document.getElementById('new_action');

newAction.addEventListener('click', () => {
    console.log('アクションを追加');

    //div   tl_frame_small
    const tlFrameSmalls = document.getElementsByClassName('tl_frame_small');
    const tlFrameSmall = tlFrameSmalls[tlFrameSmalls.length - 1];

    //div   action_set
    const actionSet = document.createElement('div');
    actionSet.className = 'action_set';
    //幅を決める
    let actionAp = document.getElementById('action_ap');
    actionAp = parseFloat(actionAp.value);
    let delay = actionAp * 64 + (actionAp - 1) * 8;
    if (actionAp < 1) {
        delay = 64;
    }
    actionSet.style.width = `${delay}px`;
    //SPDを反映する
    const spd = document.getElementById('action_spd');

    let calc1 = 3,
        calc2 = 3;
    if (!isNaN(spd.value)) {
        //SPD反映
        if (spd.value > 0) {
            //1の場合   left－、right＋
            calc1 = -4;
            calc2 = 10;
        } else {
            //-1の場合  left＋、right－
            calc1 = 10;
            calc2 = -4;
        }
    }
    actionSet.style.marginLeft = `${calc1}px`;
    actionSet.style.marginRight = `${calc2}px`;

    //p     action_name
    const actionName = document.createElement('p');
    const actionNameText = document.getElementById('action_name');
    actionName.className = 'action_name';
    actionName.textContent = `${actionNameText.value}`;
    //p     action_ap
    const pAp = document.createElement('p');
    pAp.textContent = `${actionAp}AP`;
    pAp.className = 'action_ap';
    //div   action_icon
    const actionIcon = document.createElement('div');
    const icon = document.getElementById('action_icon');
    actionIcon.className = 'action_icon';
    //アイコン画像を配分
    let iconUrl;
    if (icon.value === '移動') {
        iconUrl = 'move';
    } else if (icon.value === '剣') {
        iconUrl = 'sword';
    } else if (icon.value === 'セリフ') {
        iconUrl = 'nocomment';
    } else if (icon.value === '炎') {
        iconUrl = 'fire';
    } else if (icon.value === '盾') {
        iconUrl = 'shield';
    } else if (icon.value === '手') {
        iconUrl = 'hand';
    } else if (icon.value === 'きらきら') {
        iconUrl = 'spark';
    } else if (icon.value === 'あわ') {
        iconUrl = 'bubble';
    } else if (icon.value === '丸') {
        iconUrl = 'circle';
    } else if (icon.value === 'アイテム') {
        iconUrl = 'bottle';
    } else {
        iconUrl = 'none';
    }
    actionIcon.classList.toggle('icon_' + iconUrl);

    //p     action_target
    const actionTarget = document.createElement('p');
    const actionTargetText = document.getElementById('action_target');
    actionTarget.className = 'action_target';
    actionTarget.textContent = actionTargetText.value;

    tlFrameSmall.appendChild(actionSet);
    actionSet.appendChild(actionName);
    actionSet.appendChild(pAp);
    actionSet.appendChild(actionIcon);
    if (!actionTarget.textContent == '') {
        actionSet.appendChild(actionTarget);
    }
    //div   action_will
    const actionWillFrame = document.createElement('div');
    actionWillFrame.className = 'action_will_frame';
    actionSet.appendChild(actionWillFrame);

    const actionWillNum = document.getElementById('action_will');
    const actionWillColor = document.getElementById('action_will_color');

    for (let i = 0; i < actionWillNum.value; i++) {
        const actionWill = document.createElement('div');
        actionWill.className = 'action_will';
        console.log(actionWillColor.value);
        if (actionWillColor.value === '桃') {
            actionWill.classList.add('will_pink');
        } else if (actionWillColor.value === '赤') {
            actionWill.classList.add('will_red');
        } else if (actionWillColor.value === '緑') {
            actionWill.classList.add('will_green');
        } else if (actionWillColor.value === '青') {
            actionWill.classList.add('will_blue');
        } else {
            actionWill.classList.add('will_white');
        }
        actionWillFrame.appendChild(actionWill);
    }
});

/////////////////////////////////////////////////////////////
//cap_buttonでcaptureを撮影
const capButton = document.getElementById('cap_button');
capButton.addEventListener('click', screenGo);

function screenGo() {
    html2canvas(document.getElementById('capture'), {}).then(function (canvas) {
        //日付でファイル名生成
        const date = new Date();
        let dayPlus = '';
        let monthPlus = '';
        if (date.getMonth() < 10) {
            monthPlus = 0;
        }
        if (date.getDate() < 10) {
            dayPlus = 0;
        }
        const filename = `クエノアクション_${date.getFullYear()}${monthPlus}${
            date.getMonth() + 1
        }${dayPlus}${date.getDate()}${date.getHours()}${date.getMinutes()}${date.getSeconds()}`;

        const imageData = canvas.toDataURL('image/png');

        const element = document.createElement('a');
        element.setAttribute('href', imageData);
        element.setAttribute('download', `${filename}.png`);
        element.click(); //リンクをクリックした状態を起こす
    });
}
