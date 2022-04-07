const LEFTBOX = document.querySelector("#LeftBox");
const RIGHTBOX = document.querySelector(".photo_card");

window.addEventListener('scroll', function(){
    let value = window.scrollY;

    if(value > 600){
        LEFTBOX.style.animation = "LeftBoxDisappear 1s ease-out forwards";
        RIGHTBOX.style.animation = "RightBoxDisappear 1s ease-out forwards";
    }
    else{
        LEFTBOX.style.animation = "LeftBoxMove 1s ease-out";
        RIGHTBOX.style.animation = "RightBoxMove 1s ease-out";
    }
});