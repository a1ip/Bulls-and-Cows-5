"use strict";

//Guess Random number
function guessNum() {
  let number = "";
  
  let firstValue = Math.floor((Math.random()* 9) +1) ;
  number.includes(firstValue);
  number +=  firstValue;

  for (let i = 0; i < 3; i++) {
    let randomValue = "";
    do {
      randomValue = Math.floor(Math.random()*10);
    } while (number.includes(randomValue));

    number +=  randomValue;
  }
  return number; 
}

//Debug
console.log(guessNum());

//Campare values and  out result
function campareValues() {
  let randomResult = guessNum();

  for (let i = 0; i <= 10; i++) {
    var bulls = 0;
    var cows = 0;
    let enterPlayerNum = prompt("Введи 4 цифры", "");
  
    for (i = 0; i < 4; i++) {
      if (randomResult[i] === enterPlayerNum[i]) {
        bulls++;
      } else if (randomResult.includes(enterPlayerNum[i])) {
        cows++;
      }
    }
    if (bulls == 4) {
      alert(`${enterPlayerNum}: ${bulls}Б, ${cows}К. Победа`);
      break;
    }
    alert(`${enterPlayerNum}: ${bulls}Б, ${cows}К. попробуй еще раз`);
  }
}
campareValues();