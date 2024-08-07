// Moment.js
const moment = () => {
  return new Date();
};

let L = moment().getHours();
let T =
  moment().getMinutes() < 10
    ? "0" + moment().getMinutes()
    : moment().getMinutes();
// let S =
//   moment().getSeconds() < 10
//     ? "0" + moment().getSeconds()
//     : moment().getSeconds();
// let D = moment().getDate() < 10 ? "0" + moment().getDate() : moment().getDate();
// let M =
//   moment().getMonth() < 10 ? +"0" + moment().getMonth() : moment().getMonth(); // 0 qo'shilmayapti, +1 qo'sholmadim
// let Y = moment().getFullYear();
// let d = moment().getDate();
// let l = moment().getMonth();
// let w = moment().getDay()



// const date = (L, T) => {
//   return `${L}` < 12 ? `${L}:${T} AM ` : `${L}:${T} PM`;
// };
// console.log(date(L, T));         // 1:40 AM

// const format = (L, T, S) => {
//   return `${L}` < 12 ? `${L}:${T}:${S} AM ` : `${L}:${T}:${S} PM`;
// };
// console.log(format(L, T, S));     // 1:41:26 AM

// const format = (symb) => {
//   return `${M}${symb}${D}${symb}${Y}`;
// };
// console.log(format("/"));

// const format = (symb) => {
//   return `${l}${symb}${d}${symb}${Y}`;
// };
// console.log(format("/")); // 6/3/2024

const month = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];


// const format = (l, d, Y) => {
//   return `${month[l]} ${d}, ${Y}`
// }
// console.log(format(l, d, Y))     // June 3, 2024


// const format = (l, d, Y) => {
//   return `${month[l].slice(0,3)} ${d}, ${Y}`
// }
// console.log(format(l, d, Y))       // Jun 3, 2024


// const format = (l, d, Y, date) => {
//   return `${month[l]} ${d}, ${Y} ${date}`
// }
// console.log(format(l, d, Y, date(L, T)))        // June 3, 2024 13:09 PM


// const format = (l, d, Y, date) => {
//   return `${month[l].slice(0,3)} ${d}, ${Y} ${date}`
// }
// console.log(format(l, d, Y, date(L, T)))           // Jun 3, 2024 13:15 PM


const days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday'
]

// const format = (w, l, d, Y, date) => {
//    return `${days[w]}, ${month[l]} ${d}, ${Y} ${date}`
//  }
// console.log(format(w, l, d, Y, date(L, T)))        // Monday, June 3, 2024 13:21 PM


const format = (w, l, d, Y, date) => {
  return `${days[w].slice(0,3)}, ${month[l].slice(0,3)} ${d}, ${Y} ${date}`
}
console.log(format(w, l, d, Y, date(L, T))) 
