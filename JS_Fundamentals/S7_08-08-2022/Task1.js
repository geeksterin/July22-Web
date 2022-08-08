// Mobile Product
//brand, price, modelName

var mobileProduct = {
  brand: "Apple", //  Property
  model: "Iphone 13pro",
  price: 115000,
};

//Stroing Students Marks without Subject name : 80,90,100,75,95
var studentMarks = [80, 90, 100, 75, 95]; // elements

var student = {
  name: "Vaish",
  id: 101,
  city: "Mumbai",
  marks: [90, 90, 80, 75, 95], //
};

console.log(student.marks[3]);

var product = [
  {
    brand: "Apple",
    price: 90000,
  },
  {
    brand: "Vivo",
    price: 9000,
  },
  {
    brand: "Samsung", // product[2].price
    price: 70000,
  },
  {
    brand: "Apple",
    price: 80000,
  },
];

console.log(product[2].price);
