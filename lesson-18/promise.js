//TODO:====================01==========================
/**
 * Перероби функцію на проміс таким чином, щоб проміс повертав значення
 * через 2 секунди після виклику функції
 */

// function greet() {
//   return 'hello world';
// }

//TODO:====================02==========================
/**
 * Перероби код так, щоб усі дані збиралися
 * одноразово і приходили у вигляді масиву
 */

// const getData = () =>
//   new Promise((res) => {
//     setTimeout(() => {
//       const data = 1;
//       console.log(data);
//       res(data);
//     }, 1000);
//   });

// const getNewData = () =>
//   new Promise((res) => {
//     setTimeout(() => {
//       const data = 2;
//       console.log(data);
//       res(data);
//     }, 1000);
//   });

// const getAnotherData = () =>
//   new Promise((res) => {
//     setTimeout(() => {
//       const data = 3;
//       console.log(data);
//       res(data);
//     }, 1000);
//   });

// const getLastData = () =>
//   new Promise((res) => {
//     setTimeout(() => {
//       const data = 4;
//       console.log(data);
//       res(data);
//     }, 1000);
//   });

//TODO:====================03==========================
/**
 * Функція countWithDelay приймає приймає 3 аргументи:
 * 1) кількість секунд перед тим як спрацює ф-ція logCount
 * 2) скільки разів має відпрацювати logCount
 * 3) затримка між викликами ф-ції
 *
 * logCount повинна логувати кількість викликів
 */

// countWithDelay(3000, 5, 1000);

//TODO:====================04==========================
/**
 * - Використовуй prompt і повертай значення звідти.
 * - Створи функцію, всередині якої буде проміс.
 * Якщо значення не є числом, відхиляй проміс і логіруй "error".
 * Якщо значення парне, вирішуй проміс і повертай "even" через 1 секунду.
 * Якщо значення не парне, вирішуй проміс і повертай "odd" через 2 секунди.
 */

// const value = prompt('Paste value');
// checkValue(value).then(console.log).catch(console.log);
