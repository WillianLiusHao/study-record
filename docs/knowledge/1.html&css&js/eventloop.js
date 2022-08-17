const baz = () => console.log("baz");
const foo = () => console.log("foo");
const zoo = () => console.log("zoo");
const zoo2 = () => console.log("zoo2");


// const start = () => {
//   console.log("start");
//   process.nextTick(foo);
//   new Promise((resolve, reject) => {
//     console.log("promise");
//     resolve("bar");
//   }).then((resolve) => {
//     console.log(resolve);
//     process.nextTick(zoo);
//     new Promise((resolve1, rej) => {
//       console.log("promise - promise");
//       resolve1("bar2");
//     }).then((res) => {
//       console.log(res);
//     });
//   });
// };
// start();
setTimeout(() => {
  console.log(1)
}, 0)

setImmediate(() => {
  console.log(2)
  
})
