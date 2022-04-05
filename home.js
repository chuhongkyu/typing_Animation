let TextFlow = document.querySelectorAll(".text_flow");

function randomString(){
    let stringArr = ["코딩이란  무엇인가 이대로 괜찮은 것인가 나와 너의 연결고리","자바스크립트, HTML, CSS 너는 누구인가 포트 폴리오" , "sagsagfdgsdgasdagsdgsdㅁㄴㄻㄴㄻㄴㄹㄴㅁㄹ"];
    let selectString = stringArr[Math.floor(Math.random()* stringArr.length)];
    let selectStringArr = selectString.split("");
    return selectStringArr;
}

function resetTyping(){
    TextFlow[0].textContent = "";
   TextFlow[3].textContent = "";
    dyamic(randomString());
}

function dyamic(randomArr){
    // console.log(randomArr);
    if(randomArr.length > 0){ 
            
       TextFlow[0].textContent += randomArr.shift();
       TextFlow[3].textContent += randomArr.shift();
        setTimeout(function(){dyamic(randomArr);},80) 
    }
     else{
        setTimeout(resetTyping, 3000);
    }
}

dyamic(randomString());
