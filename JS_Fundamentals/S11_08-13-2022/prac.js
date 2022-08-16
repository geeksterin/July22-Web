var arr = [20, 30, 90, 40, 50, 60, 70, 80, 90, 15, 67, 30, 50, 60, 70];
// console.log(arr.splice(2, 3, 100));
// console.log(arr);
var a = arr.reduce(function (total, element) {
  console.log(total, element);
  if (total.indexOf(element) == -1) {
    total.push(element);
  }
  return total;
}, []);
