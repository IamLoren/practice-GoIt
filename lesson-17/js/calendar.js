import {monthNameEl, dayNameEl, dayNumEl, yearEl, currentDate} from './refs.js'

const month = currentDate.toLocaleDateString('uk-UA', {month: "long"});
const weekDay = currentDate.toLocaleDateString('uk-UA', {weekday: "long"});
const dayNumber = currentDate.toLocaleDateString('uk-UA', {day: "numeric"});
const year = currentDate.toLocaleDateString('uk-UA', {year: "numeric"});

monthNameEl.textContent = month;
dayNameEl.textContent = weekDay;
dayNumEl.textContent = dayNumber;
yearEl.textContent = year;
