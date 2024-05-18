// 2. getCount(str) - function yozilsin. function str dagi harflar sanog'ini chiqarib bersin.
// ex: str = 'webbrain' {w:1, e:1, b:2, r:1, a:1, i:1, n:1}

let res = {}
const getCount = (str) => {
  for(let i = 0; i < str.length; i++){
    let letter = str[i];
    if(isNaN(letter.charCodeAt() === letter.charCodeAt())) {
      res[letter]++;
    }
    else {
      res[letter]=1
    }
  }
}

getCount('webbbrain')
console.log(res);



// 3. truncate(str, n) - function yozilsin. Berilgan stringdan nta harf ajratib chiqarib bersin.
// ex: str="webbrain academy", n=5
// res: 'webbr'

const truncate = (str, n) => {
 console.log(str.slice(0, n)); 
}

truncate("webbrain academy", 5)    // webbr

// 4. getCurrency(str) - berilgan pul birligini faqat raqamlarini ajratib chiqaring.
// ex: str='$1200' - 1200.

const getCurrency = (str) => {
  return str.replace("$", "")
}

console.log(getCurrency('$1200'))  // 1200


// 5. Berilgan string ichidan raqam, string va characterlarni alohida sanog'i bilan chiqaring.
// ex: 'webbr@<>!n_2022',
// res: {letter:6, char:3, numbers:4}

const getCharacter = (str) => {
  let obj = {
    letter: "",
    char: "",
    number: "",
  }
  for(let i = 0; i < str.length; i++) {
    console.log(str[i]);
    let val = str[i]
    if(val.charCodeAt() > 48 && val.charCodeAt() < 58) {
      //obj.number = val
    }
    
  }
  console.log(obj);
}

getCharacter('webbr@<>!n_2022')

// if(val.charCodeAt() > 64 || val.charCodeAt() < 91 && val.charCodeAt() >= 97 || val.charCodeAt() < 123) {
//   obj.letter = val
//   }

// if(val.charCodeAt() < 48 || val.charCodeAt() > 57 && val.charCodeAt() < 65 || val.charCodeAt() > 90 && val.charCodeAt() < 97 || val.charCodeAt() > 122 && val.charCodeAt() < 127);
// obj.char = val



// 6. capitilize(str) - berilgan stringdagi barcha so'zlarni faqat bosh harfini katta harfga o'zgartirib chiqarish kk.
// ex: str = webbrain academy  // Webbrain Academy

const capitilize = (str) => {
  let ar = str.split(' ')
  let capitilizeWords = []
  for (let word of ar){
    let ar = word.charAt(0).toUpperCase() + word.slice(1)
  //  console.log(ar);
  capitilizeWords.push(ar)
  }
  return capitilizeWords.join(' ');
}

console.log(capitilize('webbrain academy'))      // Webbrain Academy




