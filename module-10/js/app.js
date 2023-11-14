import { getStudents, addStudent, deleteStudent } from "./students-api.js";
import { renderMarkup, createStudentCard } from "./markup.js";

import { listEl, openModalBtnEl, paragrahEl, loaderEl } from "./refs.js";
import { modal } from "./modal.js";

export let items = [];
const defaultAvatar =
  "https://mir-s3-cdn-cf.behance.net/project_modules/1400/10f13510774061.560eadfde5b61.png";

openModalBtnEl.addEventListener("click", onOpenModalBtnClick);
document.addEventListener("DOMContentLoaded", onRenderPage);
listEl.addEventListener("click", onDeleteStudent);

function onOpenModalBtnClick() {
  modal.show();

  document.querySelector("form").addEventListener("submit", onSubmit);
}

function onSubmit(event) {
  event.preventDefault();
  paragrahEl.classList.add("is-hidden");
  loaderEl.classList.remove("is-hidden");

  const { avatar, firstName, lastName, age, country, city } =
    event.currentTarget.elements;

  const student = {
    firstName: firstName.value,
    lastName: lastName.value,
    age: age.value,
    country: country.value,
    city: city.value,
    avatar: avatar.value || defaultAvatar,
  };

  addStudent(student)
    .then((res) => {
      items.push(res);

      return createStudentCard(res);
    })
    .then((res) => {
      listEl.insertAdjacentHTML("beforeend", res);
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      loaderEl.classList.add("is-hidden");
    });

  event.currentTarget.reset();
  modal.close();
}

function onRenderPage() {
  loaderEl.classList.remove("is-hidden");
  getStudents()
    .then((res) => {
      items = [...res];
      console.log(items);
      renderMarkup(items);
    })
    .catch(console.log)
    .finally(() => {
      loaderEl.classList.add("is-hidden");
    });
}

function onDeleteStudent(event) {
  if (event.target.nodeName !== "BUTTON") {
    return;
  }

  loaderEl.classList.remove("is-hidden");

  const index = event.target.dataset.id;

  items = items.filter(({ id }) => id !== index);

  deleteStudent(index)
    .then((res) => {
      console.log(res);
      renderMarkup(items);
    })
    .catch(console.log)
    .finally(() => {
      loaderEl.classList.add("is-hidden");
    });
}
