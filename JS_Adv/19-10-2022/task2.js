function fnAdd(num1, num2, fnCallback) {
  //Developer - 1
  var result;
  setTimeout(function () {
    result = num1 + num2; // 100 + 100 = 200
    fnCallback(result); //200
  }, 1000);
}

function fnMul(resultOfAdd, num3) {
  //200,30
  //Developer - 2
  console.log(resultOfAdd * num3); // 200 * 30   = 6000
}

fnAdd(100, 100, function (result) {
  fnMul(result, 30);
});
