
function calc() {
    var randomNum = Math.ceil((Math.random() * 9));
    return randomNum;
}

var resultNum = calc.apply();
console.log(resultNum);

