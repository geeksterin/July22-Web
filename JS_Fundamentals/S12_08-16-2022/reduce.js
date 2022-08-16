// var arr = [10, 20, 30, 40, 50];

// var newValue = arr.reduce(function (initialValue, element) {
//   console.log(initialValue, element);
//   //0 10
//   //Geekster  20
//   //Geekster 30
//   //Geekster 40
//   //Geekster 50

//   return "Geekster";
// }, 0);

var arr = [10, 20, 30, 40, 50];

var newValue = arr.reduce(function (initialValue, element) {
  //   console.log(initialValue, element);
  //10 20
  //10 30

  return initialValue + element;
});

console.log(newValue);
