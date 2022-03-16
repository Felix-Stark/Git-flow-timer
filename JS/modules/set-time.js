const mainElem = document.querySelector('main')

let setTime = 10;

showSetTime();

export function showSetTime() {
    mainElem.innerHTML = `
        <section class="set__time" id="set-time">
            <span class="less-time material-icons material-icons-outlined" id="less-time">
                arrow_back_ios
            </span>
            <section class="choose-time">
                <p class="interval-time" id="time">${setTime}</p>
                <p class="minutes">minutes</p>
            </section>
            <span class="more-time material-icons material-icons-outlined" id="more-time">
                arrow_forward_ios
            </span>
        </section>
        <section class="set-interval">
            <div>
                <input type="checkbox" name="intervals" id="intervals">
                <label for="intervals">intervals</label>
            </div>
            <div>
                <input type="checkbox" name="break/interval" id="break">
                <label for="break">5 min break / interval</label>
            </div>
        </section>
        <button class="start-timer" id="start-btn">START TIMER</button> `;
        let lessTime = document.querySelector('#less-time');
        let moreTime = document.querySelector('#more-time');
        changeTimer(lessTime, moreTime);
};

function changeTimer (lessTime, moreTime) {
     lessTime = document.querySelector('#less-time')
     moreTime = document.querySelector('#more-time')
    lessTime.addEventListener('click', () => {
        setTime = setTime - 1;
        showSetTime();
    });
    moreTime.addEventListener('click', () => {
        setTime = setTime + 1;
        showSetTime();
    });
}

