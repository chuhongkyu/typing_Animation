const Img_Arr = ["bg_1","bg_2","bg_3","bg_4","bg_5"];
const Img_Main = document.getElementById("img_main");
const Text_Arr = ["GET","LOVE","FREE","SUNDAY"];
const Text_Main = document.getElementById("text_main");

let path = "img/";
let mark = ".jpg";

window.onload = ()=>{
    onChangeImg();
}
////요것을 해야 기존에 디폴트가 사라진다. 왜냐면 온로드가 되니까

function onChangeImg(){
    let random = Math.floor(Math.random() * Img_Arr.length);
    Img_Main.src = path + Img_Arr[random] + mark;
    let randomText = Math.floor(Math.random() * Text_Arr.length);
    Text_Main.innerHTML = Text_Arr[randomText];
}
///// 함수로 빼야 또 쓰징~

setInterval(onChangeImg, 3000);

