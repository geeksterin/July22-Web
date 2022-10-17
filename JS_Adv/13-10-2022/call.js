var obj1 = {
  num3: 100,
};
var obj2 = {
  num3: 500,
};
var obj3 = {
  num3: 1000,
};

function addValue(num1, num2) {
  console.log(num1 + num2 + this.num3); // (10 + 20 + 100)
}

// addValue(10, 20); //obj1
// addValue(50, 50); //obj2
// addValue(100, 100); //obj3

addValue.call(obj1, 10, 20); //130

addValue.call(obj2, 100, 200); // 800

addValue.call(obj3, 100, 100); // 1200
