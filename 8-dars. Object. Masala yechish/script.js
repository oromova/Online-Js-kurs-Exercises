// ======== 8-dars Object. Masalalar. =========

// 1. Write a JavaScript program to list the properties of a JavaScript object.
// Sample Output: name,sclass,rollno

// let student = {
//   name : "David Rayy",
//   sclass : "VI",
//   rollno : 12 
// };

// for (key in student) {
//   console.log(key);       // name, sclass, rollno
// }

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