const pets = ["강아지", "고양이", "앵무새", "랫서팬더", "패릿"];

console.log(pets);

// for(let i = 0; i < pets.length; i++){
//     console.log(i + pets[i]);
// }

pets.forEach(printpet);

function printpet(item, index, array){
    console.log(item, index, array);
};

// pets.forEach((item, index, array)=>{
//     console.log(item, index, array);
// });

pets.