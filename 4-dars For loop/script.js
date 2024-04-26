// ======= for loop ========
// 2 - 15gacha sonlar oralig'ida bo'lgan tub sonlarni toping
// tub son deb - faqat o'ziga va 1ga bo'linadigan sonlarga aytiladi.
// 2, 3, 5, 7, 11 ....


// let count = 0;
// let num = 2;

// for (let i = 1; i <= num; i++){
//   console.log(num, '/', i, '=', num % i);
//   if(num % i === 0) count++;  
// }
// if(count === 2) console.log(num, 'tub son');
// else console.log(num, 'tub son emas');

// // console.log('count = ', count);

// kodni qisqartiramiz!!!

let count = 0;
let num = 2;

for (let i = 1; i <= num; i++){
  // console.log(num, '/', i, '=', num % i);
  if(num % i === 0) count++;  
}
if(count === 2) console.log(num, 'tub son');
else console.log(num, 'tub son emas');
