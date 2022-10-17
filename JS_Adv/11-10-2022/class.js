class User {
  name = "Kabir";
  city;
  id = 101;

  printId() {
    console.log(this.id);
  }
  printAllDetails() {
    console.log(this.id, this.city, this.name);
  }
}

class Emp {
  empName;
  printEmpName() {
    console.log(this.empName);
  }
}

var obj1 = new User(); // it is technique to create object based on class template
var obj2 = new User();
var obj3 = new User();
var obj4 = new User();

var emp = new Emp();

console.log(obj1, obj2, obj3);

console.log(obj1.name);
obj1.printId();
// obj1.name1111();
