class Product {
  //var let and const
  brandName;
  modelName;
  price;
  qty;
  totalAmount;

  constructor(brandName, modelName, price, qty) {
    this.brandName = brandName;
    this.modelName = modelName;
    this.price = price;
    this.qty = qty;
    this.totalAmount = 0;
  }

  displayDetails() {
    console.log(
      this.brandName,
      this.modelName,
      this.price,
      this.qty, //6months
      this.totalAmount
    );
  }

  calculateTotalAmount() {
    this.totalAmount = this.price * this.qty;
    this.displayDetails();
  }
}

var mobileProduct = new Product("Apple", "Iphone 14");
mobileProduct.displayDetails();

mobileProduct.brandName = "Apple";
mobileProduct.modelName = "Iphone 14Pro";
mobileProduct.price = 180000;
mobileProduct.qty = 30;

mobileProduct.calculateTotalAmount();
mobileProduct.displayDetails();
console.log(
  "-----------------------------------------------------------------"
);
var LaptopProduct = new Product("Apple", "Macbook Pro");
LaptopProduct.displayDetails();
LaptopProduct.brandName = "Apple";
LaptopProduct.modelName = "Macbook Pro";
LaptopProduct.price = 2400000;
LaptopProduct.qty = 6;
LaptopProduct.calculateTotalAmount();
LaptopProduct.displayDetails();
console.log(
  "-----------------------------------------------------------------"
);

// // var menswearing = new Product();
// menswearing.displayDetails();
