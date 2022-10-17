var obj1 = {
  num3: 100,
};

var obj2 = {
  num3: 500,
};

function fnAdd(num1, num2) {
  console.log(num1 + num2 + this.num3); // 10+20+undefined
}

fnAdd(10, 20); // obj1

// fnAdd(100, 200); // obj2

fnAdd.call(obj1, 20, 30); // 150

fnAdd.apply(obj2, [100, 100]); // 700

// var fnAdd = fnAdd.bind(obj1, 50, 50);
// fnAdd(); //200

// var fnAdd = fnAdd.bind(obj1);
// fnAdd(40, 40); //180

// fnAdd.bind(obj2, 10, 10)(); //520

fnAdd.bind(obj2)(60, 60); //620
