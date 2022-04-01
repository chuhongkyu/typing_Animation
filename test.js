const catNames = ["나비야", "고양시", "길냥이"]; 

let counter =0;

function callName(){
    console.log(catNames[1]);
    counter++;
    console.log(counter);

    if(counter == 3){
    clearInterval(callInterval);
 }
}
   
let callInterval = setInterval(callName ,3000);



