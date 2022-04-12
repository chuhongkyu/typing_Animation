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

const ORDERBY = document.getElementById("Please_give");
// 주문후 메세지 나오는 곳

function giveMe(){
    let Order = document.getElementById("input_panel").value.replace(/(\s*)/g, "");
    let found = MENU.find(element => element === Order);

    ORDERBY.innerHTML = 
        `음~~~<span style="color:orange;">${Order}</span>로 주세요. 
        <br>네~ 손님 <span style="color:orange;">${Order}</span> 준비해드릴게요`;

    if(!Order){
        ORDERBY.innerHTML = 
            `<span style="color:red;">주문할 메뉴를 입력하세요</span>`;
    }
    else if(!found){
        ORDERBY.innerHTML = 
            `음~~ <span style="color:orange;">${Order}</span> 주세요. 
            <br>이봐요~ 손님! <span style="color:orange;">${Order}</span>는 없어요🤣`;
    }
}



// function giveMe(){
// try{
//     MENU.forEach((item, index)){
//         if(Input.value === item){
//             throw
//         }else{
//             console.log("tata")
//         }
//     }

//     }
//     catch(error){
//     console.error("e");
//     }
// }