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

duplicate(st); // webrain academy

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

const checkPalindrom = (str) => {
  let strRev = '' 
  if (str.includes("sh") && str.includes("ch") && str.includes("ng")) {
   strRev += strRev = str.split('').join('')
   console.log('Bu soz palindrom');
  } else if (str == strRev) {
   strRev += str.split("").reverse().join("");
    console.log('Bu soz palindrom');
  }
  else console.log("Bu so'z palindrom emas");
  console.log(strRev);
};

checkPalindrom("kichik");


// 6. Berilgan stringlardagi harflar soni bir-biriga teng
// yoki teng emasligini aniqlang. tartibi muhim emas

let str1 = 'web'
let str2 = 'ewb'

console.log(str1.localeCompare('str2'));

// 7. Stringni ziplash

let zip = "webbraaiiin"

const letZip = (str) => {
for (i in str) {
  console.log(str[i] === str[i]);
  if (str[i] === str[i - i]){
    console.log();
  }
}
}

letZip(zip)
