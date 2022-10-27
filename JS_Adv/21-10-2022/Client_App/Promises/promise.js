function fn() {
  //create the promise
  var promise = new Promise(function (resolve, reject) {
    if (true) {
      resolve({
        status: "Ok",
        results: [{ name: "Darsh" }, { name: "Ziya" }, { name: "Sneha" }],
        headers: {},
      });
    } else {
      reject({
        status: "NotOk",
        error: { msg: "Error while inserting the data in database" },
      });
    }
  });

  return promise;
}

function fnSuccess(responseData) {
  var promise = new Promise(function (resolve, reject) {
    if (responseData.results[0].name === "Darsh") {
      resolve({ name: "Darsh", city: "Delhi", email: "Darsh@gmail.com" });
    } else {
      reject("No User found with the name Darsh");
    }
  });

  return promise;
}

function fnFailure(errorData) {
  console.log("fnFailure is called");
  console.log(errorData);
}

// fn() // promise
//   .then(
//     function (res) {
//       return fnSuccess(res); //promise
//     },
//     function (err) {
//       fnFailure(err);
//     }
//   )
//   .then(
//     function (res) {
//       console.log(res);  //promise
//     },
//     function (errorMsg) {
//       console.log(errorMsg);
//     }
//   ).then(function(){
//     // promise
//   },function()).then(function(){},function(){})

fn()
  .then(
    function (res) {
      return fnSuccess(res);
    },
    function (err) {
      fnFailure(err);
    }
  )
  .then(
    function (data) {
      console.log(data);
    },
    function (err) {
      console.log(err);
    }
  );
