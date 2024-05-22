// diogonal bo'yicha array ichidagi raqamlarni chiqaring
// res = 1, 5, 9

let arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

for (i in arr) {
  console.log(arr[i][i]);
}

// 2-masala array ichidagi 3larni delete qiling va o'rniga 0 raqamini kiriting
// res = [1, 2, 5]

let ar = [1, 3, 2, 3, 4, 3, 5]; // faqat oxirgi son 5 bo'lganda uni o'rniga 0 yozayapti
for (i of ar) {
  ar.splice(ar.indexOf(3), 1, 0);
}
console.log(ar);

// 3-masala. Array ichidagi sonlar yig'indisini toping.

let array = [1, 2, 3, 4, 5];
let sum = 0;
for (i of array) sum += i;
console.log(sum);

// 4-masala. Arrayni bir biriga taqqoslang.
let ar1 = [1, 2, 3, 4, 5];
let ar2 = [1, 2, 3, 4, 5];
console.log(ar1.toString() === ar2.toString());

// 5-masala. ['webbrain', 'academy'] char sanog'ini toping.

const count = (data) => {
  let string = data.toString();
  let char = {};
  for (val of string) {
    let key = val;
    char[key] = (char[key] || 0) + 1;
  }
  console.log(char);
};
count(["webbrain", "academy"]);


// 6-masala. O'zgartirish

const camelize = (css) => {
  for(i of css) {
    
  }
};

camelize('background-color')