Модуль 9. Заняття 18. Promise
Example 1 - Що виведе в console.log()?
1 - promise
console.log('start');

const promise1 = new Promise((resolve, reject) => {
console.log(1);
});

console.log('end');
2 - then
console.log('start');

const promise1 = new Promise((resolve, reject) => {
console.log(1);
resolve(2);
});

promise1.then((res) => {
console.log(res);
});

console.log('end');
3 - resolve
console.log('start');

const promise1 = new Promise((resolve, reject) => {
console.log(1);
resolve(2);
console.log(3);
});

promise1.then((res) => {
console.log(res);
});

console.log('end');
4 - no resolve
console.log('start');

const promise1 = new Promise((resolve, reject) => {
console.log(1);
});

promise1.then((res) => {
console.log(2);
});

console.log('end');
5 - promise and function
console.log('start');

const fn = () =>
new Promise((resolve, reject) => {
console.log(1);
resolve('success');
});

console.log('middle');

fn().then((res) => {
console.log(res);
});

console.log('end');
6 - Fulfilling Promise
console.log('start');

Promise.resolve(1).then((res) => {
console.log(res);
});

Promise.resolve(2).then((res) => {
console.log(res);
});

console.log('end');
7 - catch
const promise = new Promise((resolve, reject) => {
reject(Error('Some Error Occurred'));
})
.catch((error) => console.log(error))
.then((error) => console.log(error));
8 - finally
const promise = new Promise((res) => res(2));

promise
.then((v) => {
console.log(v);
return v _ 2;
})
.then((v) => {
console.log(v);
return v _ 2;
})
.finally((v) => {
console.log(v);
return v \* 2;
})
.then((v) => {
console.log(v);
});
9 - setTimeout vs Promise
console.log('start');

setTimeout(() => {
console.log('setTimeout');
});

Promise.resolve().then(() => {
console.log('resolve');
});

console.log('end');
10 - all
Promise.all([
new Promise((resolve) => setTimeout(() => resolve(1), 3000)), // 1
new Promise((resolve) => setTimeout(() => resolve(2), 2000)), // 2
new Promise((resolve) => setTimeout(() => resolve(3), 1000)), // 3
]).then(alert);
11 - all
Promise.all([
new Promise((resolve, reject) => setTimeout(() => resolve(1), 1000)),
new Promise((resolve, reject) =>
setTimeout(() => reject(new Error('Error!')), 2000)
),
new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000)),
]).catch(alert);
12 - race
Promise.race([
new Promise((resolve, reject) => setTimeout(() => resolve(1), 1000)),
new Promise((resolve, reject) =>
setTimeout(() => reject(new Error('Error!')), 2000)
),
new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000)),
]).then(alert);
