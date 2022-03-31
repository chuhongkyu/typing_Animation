function test(pet, like){
    for(let i=0; i<=3; i++){
     console.log(`${pet} 안녕 ${like}`);
     console.log( pet + " 안녕" + like);
    }
}

// setTimeout(()=>{test('설이')},1000);


setTimeout(test, 1000, "사자", "싫어요~");
setInterval(test, 5000, "설이", "좋아요");