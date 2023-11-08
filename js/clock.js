import {dayNumEl} from './refs.js'

document.addEventListener('DOMContentLoaded', renderPage)

function renderPage() {
    createMarkup(dayNumEl)
}

function createMarkup(rootSelector) {
    const markup =
        `<div class="clock__container">
            <div class="clock__items js-clock-items">
              <div class="clock__item js-clock__hours">00</div>
              <div class="clock__item js-clock__minutes">00</div>
              <div class="clock__item js-clock__seconds">00</div>
            </div>
          </div>`
    rootSelector.insertAdjacentHTML("afterend", markup)
    const clockEl = document.querySelector('.js-clock-items')
    startClock(clockEl)
}

function startClock(rootSelector) {
    const hoursEl = rootSelector.querySelector('.js-clock__hours')
    const minutesEl = rootSelector.querySelector('.js-clock__minutes')
    const secondsEl = rootSelector.querySelector('.js-clock__seconds')
    setInterval(() => {
        const currentTime = Date.now()
        let { hours, minutes, seconds } = convertMs(currentTime)
        /*rootSelector.querySelector('.js-clock__hours').textContent = hours
        rootSelector.querySelector('.js-clock__minutes').textContent = minutes
        rootSelector.querySelector('.js-clock__seconds').textContent = seconds*/
        hoursEl.textContent = hours
        minutesEl.textContent = minutes
        secondsEl.textContent = seconds
    }, 1000)
}

function convertMs(ms) {
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const days = Math.floor(ms / day);
    const hours = Math.floor((ms % day) / hour);
    const minutes = Math.floor(((ms % day) % hour) / minute);
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);

    return { days, hours, minutes, seconds };
}