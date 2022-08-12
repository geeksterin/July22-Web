//WAF to Print all those object whose brand name is Apple

var studentsMArks = [40, 50, 60, 79, 21, 95, 35, 95, 05, 12];
//WAF to Print all those elements which are greater then 50
//WAF to Print all those elements which are less then 50
//WAF to Print all those elements which are in between 30 and 80

//WAF to Print all those elements whose price is less then 50000

var products = [
  {
    brand: "Apple",
    price: 90000,
  },
  {
    brand: "Oppo",
    price: 50000,
  },
  {
    brand: "oneplus",
    price: 60000,
  },
  {
    brand: "Samsung",
    price: 90000,
  },
  {
    brand: "Apple",
    price: 50000,
  },
  {
    brand: "Apple",
    price: 60000,
  },
];

function printAppleBrand() {
  products.forEach(function (element, index) {
    // element = {brand:"Oppo",price:8000"}
    if (element.brand === "Apple") {
      console.log(element);
    }
  });
}
printAppleBrand();
