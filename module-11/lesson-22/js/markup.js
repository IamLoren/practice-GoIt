import { listEl, paragrahEl } from "./refs.js";

import { items } from "./app.js";

export function createStudentCard(student) {
  const { avatar, firstName, lastName, age, country, city, id } = student;

  return `
    <li class="photo-card">
          <img
            src="${avatar}"
            alt="${firstName}"
          />
          <button data-id=${id} type="button" class="delete-btn js-delete-btn">&#9988;</button>
  
          <div class="wrapper">
            <div class="info" >
            <b class="student-info">${firstName}</b>
            <b class="student-info">${lastName}</b>
            <b class="student-info">${age}</b>
            </div>
  
            <div class="info">
            <b class="student-info">${country}</b>
            <b class="student-info">${city}</b>
            </div>
          </div>
        </li>
    `;
}

export function renderMarkup(data) {
  const markup = data.map((student) => createStudentCard(student)).join("");

  listEl.innerHTML = markup;
  items.length === 0
    ? paragrahEl.classList.remove("is-hidden")
    : paragrahEl.classList.add("is-hidden");
}
