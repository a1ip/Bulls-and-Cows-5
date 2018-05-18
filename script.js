"use strict";

// function randomNum() {
//  var rdm = Math.ceil((Math.random() * 9));
//  return rdm
// }

// console.log(randomNum());


// function main(secretNum, guess) {
//    var bulls = 0;
//    var cows = 0;
//    var numbers = new Array(10);
//     for (i = 0; i < 10; i++) {
        
//         }
// }

// function isEmpty(obj) {
    
//     var key = 0;
//     for (key in obj) {
//     }
//     if (key < 1) {
//         return true;
//     }
//         else {
//         return false ;
//         key++ ;
//     }

// }

// var schedule = {};
// alert(schedule["8:30"]); 
// alert(isEmpty(schedule)); 

// let salaries = {
//   "Petya": 100,
//   "Misha": 300,
//   "Dasha": 250
// };

// function f(obj) {
//   let coutner = 0;
//   let result = 0;

//   for (var prop in salaries) {
//     result += salaries[prop]
//     coutner++
//   }
//   if (coutner == 0) {
//     alert("Salaries is empty");
//   }
//   return result;
// }

// alert(f(salaries));

// function  (n) {
//  let value = Math.floor((Math.random()) * 10); 
//  return value;
// }
//console.log(generateRandomNum());

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

console.log(guessNum());

