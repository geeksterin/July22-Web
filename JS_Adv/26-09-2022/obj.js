var obj = {
  name: "Rajiv",
  getCity: function () {
    console.log("Delhi");
  },
  marks: [60, 89, 56, 79],
  emails: {
    primaryEmail: "Rajivdev@gmail.com",
    secondaryEmail: "Rajiv07@gmail.com",
  },
};

obj.getCity();
console.log(obj.name);
console.log(obj.marks[3]);
console.log(obj.emails.secondaryEmail);
