var arr = [10, 20, 30, 40, 50];

// var result = arr.some(function (element) {
//   return element < 5; // F F F F F
// });

var result = arr.some(function (element) {
  return element > 15; //F T T T T
});

console.log(result);
