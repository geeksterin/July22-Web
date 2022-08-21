//Find the Factorial of Given Number and return it, if you pass zero then return 1

function findFact(num) {
  if (num === 0) {
    num = 1;
  } else {
    for (var i = num; i > 1; i--) {
      //5 //4 //6
      num = (i - 1) * num; //12 *2 = 24 *1 = 24
    }
  }

  return num;
}

console.log(findFact(0)); // 120  //6  //24
