class Users {
  name1;
  static city;
  email;

  constructor(name, email) {
    this.name1 = name;
    this.email = email;
    Users.city = "Mumbai";
  }
  displayNameEmail() {
    console.log(this.name, this.email, Users.city);
  }
  static displayCity() {
    console.log(this.email, this.name1);
    console.log(Users.city);
  }
} //3 users ----- Mumbai

var user1 = new Users("Raj", "raj@gmail.com");
var user2 = new Users("Sneha", "sneha@gmail.com");
var user3 = new Users("Rahul", "rahul@gmail.com");

// user1.displayNameEmail();
// user1.email = "Raj21@gmail.com";
// user1.displayNameEmail();
Users.displayCity();
