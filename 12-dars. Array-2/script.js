// 1-masala. Array ichidagi nested arraylarni parent qavsidan chiqaring.
let ar = [1, [2, [3, [4]]], 5];

function flat(arr) {
  for (i of arr) {
    if (Array.isArray(i)) {
      flat(i);
    } else {
      console.log(i);
    }
  }
}

flat((ar = [1, [2, [3, [4]]], 5])); // 1 2 3 4 5

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

const eski = () => {
  let res = users.map((val) =>
    val.year < 2000 ? { ...val, status: "eski" } : val
  );
  users = res;
  console.log(res);
};

const orta = () => {
  let res = users.map((val) =>
    val.year > 2000 && val.year < 2010 ? { ...val, status: "o'rta" } : val
  );
  users = res;
  console.log(res);
};

const yangi = () => {
  let res = users.map((val) =>
    val.year > 2010 && val.year < 2022 ? { ...val, status: "yangi" } : val
  );
  users = res;
  console.log(res);
};

eski();
orta();
yangi();
