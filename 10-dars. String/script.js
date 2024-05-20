// 2. getCount(str) - function yozilsin. function str dagi harflar sanog'ini chiqarib bersin.
// ex: str = 'webbrain' {w:1, e:1, b:2, r:1, a:1, i:1, n:1}

const getCount = (str) => {
let res = {}
  for(let i of str){
    res[i] = (res[i] || 0) + 1  // agar undefinedga teng bo'lsa = 0 
  }
  console.log(res);
}

getCount('webbbrain')


// 3. truncate(str, n) - function yozilsin. Berilgan stringdan nta harf ajratib chiqarib bersin.
// ex: str="webbrain academy", n=5
// res: 'webbr'

const truncate = (str, n) => {
 console.log(str.slice(0, n)); 
}

truncate("webbrain academy", 5)    // webbr

// 4. getCurrency(str) - berilgan pul birligini faqat raqamlarini ajratib chiqaring.
// ex: str='$1200' - 1200.

// const getCurrency = (str) => {
//   return str.replace("$", "")
// }

// console.log(getCurrency('$1200'))  // 1200

// 2-usul
const getCurrency = (str) => {
  let newStr = ""
  for (val of str) {
    if(!isNaN(val)){
      newStr += val
    }
  }
  console.log(newStr);
}
  getCurrency("$1200")     // 1200


// 5. Berilgan string ichidan raqam, string va characterlarni alohida sanog'i bilan chiqaring.
// ex: 'webbr@<>!n_2022',
// res: {letter:6, char:3, numbers:4}

const getCharacter = (str) => {
  str  = str.toLowerCase();
  let obj = { letter: 0, char: 0, number: 0, }

  for(let i of str) {
    if(i.charCodeAt() > 47 && i.charCodeAt() < 58) obj.number++
    else if (i.charCodeAt() > 95 && i.charCodeAt() < 123) obj.letter++
    else obj.char++
  }
  console.log(obj);
}

getCharacter('webbr@<>!n_2022')         // { letter: 6, char: 5, number: 4 }


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
