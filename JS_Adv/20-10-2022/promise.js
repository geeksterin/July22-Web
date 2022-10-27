//backend developer developed sendData() function

function sendData() {
  //create the Promise Object
  var promise = new Promise(function (resolve, reject) {
    if (true) {
      resolve({ name: "Kabir", city: "Hyderabad" });
    } else {
      reject({ errorMsg: "Error at database level" });
    }
  });

  return promise; //
}

var promiseObject = sendData();
console.log(promiseObject);

// promiseObject.then(
//   function (successResponse) {
//     console.log("I received success response");
//     console.log(successResponse);
//   },
//   function (failureData) {
//     console.log("I got failure response");
//     console.log(failureData);
//   }
// );
