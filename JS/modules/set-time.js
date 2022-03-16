const mainElem = document.querySelector('main')

const lessTime = document.querySelector('#less-time')
const moreTime = document.querySelector('#more-time')

export function showSetTime() {
    mainElem.innerHTML = `
        <section class="set__time" id="set-time">
            <span class="less-time material-icons material-icons-outlined" id="less-time">
                arrow_back_ios
            </span>
            <section class="choose-time">
                <p class="interval-time" id="time">10</p>
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
};

