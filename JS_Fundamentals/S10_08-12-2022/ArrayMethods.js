var arr = [10, 20, 30, 40, 90, 80];
// console.log(arr);
//push()
// arr.push(50);
// arr.push(60);
// arr.push(70, 80);
// console.log(arr);

//unshift()

// arr.unshift(5);
// arr.unshift(1, 2);
// console.log(arr);

//pop()
// console.log(arr);
// var r = arr.pop();
// console.log(r);
// arr.pop();
// console.log(arr);

// //shift
// console.log(arr);
// arr.shift();
// console.log(arr);

// console.log(arr[2]);

//indexOf()
// console.log(arr.indexOf(40)); //

// console.log(arr.lastIndexOf(40)); //

//using indexof can we find a certain element present in array or not
// var result = arr.includes(140);
// console.log(result);

arr.forEach(function (element, index) {
  console.log(index, element);
});
