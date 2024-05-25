// 1-masala. Array ichidagi nested arraylarni parent qavsidan chiqaring.
let ar = [1, [2, [3, [4]]], 5];

console.log(ar[0], ar[1][0], ar[1][1][0], ar[1][1][1][0], ar[2]);

// 2-masala.
// 2000 yildan oldinga mashinalar ro'yhatini chiqaring.
// 2010 yildan keyingi chiqqan mashinalar ro'yhatini chiqaring.
// engine kuchiga qarab ma'lumotlarni sort qiling
// chiqarilgan yiliga qarab ma'lumotlarni sort qiling
// ismlarini Alfabit bo'yicha sort qiling
// 2000 yildan oldin chiqgan mashinalarga status: eski ma'lumot qo'shing
// 2000 ~ 2010 yilda chiqgan mashinalarga status: o'rta ma'lumot qo'shing
// 2010 ~ 2022 yildan oldin chiqgan mashinalarga status: yangi ma'lumot qo'shing

let users = [
  { id: 1, year: 1998, engine: 1, name: "Tico" },
  { id: 2, year: 2005, engine: 1.2, name: "Matiz" },
  { id: 3, year: 2010, engine: 1.6, name: "Gentra" },
  { id: 4, year: 2010, engine: 1.5, name: "Cobalt" },
  { id: 5, year: 2012, engine: 2, name: "Malibu" },
  { id: 6, year: 2000, engine: 1.2, name: "Damas" },
  { id: 7, year: 2018, engine: 2.4, name: "Tracker" },
];

// console.log(users.filter((val) => val.year < 2000));  // [ { id: 1, year: 1998, engine: 1, name: 'Tico' } ]
// console.log(users.filter((val)=> val.year > 2010));
// console.log(users.sort((a, b) => a.engine - b.engine));
// console.log(users.sort((a, b)=> a.year - b.year ));
// console.log(users.sort((a, b) => a.name.localeCompare(b.name)));

for (i of users) {
  let status = "status";
  if(i.year < 2000){
  i[status] = 'eski';
}else if(i.year <= 2010) {
  i[status] = "o'rta"
}
else{
  i[status] = 'yangi'
}};
console.log(users);







