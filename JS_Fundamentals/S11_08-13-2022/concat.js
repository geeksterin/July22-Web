var a1 = [10, 20]; //[10,20,30,40]
var a2 = [30, 40];

console.log(a1.concat(a2)); // [10,20,30,40] new Array
console.log(a1); //[10,20]
console.log(a2); // [30,40]
console.log(a2.concat(a1)); //[30,40,10,20] new Array
