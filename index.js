let  target = document.querySelector("#dynamic");


function randomString(){
    let stringArr = ["Lear to HTML","Lear to CSS","Lear to JAVA","Lear to Recycle"];
    let selectString = stringArr[Math.floor(Math.random()* stringArr.length)];
    let selectStringArr = selectString.split("");

    return selectStringArr;

}

function resetTyping(){
    target.textContent = "";
    dyamic(randomString());
}
//한글자씩 텍스트 출력 함수

function dyamic(randomArr){
    console.log(randomArr);
    if(randomArr.length > 0){
        target.textContent += randomArr.shift();
        setTimeout(function(){dyamic(randomArr);},80)
    }
    else{
        setTimeout(resetTyping, 3000);
    }
}

dyamic(randomString());

function blink(){
    target.classList.toggle("active");
}

setInterval(blink, 500);

