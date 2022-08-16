var arr = [10, 20, 30, 40];

//[20,30,40,50]

var newArray = arr.map(function (element, index) {
  return element * 65;
});

// console.log(newArray);

var empDetails = [
  {
    id: 101,
    name: "E1",
    city: "Hyd",
  },
  {
    id: 102,
    name: "E2",
city: "Hyd",
  },
  {
    id: 103,
    name: "E3",
    city: "Pune",
  },
  {
    id: 104,
    name: "E4",
    city: "Chennai",
  },
  {
    id: 105,
    name: "E5",
    city: "Banglore",
  },
];

var empIds = empDetails.map(function (ele, index) {
  return { id: ele.id, name: ele.name };
});

console.log(empIds);
