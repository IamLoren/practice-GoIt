const monthNameEl = document.querySelector('.js-month');
const dayNameEl = document.querySelector('.js-day');
const dayNumEl = document.querySelector('.js-day-number');
const yearEl = document.querySelector('.js-year');

const currentDate = new Date();

const month = currentDate.toLocaleDateString('uk-UA', {month: "long"});
const weekDay = currentDate.toLocaleDateString('uk-UA', {weekday: "long"});
const dayNumber = currentDate.toLocaleDateString('uk-UA', {day: "numeric"});
const year = currentDate.toLocaleDateString('uk-UA', {year: "numeric"});

monthNameEl.textContent = month;
dayNameEl.textContent = weekDay;
dayNumEl.textContent = dayNumber;
yearEl.textContent = year;