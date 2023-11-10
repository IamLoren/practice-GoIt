# Модуль 8. Заняття 16. Local storage

## 1. Counter

- Використовуй html з файлу [counter.html](./counter.html)
- Отримай всі кнопки з атрибутом data-action
- До відповідної кнопки, з відповідним data-action застосовувуй свій функціонал:
- При кліку на кнопку data-action="save" зберігай значення counter у local storage
- При кліку на кнопку data-action="clear-save" видаляй збережене значення counter з local storage
- При кліку на кнопку data-action="decrease" зменшуй counter на 1
- При кліку на кнопку data-action="increase" збільшуй counter на 1
- При кліку на кнопку data-action="reset" роби counter = 0

## 2. Theme switcher

- Використовуй html з файлу [themeSwitch.html](./themeSwitch.html)
- Використовуй local storage для зберігання вибраної теми (dark / light)

```js
const themeSwitcher = document.getElementById('theme-switch');

// light theme is default, that's why themeSwitcher is unchecked
themeSwitcher.checked = false;

function onCheckBoxChange() {
  // if you change theme to dark, add 'dark' class and remove previus, add this change to local storage
  // if you select light theme do the same work but add 'light' class
}

function setThemeOnLoad() {
  // this helpful function should call every time when you update page, to check what theme was seted to local storage
  // you should get data from LS and set saved theme to body
  // don't forget about themeSwitcher, if current theme is dark, it should be checked
}
```

## 3. TodoList

- Викоритовуй шаблон списку завдань з файлу [todoList.html](./todolist.html) для створення функціоналу для списку завдань.
- Використовуй поширення подій а також local storage, щоб при оновленні твої завдання залишалися на сторінці. Для цього використовуй допоміжну функцію setTasksOnLoad, яка буде отримувати далі з LS і додаватиме їх в html
- При виклику функції addTask зберігай завдання local storage і додавай його у розмітку
- При deleteTask знаходь завдання по тексту, та видаляй його і з local storage і з розмітки.

```js
const formEl = document.querySelector('form');
const ulEl = document.querySelector('.js-todos-list');

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
function onSubmit() {}

// Function to add a task to the list (use createNewTaskElement) and add to LS
function addTask() {}

// Function to delete a task from the list and delete from LS
function deleteTask() {}

// Function to get tasks from LS and set them into ul
function setTasksOnLoad() {}

form.addEventListener('submit', onSubmit);
ul.addEventListener('click', deleteTask);
```

# Модуль 9. Заняття 17. Timers and date. Asynchrony

## 4. Напиши функцію updateTestimonial();, якиа кожних 5 секунд буде оновлювати відгук на сторінці. В тебе є масив відгуків, кожних 5 секунд оновлюй текстовий вміст відгука, який вже є у шаблоні, на дані з масиву. Якщо ти дійшов до останнього відгука, то починай спочатку.

### Викоритовуй шаблон відгука з файлу [testimonialSlider.html](./testimonialSlider.html).

```js
const testimonials = [
  {
    name: 'Cherise G',
    photoUrl:
      'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80',
    text: 'This is simply unbelievable! I would be lost without Apple. The very best. Not able to tell you how happy I am with Apple.',
  },
  {
    name: 'Rosetta Q',
    photoUrl:
      'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80',
    text: 'I would also like to say thank you to all your staff. Wow what great service, I love it! Apple impressed me on multiple levels.',
  },
  {
    name: 'Constantine V',
    photoUrl:
      'https://images.unsplash.com/photo-1628157588553-5eeea00af15c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80',
    text: 'Thank you for making it painless, pleasant and most of all hassle free! I wish I would have thought of it first. The very best.',
  },
];

const imgEl = document.querySelector('img');
const textEl = document.querySelector('.text');
const usernameEl = document.querySelector('.username');

updateTestimonial();
```

## 5. Функція startTimer повинна логувати кожен елемент масиву один раз на секунду. Коли черга дійде до останнього елемента масиву, продовжити логувати у зворотному порядку поки не дійде до першого елемента, потім зупинити процес.

```js
function startTimer(array) {}

// Приклад виклику функції startTimer з масивом ['a', "b", 'c', "d", 'f']
startTimer(['a', 'b', 'c', 'd', 'f']);
```
