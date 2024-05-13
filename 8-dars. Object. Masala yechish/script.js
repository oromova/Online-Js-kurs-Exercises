// ======== 8-dars Object. Masalalar. =========

// Katta harflarni chiqarsin! res = 'WBA'

let academy = {
  name: 'WebBrain',
  surname: 'acAdemy',
  age: 123,
  status: false
}

let upperCaseLetters = '';
for ( let key in academy){
  const value = academy[key];
  if (typeof value === 'string'){
    for (let i = 0; i < value.length; i++) {
      // if(value[i] === value[i].toUpperCase()) {
      //   upperCaseLetters += value[i];
        // ASCII code bo'yicha solishtirish mumkin.
        if (value[i].charCodeAt() < 97) {
          upperCaseLetters += value[i];
        }
      };
    }
  }
//}
console.log(upperCaseLetters);  // WBA

// Zuhriddinni yechganlari
// const obj = {
//   name: 'John',
//   age: 30,
//   city: 'New York',
//   address: '123 Main Street'
// };

// let uppercaseLetters = '';
// for (let key in obj) {
//   if (typeof obj[key] === 'string') {
//     for (let i = 0; i < obj[key].length; i++) {
//       if (obj[key][i] === obj[key][i].toUpperCase()) {
//         uppercaseLetters += obj[key][i];
//       }
//     }
//   }
// }

// console.log(uppercaseLetters);


// {string: 3, number: 1, boolean: 1}
let obj = {
  name: 'webbrain',
  surname: 'academy',
  age: 123,
  status: false,
  title: 'it'
}

let res = {};
// console.log(res.name || 0);

function count () {
  for (k in obj){
    const value = obj[k];
    const key = typeof value;
    res[key] = (res[key] || 0) + 1; 
}
  console.log(res);
}
count()



//Homework kanalidan 8-savol
let user = {
  name: 'webbrain',
  surname: "academy",
  getName() {
    console.log(user.name, user.surname);
  },
};

user.getName()

// 14 - savol. User objectini barcha(nested ham) keylarini destructure qiling. Destructure qilish vaqtida key nomiga yangi nom berishingiz mumkin. 

// let user = {
//   name: 'Webbrain',
//   surname: 'Academy',
//   info: {
//     name: 'IT Center',
//   },
// }; 

// const {name, surname, info:{name:infoName}} = user

// console.log(infoName);

// 3-savol. Quyidagi consoleda qanday javob chiqadi?

let title = 'name';
let object = {
  name: 'webbrain',
  title: "IT Center",
  [title]: "Webbrain Academy", // name: 'webbrain Academy
  title,   // title: name 
}

console.log(object[title]);  // Webbrain Academy
console.log(object.title);   // name
console.log(object.name);    // webbrain academy


// W3RECOURSE.COM

// 1. Write a JavaScript program to list the properties of a JavaScript object.
// Sample Output: name,sclass,rollno

let student = {
  name : "David Rayy",
  sclass : "VI",
  rollno : 12 
};

// for (key in student) {
//   console.log(key);       // name, sclass, rollno
// }
// case 2
// console.log(Object.keys(student))

// 2. Write a JavaScript program to delete the rollno property from the following object. Also print the object before or after deleting the property.

// let student = {
//     name : "David Rayy",
//     sclass : "VI",
//     rollno : 12 
// };

// delete student.rollno
// console.log(student);

// 3. Write a JavaScript program to get the length of a JavaScript object.

// let student = {
//   name : "David Rayy",
//   sclass : "VI",
//   rollno : 12 
// };

// console.log(Object.values(student).length)    // 3

// 5. Write a JavaScript program to get the volume of a cylindrical with four decimal places using object classes.
// Volume of a cylinder : V = πr2h
// where r is the radius and h is the height of the cylinder.
// Formula: V = Sdoira * h = (п * r * r) * h 

// function Silindr(height, radius) {
//   return height * Math.PI * radius * radius
// }

// console.log(Silindr( 8, 4))

