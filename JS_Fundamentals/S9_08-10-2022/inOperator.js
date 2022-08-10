var data = {
  name: "Geekster",
  city: "Gurugram",
  id: 101,
};

console.log(data.city);
console.log(data["city"]);
console.log("----------------------------------");

//in Operator with for loop

// for (var key in data) {
//   console.log(key);
// }

for (var key in data) {
  console.log(key, ":", data[key]);
}
