import {btnEl, inputEl, resultEl, currentDate} from './refs.js'

function calculateAge() {
    const date = new Date(inputEl.value);
    const diff = currentDate - date;
    const result = getAge(diff);
    resultEl.textContent = `Your age is ${result} years old`;
}

function getAge(birthdayValue) {
    return Math.floor(birthdayValue / (1000 * 60 * 60 * 24 * 365.25));
}

btnEl.addEventListener('click', calculateAge);
