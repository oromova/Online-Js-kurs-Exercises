// Moment.js

const now = new Date();
const hour = now.getHours();
const formattedHours = hour % 12 || 12;
const minutes = now.getMinutes() < 10 ? "0" + now.getMinutes() : now.getMinutes();
const seconds = now.getSeconds() < 10 ? "0" + now.getSeconds() : now.getSeconds();
const date = now.getDate() < 10 ? "0" + now.getDate() : now.getDate();
const month = now.getMonth()
const monthWithZero = now.getMonth() < 10 ? "0" + (+now.getMonth()+1) : now.getMonth();
const fullYear = now.getFullYear();
const day = now.getDay()
const ampm = hour < 12 ? "AM" : "PM";

const days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday'
]

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];


// formats
const LT = `${formattedHours}:${minutes} ${ampm}`
const LTS = `${formattedHours}:${minutes}:${seconds} ${ampm}`
const L = `${monthWithZero}/${date}/${fullYear}`
const l = `${month+1}/${date}/${fullYear}`
const LL = `${months[month]} ${date}, ${fullYear}`
const ll = `${months[month].slice(0,3)} ${date}, ${fullYear}`
const LLL = `${LL} ${LT}`
const lll = `${ll} ${LT}`
const LLLL = `${days[day]}, ${LLL}`
const llll = `${days[day].slice(0,3)}, ${lll}`

// moment().format()
const moment = () => {
  return {
    format: (arg) => {
      return arg;
    }
  }
}

console.log(moment().format(LT));   // 3:39 PM
console.log(moment().format(LTS));  // 3:39:55 PM
console.log(moment().format(L));    // 06/26/2024
console.log(moment().format(l));    // 6/26/2024
console.log(moment().format(LL));   // June 26, 2024
console.log(moment().format(ll));   // Jun 26, 2024
console.log(moment().format(LLL));  // June 26, 2024 3:58 PM
console.log(moment().format(lll));  // Jun 26, 2024 4:01 PM
console.log(moment().format(LLLL)); // Wednesday, June 26, 2024 4:12 PM
console.log(moment().format(llll)); // Wed, Jun 26, 2024 4:15 PM