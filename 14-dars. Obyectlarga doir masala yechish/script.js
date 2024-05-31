// 1. Object ichidagi age lar yig'indisini toping.

let obj = {
  title: "webbrain",
  age: 2,
  child: {
    age: 4,
    name: "webbrain",
    child: {
      age: 3,
    },
  },
};

let sum = 0;
const getCalc = (obj) => {
  sum += obj.age;
  for (val in obj) {
    if (typeof obj[val] === "object") {
      getCalc(obj[val]);
    }
  }
  console.log(sum);
};

getCalc(obj);

// 2. Object valuelarining boolean tipidagi ma'lumotlarini keylari bilan qaytaring .

let object = {
  id: 1,
  name: "Webbrain",
  offline: true,
  online: true,
  individual: false,
};

const isBoolean = (obj) => {
  newObj = {};
  for (i in obj) {
    if (typeof obj[i] === "boolean") {
      newObj[i] = obj[i];
    }
  }
  console.log(newObj);
};

isBoolean(object); // { offline: true, online: true, individual: false }




