//객체란 무엇일까?

const menu = ["아메리카노", "카페라떼", "사과쥬스"];
const price =["1,500원", "1,800원", "3,000원"];

function printMessage(menu, price, i){
  console.log(`손님 ${menu[i]}는 ${price[i]} 입니다.`);
}

printMessage(menu, price, 1);

// for (let index = 0; index < menu.length; index++) {
//   printMessage(menu, price, index);
// }

// menu.forEach((item, index) => {
//   printMessage(menu, price, index);
  
// });

// for(let i in menu){
//   printMessage(menu, price, i);
// }