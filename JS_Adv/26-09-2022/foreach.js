// var names = ["Rajiv", "Zoya", "Shivali", "Rahul", "Aish"];

// names.forEach(function (element, index) {
//   console.log(element, index);
// });

var names = ["Rajiv", "Zoya", "Shivali"];

//forEach

//  o/p :
// Rajiv Sharma
// Zoya Khan
//Shivali Verma

names.forEach(function (ele) {
  if (ele === "Rajiv") {
    console.log("Rajiv Sharma");
  } else if (ele === "Zoya") {
    console.log("Zoya Khan");
  } else {
    console.log("Shivali Verma");
  }
});
