// 1-masala | yig'indisini toping
let num = '123456'    // 21

let sum = 0
for(i = num[0]; i <= num.length; i++) {
//  console.log(i);
let number = Number(i)
sum += number
}
console.log(sum);

// 2-masala | Berilgan raqamni binaryga o'tkazing va birlar orasida joylashgan eng uzun 0 lar ketma-ketligini toping.
// 1011110101001 --> 2    // 12121
// 101 --> 1

function findZeros(dec) {
  let binary = '10001';
  let count = (max = 0);

  for (let i = 0; i < binary.length; i++){
    if (!Number(binary[i - 1]) && binary.includes('1', i)){
      count++;
      if (count > max) max = count;
    } else {
      count = 0;
    }
}
  console.log(max);
}
findZeros(5);

// 3-masala. String ichidagi sonlardan eng kattasini toping.

const findMax = (num) => {
  // let maxNum = ''
  let num2 = num.split(',')
  for (let i = 0; i < num2.length; i++){
    // console.log(num2[i],i);
    let number = Number(num2[i])
    if(number > number){
      console.log(number);
    }
  }
}

findMax('12,2,45,12,4,78');