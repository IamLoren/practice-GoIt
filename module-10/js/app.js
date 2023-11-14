import {
  getStudents,
  addStudent,
  deleteStudent,
} from "./students-api.js";

import { listEl, openModalBtnEl } from "./refs.js";
import { modal } from "./modal.js";

let items = [];
const defaultAvatar='https://mir-s3-cdn-cf.behance.net/project_modules/1400/10f13510774061.560eadfde5b61.png';

openModalBtnEl.addEventListener('click', onOpenModalBtnClick);
document.addEventListener('DOMContentLoaded', onRenderPage);

function onOpenModalBtnClick() {
  modal.show();

  document.querySelector('form').addEventListener('submit', onSubmit)

}

function onSubmit(event) {
  event.preventDefault()

  const { avatar, firstName, lastName, age, country, city } = event.currentTarget.elements;

  const student = {
    firstName: firstName.value,
    lastName: lastName.value,
    age: age.value,
    country: country.value,
    city: city.value,
    avatar: avatar.value || defaultAvatar,
  }

  addStudent(student)
    .then(res => {
      items.push(res)

      return createStudentCard(student)

    })
    .then(res => {
      listEl.insertAdjacentHTML('beforeend', res)
    })
    .catch(err => {
      console.log(err);
    })

  event.currentTarget.reset();
  modal.close();
}

function createStudentCard(student) {
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
};

function renderMarkup(data) {
  const markup = data.map(student => createStudentCard(student)).join('')

  listEl.innerHTML = markup;
}

function onRenderPage() {
  getStudents()
    .then(res => {
      items = [...res];
      console.log(items);
      renderMarkup(items)
    })
    .catch(console.log)
}