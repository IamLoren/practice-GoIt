//TODO:====================01==========================
/**
 * Перероби функцію на проміс таким чином, щоб проміс повертав значення
 * через 2 секунди після виклику функції
 */

// function greet() {
//   return 'hello world';
// }

// function greet2() {
//     new Promise((res) => {
//         setTimeout(() => res('Hello World'),2000);
//     }).then(res => console.log(res))
// }

// greet2();
//TODO:====================02==========================
/**
 * Перероби код так, щоб усі дані збиралися
 * одноразово і приходили у вигляді масиву
 */

const getData = () =>
  new Promise((res) => {
    setTimeout(() => {
      const data = 1;
      console.log(data);
      res(data);
    }, 4000);
  });

const getNewData = () =>
  new Promise((res) => {
    setTimeout(() => {
      const data = 2;
      console.log(data);
      res(data);
    }, 3000);
  });

const getAnotherData = () =>
  new Promise((res) => {
    setTimeout(() => {
      const data = 3;
      console.log(data);
      res(data);
    }, 2000);
  });

const getLastData = () =>
  new Promise((res) => {
    setTimeout(() => {
      const data = 4;
      console.log(data);
      res(data);
    }, 1000);
  });

// vers1;
// const array = [];
// getData()
//     .then(res => {
//         array.push(res);
//         return getNewData()
//     })
//     .then(res => {
//         array.push(res);
//         return getAnotherData()
//     })
//     .then(res => {
//         array.push(res);
//         return getLastData()
//     })
//     .then(res => {
//         array.push(res);
//         console.log(array)
//     })
// .catch(err => {
//     console.log(err);
// });
// vers2
// Promise.all([getData(), getNewData(), getAnotherData(), getLastData()]).then(res => {
//     console.log(res);
// }).catch(console.log)

// vers2.2
// Promise.all([getData(), getNewData(), getAnotherData(), getLastData()]).then(console.log).catch(console.log)

//TODO:====================03==========================
/**
 * Функція countWithDelay приймає приймає 3 аргументи:
 * 1) кількість секунд перед тим як спрацює ф-ція logCount
 * 2) скільки разів має відпрацювати logCount
 * 3) затримка між викликами ф-ції
 *
 * logCount повинна логувати кількість викликів
 */
// const createPromise = (daley, callback) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       return resolve();
//     }, daley);
//   }).then(() => {
//     callback();
//   });
// };
// const countWithDelay = (daley, times, interval) => {
//   let count = 0;
//   const logCount = () => {
//     count += 1;
//     if (count > times) {
//       return;
//     }
//     setTimeout(logCount, interval);
//     console.log("count: ", count);
//   };
//   createPromise(daley, logCount);
// };

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
