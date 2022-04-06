// const A = {
//     name: "chu_hong_kyu",
//     like: "css",
//     age: "92"
// }

// let list = ["chu","hong", "512" , "103" ,"배열"];
// console.log(list);

// let newB = [];

// for(let i= 0; i < list.length; i++){
//     newB.push(list[i].slice(1));
// }
// console.log(newB);


// console.log(A);

// const B = Object.assign({cm : "182"}, A);

// console.log(B);

// const C = Object.keys(B);

// console.log(C);

// const D = Object.values(B);

// console.log(D);

// const E = Object.entries(B);

// console.log(E);

// const F = Object.fromEntries(E);

// console.log(F);

// let nafg = "f12";

// console.log(parseInt(nafg, 16));




function hasCola(x){
    if(x.indexOf("콜라") > -1){
        console.log("금지어가 있습니다.")
    }else{
        console.log("통과", x.indexOf("콜라"));
    }
}

hasCola("아 맛있다");
hasCola("아 사이다 맛있다");
hasCola("콜라 먹을거야?");