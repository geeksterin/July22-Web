// WAF and return arr so that it only contains elements that sum to the value of 10.
const arr = [2, 4, 5, 1, 7, 5, 2, 1]; // [5,5] [7,2,1] [2,7,1]

// function FilterArray() {
//   //splice  shift
//   //   arr.shift();
//   arr.splice(0, 1);
//   arr.splice(3);
//   return arr;
// }

// console.log(FilterArray());

function FilterArray() {
  arr.splice(0, 2);
  arr.splice(1, 2);
  arr.splice(-2);
  return arr;
}
console.log(FilterArray());
