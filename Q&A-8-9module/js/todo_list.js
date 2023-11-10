// - Викоритовуй шаблон списку завдань з файлу[todoList.html](./todolist.html) для створення функціоналу для списку завдань.
//     - Використовуй поширення подій а також local storage, щоб при оновленні твої завдання залишалися на сторінці.Для цього використовуй допоміжну функцію setTasksOnLoad, яка буде отримувати далі з LS і додаватиме їх в html
// - При виклику функції addTask зберігай завдання local storage і додавай його у розмітку
// - При deleteTask знаходь завдання по тексту, та видаляй його і з local storage і з розмітки.

import { formEl, ulEl } from "./refs.js";
import localStorageApi from "./storage.js";

let items = [];
const TASK_KEY = "ToDos";

// Function to create new task element, return LI element
const createTodos = ({ id, text }) => {
  const markup = `
        <li>
          <input disabled value="${text}"/>
          <div>
            <button data-id="${id}">Delete</button>
          </div>
        </li>
        `;

  return markup;
};

// Function to handle submit action, call addTask inside
function onSubmit(event) {
  event.preventDefault();

  const taskQuery = event.currentTarget.elements.todos.value.trim();

  if (!taskQuery) {
    return alert("Task is empty!");
  }
  if (taskQuery !== "") {
    const existItem = items.find(({ text }) => text === taskQuery);
    if (existItem) {
      return alert("Todos is exist!");
    }
  }

  const toDoTask = {
    id: Date.now(),
    text: taskQuery,
  };

  addTask(toDoTask);

  event.target.reset();
}

// Function to add a task to the list (use createNewTaskElement) and add to LS
function addTask(value) {
  const markUp = createTodos(value);
  items.push(value);
  ulEl.insertAdjacentHTML("afterbegin", markUp);
  localStorageApi.save(TASK_KEY, items);
}

// Function to delete a task from the list and delete from LS
function deleteTask(e) {
  if (e.target.nodeName !== "BUTTON") {
    return;
  }

  const toDoId = +e.target.dataset.id;

  items = items.filter(({ id }) => id !== toDoId);

  localStorageApi.save(TASK_KEY, items);
  ulEl.innerHTML = "";
  setTasksOnLoad();
}

// Function to get tasks from LS and set them into ul
function setTasksOnLoad() {
  const lsToDos = localStorageApi.load(TASK_KEY);
  if (lsToDos) {
    items = [...lsToDos];
    const template = items
      .map((el) => createTodos(el))
      .reverse()
      .join("");
    ulEl.innerHTML = template;
  }
}

formEl.addEventListener("submit", onSubmit);
ulEl.addEventListener("click", deleteTask);
document.addEventListener("DOMContentLoaded", setTasksOnLoad);
