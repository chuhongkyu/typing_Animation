let LEFT_BOX = document.querySelector("#LeftBox");
let RIGHT_BOX = document.querySelector(".photo_card");

window.addEventListener('scroll', function(){
    let value = window.scrollY;

    if(value > 600){
        LEFT_BOX.style.animation = "LeftBoxDisappear 1s ease-out forwards";
        RIGHT_BOX.style.animation = "RightBoxDisappear 1s ease-out forwards";
    }
    else{
        LEFT_BOX.style.animation = "LeftBoxMove 1s ease-out";
        RIGHT_BOX.style.animation = "RightBoxMove 1s ease-out";
    }
});