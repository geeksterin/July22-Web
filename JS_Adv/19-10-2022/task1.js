function fnAdd(num1, num2) {
  var result; // undefined
  setTimeout(function () {
    result = num1 + num2; //50
  }, 3000);
  return result; //undefined
}

function fnMul(resultOfAdd, num3) {
  console.log(resultOfAdd * num3); // undefined * 100 = NAN
}

var resultoffnadd = fnAdd(30, 20); //undefined
fnMul(resultoffnadd, 100); //undefined 100
