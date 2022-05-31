let LEFT_BOX = document.querySelector("#LeftBox");
let RIGHT_BOX = document.querySelector(".photo_card");
let LINE = document.querySelector(".test");
let M = document.querySelector(".first_section").style.height;
let S = document.querySelector(".main_section").style.height;

window.addEventListener('scroll', function(){
    let value = window.scrollY;
    // value -=S;
    // value -=M;
    if(value > M+S){
        LINE.style.height = value + "px";
    }
    
    console.log(value)
    console.log(M+S);

    if(value > 600){
        LEFT_BOX.style.animation = "LeftBoxDisappear 1s ease-out forwards";
        RIGHT_BOX.style.animation = "RightBoxDisappear 1s ease-out forwards";
    }
    else{
        LEFT_BOX.style.animation = "LeftBoxMove 1s ease-out";
        RIGHT_BOX.style.animation = "RightBoxMove 1s ease-out";
    }
});