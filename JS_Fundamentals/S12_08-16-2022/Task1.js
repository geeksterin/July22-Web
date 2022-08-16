//Remove duplicate elements from array

var arr = [10, 20, 30, 10, 50, 90, 90, 100, 20, 30, 40, 20, 30, 10, 100, 10];

var newValue = arr.reduce(function (initialValue, ele) {
  // [10,20,30]  50
  if (initialValue.indexOf(ele) == -1) {
    initialValue.push(ele); // [10,20,30,50]
  }
  return initialValue;
}, []);

console.log(newValue.reverse());

//reduce
