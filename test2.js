///오늘 2022-04-11

const Menu = ["라면", "도시락", "짜장면", "써브웨이", "햄버거"];

console.log(`Menu 종류 : ${Menu.length}`);

let num1 = Math.random();
let num2 = Math.floor(num1);
let num3 = Math.floor(num1 * Menu.length);

// console.log("0/1 랜덤 : " + num1);
// console.log("Floor  0 : " + num2);
// console.log("정수 랜덤 : " + num3);
// console.log("진짜 랜덤 : " + num4);


// for(let i =0; i< Menu.length; i++){
//     if(num4 == i){
//         console.log(num4);
//         console.log(Menu[i]);
//     }
// }

// Menu.forEach((item, index)=>{
//     if(num4 == index){
//         console.log(`랜덤 숫자: ${num4}, Menu 숫자: ${index}, 추천 메뉴: ${item}`);
//     }
// });


function recommend(){

    let num4 = Math.floor(Math.random() * Menu.length);

    Menu.forEach((item, index)=>{
        if(num4 == index){
            // console.log(`랜덤 숫자: ${num4}, Menu 숫자: ${index}, 추천 메뉴: ${item}`);
            document.querySelector(".recommend").innerHTML = `<h5>추천 메뉴는 <span style="color: red; font-size: 18px;">"${item}" </span>입니다.</h5>`;
        }
    });
    
}