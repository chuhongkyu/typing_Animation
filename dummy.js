for(let i = 1; i <= 50; i++){
  let stringValue = i.toString()
  let result = "";


  for(let j = 0; j<stringValue.length; j++){
    if(stringValue[j] == "3" ||stringValue[j] == "6" ||stringValue[j] == "9" ){
      result+="짝"
    }
  }
  console.log(result.length > 0 ? result : i);
}