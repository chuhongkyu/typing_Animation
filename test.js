//객체란 무엇일까?

// const menu = ["민트초코", "바닐라라떼", "아메리카노", "녹차라떼"];
// const price =[5000, 4500, 2000];


// function orderPrint(i){
//   console.log(`손님 ~ ${menu[i]}는 ${price[i]}원 입니다.   `);
// }

// orderPrint(1);
// orderPrint(2);

// function sumPrice(first, second){
//   return price[first] + price[second];
// }

// let superPrice = sumPrice(1,2);

// console.log(`총 ${superPrice}`);

// const cafeMenu = {
//   menu: "민트초코",
//   price: 5000,
// }

// console.log(cafeMenu.menu);
// console.log(cafeMenu["menu"]);

// console.log(cafeMenu.price);
// console.log(cafeMenu["price"]);


//key 와 value 이름과 값

const dog ={
  name: "설",
  age: 9,
  kind: "요크셔테리어",
  color:"실버",
  skill: "구르기",
  action: function(){
    console.log("빵야");
  },
  action2: (say)=>{
    console.log(say);
  }
}

dog.action();
dog.action2("죽은척");

const me = {
  name: "추홍규",
  age: 29,
  study: ["js", "css/html"],
  skill: "딴짓",
  team: "앱개발",
  action: function(i){
    if(i == 0){
      console.log("밥먹으러가자");
    }
    else if(i == 1){
      console.log("옥상가자");
    }
    else{
      console.log("집가자");
    }
  }
}

console.log(me.study[0]);
me.action();
me.action(0);
me.action(1);
