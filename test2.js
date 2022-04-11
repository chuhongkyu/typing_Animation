

// console.log(pets);

// for(let i = 0; i < pets.length; i++){
//     console.log(i + pets[i]);
// }

// pets.forEach(printpet);

// function printpet(item, index, array){
//     console.log(item, index, array);
// };

// pets.forEach((item, index, array)=>{
//     console.log(item, index, array);
// });

// const callCat = setTimeout(ohwa, 3000);

// function ohwa() {
//     for(let i in pets){
//     console.log(i + ":" + pets[i]);
// }
    
// };

let pets = ["강아지", "고양이", "앵무새", "랫서팬더", "패릿"];
let counter = 0;

const oneCat = setInterval(()=> {
    counter++
    pets.forEach(item => console.log(counter + item));
    if(counter >= 3 ){
        clearInterval(oneCat, 1000);
    }
}, 1000);