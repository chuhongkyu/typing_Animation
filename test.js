const catNames = ["나비야", "고양시", "길냥이"]; 

let counter = 0;

// function callName(){
//     for(let i =0; i< catNames.length; i++){
//         console.log(catNames[i])
//     }
//     counter++;
//     console.log(counter, "번");

//     if(counter == 3){
//     clearInterval(callInterval);
//     console.log("종료")
//  }
// }
   
// const callInterval = setInterval(callName ,3000);

const callInterval = setInterval(()=>{

     for(let i =0; i< catNames.length; i++){
        console.log(catNames[i])
    }

    if(counter >=2 ){
    clearInterval(callInterval);
    console.log("종료")
    }

    counter++;
    console.log(counter, "번");


} ,1000);

