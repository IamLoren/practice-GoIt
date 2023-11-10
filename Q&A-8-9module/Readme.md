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

## 3. Favorite food.

Напиши функціонал, який дозволить додавати улюблені страви у local storage і стилізувати кнопку задопомгою класу checked для того щоб при оновленні сторінки користувач кожного разу бачив, які страви були його улюбленими.
В будь який момент страву можна видалити з улюблених, просто натиснувши на сердечко, ця дія має видалити клас checked з блоку сердечка та видалити страву з local storage
Функція setFavoritesOnLoad має запускатися при вході на сторінку та додавати клас checked всім тим сердечкам, чиї id були у local storage в улюблених

```js
const products = [
  {
    id: 1,
    title: 'Salad',
    description: 'Fresh & sweet',
    url: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  },
  {
    id: 2,
    title: 'Dessert',
    description: 'Fresh & sweet',
    url: 'https://images.pexels.com/photos/907142/pexels-photo-907142.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  },
  {
    id: 3,
    title: 'Sushi',
    description: 'Fresh & sweet',
    url: 'https://images.pexels.com/photos/792028/pexels-photo-792028.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  },
  {
    id: 4,
    title: 'Pizza',
    description: 'Fresh & sweet',
    url: 'https://images.pexels.com/photos/4001871/pexels-photo-4001871.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  },
  {
    id: 5,
    title: 'Fish',
    description: 'Fresh & sweet',
    url: 'https://images.pexels.com/photos/840216/pexels-photo-840216.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  },
];

function createMarkup(products) {
  const markup = products
    .map(({ id, title, description, url }) => {
      return `
          <li class="card" id="${id}">
             <div class="card__image">
                <img src="${url}" alt="${title}" />
             </div>
             <div class="card__info">
                <div class="car__info--title">
                   <h3>${title}</h3>
                   <p>${description}</p>
                </div>
                <div class="card__info--button">
                  <div data-heart>&#x2764;</div>
                </div>
             </div>
          </li>
    `;
    })
    .join('');

  return markup;
}

function setFavoritesOnLoad() {}
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
