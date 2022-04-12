const MENU = ["치즈와퍼", "불고기와퍼", "새우버거", "치킨버거", "베이컨와퍼"];

function recommend(){
    let randomNum = Math.floor(Math.random()*MENU.length);
    MENU.forEach((item, index)=>{
        if(randomNum == index ){
            // console.log(item);
            document.getElementById("Recommend_panel").innerHTML= `오늘의 추천 메뉴는 <span class="pretty">${item}</span>입니다.`
        }
    })
}

let Input = document.getElementById("input_panel");

function giveMe(){
    document.getElementById("Please_give").innerHTML = `음~~~<span style="color:orange;">${Input.value}</span> 주세요. <br>네~ 손님 <span style="color:orange;">${Input.value}</span> 준비해드릴게요 `;
    console.log(Input.value);

    let found = MENU.find(element => element === Input.value);
    // console.log(found);

    if(Input.value =="" || Input.value === null){
        document.getElementById("Please_give").innerHTML = `<span style="color:red;">주문할 메뉴를 입력하세요</span>`;
    }
    else if(!found){
        document.getElementById("Please_give").innerHTML = `음~~~<span style="color:orange;">${Input.value}</span> 주세요. <br>이봐요~ 손님 <span style="color:orange;">${Input.value}</span> 는 없어요ㅜㅜ `;
        console.log("yeah");
    }
 
}



