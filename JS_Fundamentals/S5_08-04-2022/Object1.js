var student = {
  name: "Krishna",
  city: "Delhi",
  id: 101,
};

console.log(student);

// I want to store Mobile Product Information
//ModelName, brandName, Price, Storage, Ram , Rating

var mobileProduct = {
  brandName: "Apple",
  modelName: "Iphone 13",
  price: 90000,
  storage: "128gb",
  ram: "12gb",
  rating: 4.7,
};
console.log(mobileProduct);

//Accessing Particular Property in the Object

//<objname>.<keyname>
console.log(mobileProduct.modelName);
console.log(mobileProduct.ram);

// Create Employee Object
//Add 5 Properties like id,name,des,city,emailid
//Print name, emailid

// How to insert new Property inside Object using JS code
// <objname>.<new Property key name> = <new Value>

mobileProduct.review = "Good";
console.log(mobileProduct);
