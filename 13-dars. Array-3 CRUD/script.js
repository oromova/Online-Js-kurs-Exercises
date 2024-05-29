// 1. Berilgan stringdagi @ ni a harfiga o'zgartiring
// replaceAll va /g dan foydalanilmasin

let str = "Webbr@in Ac@demy";

const a = (str) => {
  res = "";
  for (i in str) {
    if (str[i] === "@") res += "a";
    else res += str[i];
  }
  console.log(res);
};

a("Webbr@in Ac@demy"); // Webbrain Academy

// 2-yo'l.
str = str.split("");
str = str.map((val) => (val === "@" ? "a" : val));
str = str.join("");
console.log(str); // Webbrain Academy

// 2. Duplicate bo'lgan harflarni o'chiring

let st = "webbbraiiiin accaddemmy";

const duplicate = (str) => {
  let res = "";
  for (i in str) {
    if (str[i] === str[i - 1]) continue;
    else res += str[i];
  }
  console.log(res);
};

//duplicate(st); // webrain academy

// Hamma duplicatlarni o'chiring hamma arfdan 1tadan bo'lsin.

let res = "";
for (let i of st) {
  if (!res.includes(i)) res += i;
}
console.log(res); // webrain cdmy

// 3. String ichidagi raqamlarni toping.

let string = "We66rain Acad4my";

const checkNum = (str) => {
  let res = "";
  for (i of str) {
    if (!isNaN(i)) res += i;
  }
  console.log(res);
};
checkNum(string); // 66 4

// 4. Berilgan stringning har bir belgisini 2 marta takrorlab qaytaring
// res: 'WWeebbbbrraaiinn'

const dubleLetter = (str) => {
  let dublestr = "";
  for (i of str) {
    if (i === i.toUpperCase()) {
      dublestr += i.repeat(2).toUpperCase();
    } else {
      dublestr += i.repeat(2);
    }
  }
  console.log(dublestr);
};

dubleLetter("Webbrain"); // WWeebbbbrraaiinn

// 5. Berilgan so'z palindrom yoki palindrom emasligini tekshiring
// non, kichik, kiyik, kuchuk

// const checkPalindrom = (str) => {
//   let strRev = "";
//   if (str.includes("sh") && str.includes("ch") && str.includes("ng")) {
//     strRev += strRev = str.split("").join("");
//     console.log("Bu soz palindrom");
//   } else if (str == strRev) {
//     strRev += str.split("").reverse().join("");
//     console.log("Bu soz palindrom");
//   } else console.log("Bu so'z palindrom emas");
//   console.log(strRev);
// };

// checkPalindrom("kichik");

// BU MASALANING OPTIMAL TEZ ISHLAYDIGAN YO'LI

let s = "kiyik";
let ress = "so'z palindrom";
for (let i = 0; i < str.length / 2; i++) {
  if (str[i] !== str.at(-i - 1)) res = "soz palindrom emas";
  break;
}
console.log(res);

// 6. Berilgan stringlardagi harflar soni bir-biriga teng
// yoki teng emasligini aniqlang. tartibi muhim emas

// 1-yo'l
let a1 = "web";
let b1 = "ewb";

console.log(a1.split("").sort().join(""));
console.log(b1.split("").sort().join(""));
// taqqoslasa teng chiqadi

// 2-yo'l
function check(a, b) {
  if (a1.length === b1.length) {
    for (let str of a1) {
      let reg = new RegExp(str, "g");

      if (a1.match(reg).length === b1.match(reg).length) {
        continue;
      } else return false;
    }
  } else return false;
  return true;
}

//console.log(check(a1, b1));

// 3-yo'l
let a2 = {};
let b2 = {};

function check(a, b) {
  if (a1.length === b1.length) {
    for (let i in a1) {
      a2[a1[i]] = (a2[a1[i]] || 0) + 1;
      b2[b1[i]] = (b2[b1[i]] || 0) + 1;
    }
    for (let i of a1) {
      if (a2[i] !== b2[i]) return false;
    }
  } else return false;
  console.log(a2);
  console.log(b2);
  return true;
}
console.log(check(a1, b1));

// 7. Stringni ziplash

let zip = "webbraaiiin";
let result = "";

const letZip = (zip) => {
  let count = 1;
  for (let i in zip) {
    if (zip[+i + 1] === zip[i]) {
      count++;
    } else {
      result += `${zip[i]}${count > 1 ? count : ""}`;
      count = 1
    }
  }console.log(result)
};

letZip(zip);     // web2ra2i3n

// array
// 2. arraylarni bir biriga taqqoslang

const compareArr = (ar, ar2) => {
  if (ar.toString() === ar2.toString()) {
    console.log("Arraylar bir biriga teng");
  } else {
    console.log("Arraylar bir biriga teng emas");
  }
};
compareArr([1, 2, 3], [1, 2, 3]);

// 3 Arraydagi ikki xonali sonlarni chiqaring
let arr = [1, 64, 8, 27, 64, 125];

const checkDigitsNum = (ar) => {
  for (i of ar) {
    if (i > 9 && i < 99) {
      console.log(`${i} ikki xonali son`);
    } else console.log(`${i} ikki xonali son emas`);
  }
};
checkDigitsNum(arr);
