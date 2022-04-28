let calc = [50000, 10000, 5000, 1000, 500, 100];

function countMoney(money) {
  let pay = money;
  let result =" ";

  for (let i = 0; i < calc.length; i++) {
       result = parseInt(pay / calc[i]);
       pay = parseInt(pay % calc[i])
       console.log(`${calc[i]} X ${result}`);
    }
  
}

countMoney(12300);