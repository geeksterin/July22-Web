var products = [
  {
    brand: "Apple",
    model: "Iphone 12",
    price: 90000,
  },
  {
    brand: "Vivo",
    model: "Vivo A21",
    price: 9000,
  },
  {
    brand: "Samsung", // product[2].price
    price: 70000,
    model: "Samsung Galaxy fold",
  },
  {
    brand: "Apple",
    model: "Iphone 13",
    price: 80000,
  },
  {
    brand: "oppo",
    model: "oppo 13",
    price: 80000,
  },
];
var a = 4;
switch (products[a].brand) {
  case "Apple":
    console.log(products[0]);
    console.log(products[3]);
    break;
  case "Vivo":
    console.log(products[1]);
    break;
  case "Samsung":
    console.log(products[2]);

    break;
  case "oppo":
    console.log(products[4]);
    break;
  default:
    console.log("No case is Matched");
}
