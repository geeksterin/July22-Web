function fn() {
  var promise = new Promise(function (resolve, reject) {
    if (true) {
      resolve("Resolved");
    } else {
      reject("Rejected");
    }
  });
  return promise;
}
function f2() {
  var promise = new Promise(function (resolve, reject) {
    if (false) {
      resolve("Resolved f2");
    } else {
      reject("Rejected f2");
    }
  });
  return promise;
}

fn()
  .then(function (res) {
    console.log(res);
    return f2();
  })
  .then(function (f2res) {
    console.log(f2res, "kjjkgjk");
  })
  .catch(function (err) {
    console.log(err);
  });
