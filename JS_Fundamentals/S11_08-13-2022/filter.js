var arr = [20, 50, 90, 50, 30];

//print all the elements of this array which are greater then 30

// var newArray = arr.filter(function (element, index) {
//   return element > 30; // false
// });

var newArray = arr.filter(function (element, index) {
  return element < 50; // false  //[20,30]
});

//newArray = [50,90,50]
console.log(newArray);
