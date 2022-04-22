// 객체 연습

const menu = [{
  name: "민트초코",
  price: 5000
},
{
  name: "바닐라라떼",
  price: 4500
},
{
  name: "아메리카노",
  price: 2000
}]

const orderText = document.querySelector(".order-text");
const answerText = document.querySelector(".answer-text");
const inputPanel = document.querySelector("#order-panel");

function howMuchIsit(){
  let orderName = parseInt(inputPanel.value) -1;

  if(orderName < menu.length && orderName > -1){
    orderText.innerHTML = `<h1>${menu[orderName].name }는 얼마인가요?</h1>`;
    setTimeout(()=>{answerText.innerHTML = `<h4>${menu[orderName].name}는 ${menu[orderName].price}원 입니다.</h4>`;}, 1000);
  }
  else {
    alert("메뉴를 입력해주세요. 메뉴는 3번까지 있습니다.");
  }
}