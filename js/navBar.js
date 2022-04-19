function appearToogle(){
    let Item = document.querySelector(".item");
    let SnsBox = document.querySelector(".sns_box");
    if(Item.style.display === "flex"){
        Item.style.display = "none";
        SnsBox.style.display = "none";
    }
    else{
        Item.style.display = "flex";
        SnsBox.style.display = "flex";
    }
}

