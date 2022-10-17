class PersonalDetails {
  uname;
  uemail;
  uid;
  constructor() {
    this.uname = "Raj";
    this.uemail = "raj@gmail.com";
    this.uid = 101;
  }

  printPersonalDetails() {
    console.log(this.uname, this.uemail, this.uid);
  }
}

class AddressDetails extends PersonalDetails {
  ucity;
  ustate;
  ucountry;

  constructor() {
    super(); // calling the Parent Class Constructor
    this.ucity = "Hyderabad";
    this.ustate = "TS";
    this.ucountry = "India";
  }

  printDetails() {
    this.printPersonalDetails();
    console.log(this.ucity, this.ustate, this.ucountry);
  }
}

var ad1 = new AddressDetails();
var p1 = new PersonalDetails();

// ad1.printPersonalDetails();
// ad1.printDetails();
p1.printPersonalDetails();
p1.printDetails();
