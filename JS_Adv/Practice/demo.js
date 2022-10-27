function fn(...data) {
  data.forEach(function (ele) {
    console.log(ele);
  });
}

// fn(23, "dvnf", 00, 998);

function f1(data) {
  console.log(...data);
  var arr = [];
  arr.push(...data);
  console.log(arr);
}
// f1([89, 23, 09]);

function f2() {
  var obj = {
    name: "Sagar",
    email: "Sagar@gmail.com",
    id: 101,
    city: "Latur",
  };

  var obj1 = {};
  console.log(obj1);
  obj1 = {
    ...obj,
    name: "Kabir",
  };
  console.log(obj1);
}

f2();
