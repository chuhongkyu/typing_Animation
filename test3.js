const Img_Arr = ["bg_1","bg_2","bg_3","bg_4","bg_5"];
const Img_Main = document.getElementById("img_main");

let path = "img/";
let mark = ".jpg";

window.onload = ()=>{
    change();
}
////요것을 해야 기존에 디폴트가 사라진다. 왜냐면 온로드가 되니까

function change(){
    let random = Math.floor(Math.random() * Img_Arr.length);
    Img_Main.src = path + Img_Arr[random] + mark;
}
///// console.log("오류 체크");

setInterval(change, 3000);

