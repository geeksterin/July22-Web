class A {
  name = "a";
  city = "c";

  display() {
    console.log(this.name, this.city);
  }
}

class B extends A {
  email = "b@gmail.com";
  id = 101;

  display() {
    super.display();
    console.log(this.email, this.id);
  }
}

var b1 = new B();
b1.display();
