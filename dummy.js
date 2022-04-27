// for (let i = 1; i <= 50; i++) {
//   let num = i.toString();
//   let result = "";
//   for(let j = 0; j < num.length; j++){
//     if(num[j] == "3" || num[j] === "6" || num[j] === "9"){
//       result+= "짝"
//     }
//   }
//   console.log(result.length > 0 ? result: i);
// }

let n = 15
let isPrime = true

if (n === 1){// 1은 소수가 아님 
    isPrime = false
}
for(let i=2;i<n;i++){
  if(n % i == 0){
    isPrime =  false 
  }
}
console.log(isPrime)