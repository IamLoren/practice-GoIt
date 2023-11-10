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

/*const getData = () =>
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
  });*/

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

/*
const value = prompt('Paste value');

function checkValue (value) {
  return new Promise((res, rej) => {
    if(!value || isNaN(value)) {
      rej('error');
    } 
    

    if(value % 2 === 0) setTimeout(() => res('even'), 1000);
    
    setTimeout(() => res('odd'), 2000);
  })
}
checkValue(value).then(console.log).catch(console.log);
*/

//ВПРАВИ
// 1 - promise
/*
console.log('start')

const promise1 = new Promise((resolve, reject) => {
    console.log(1)
});

console.log('end')
*/


// 2 - then
/*console.log('start');

const promise1 = new Promise((resolve, reject) => {
    console.log(1);
    resolve(2);
});

promise1.then((res) => {
    console.log(res);
});

console.log('end');*/

// 3 - resolve
/*console.log('start');

const promise1 = new Promise((resolve, reject) => {
    console.log(1);
    resolve(2);
    console.log(3);
});

promise1.then((resolve) => {
    console.log(resolve);
});

console.log('end');*/

// 4 - no resolve
/*console.log('start');

const promise1 = new Promise((resolve, reject) => {
    console.log(1);
});

promise1.then((res) => {
    console.log(2);
});

console.log('end');*/

// 5 - promise and function
/*console.log('start');

const fn = () =>
    new Promise((resolve, reject) => {
        console.log(1);
        resolve('success');
    });

console.log('middle');

fn().then((res) => {
    console.log(res);
});

console.log('end');*/

// 6 - Fulfilling Promise
/*console.log('start');

Promise.resolve(1).then((res) => {
    console.log(res);
});

Promise.resolve(2).then((res) => {
    console.log(res);
});

console.log('end');*/

// 7 - catch
/*const promise = new Promise((resolve, reject) => {
    reject(Error('Some Error Occurred'))
})
    .catch((error) => console.log(error))
    .then((error) => console.log(error))*/
// 8 - finally
/*
const promise = new Promise((res) => res(2));

promise
    .then((v) => {
        console.log(v);
        return v * 2;
    })
    .then((v) => {
        console.log(v);
        return v * 2;
    })
    .finally((v) => {
        console.log(v);
        return v * 2;
    })
    .then((v) => {
        console.log(v);
    });*/
