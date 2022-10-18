function fnAdd(num1, num2) {
  var result;
  setTimeout(function () {
    result = num1 + num2;
  }, 3000);
  return result;
}

function fnMul(resultOfAdd, num3) {
  console.log(resultOfAdd * num3);
}

var resultOffnAdd = fnAdd(10, 20);

fnMul(resultOffnAdd, 90);
