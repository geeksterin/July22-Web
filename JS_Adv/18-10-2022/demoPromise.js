function resultOfPrecourse(day1, day2, day3) {
  var result = day1 + day2 + day3;
  var promise = new Promise(function (resolve, reject) {
    if (result >= 270) {
      resolve("allow");
    } else {
      reject("Not Allowed for test due to low score");
    }
  });
  return promise;
}

function testResult() {
  //fetch the data from database
  var score = 90;
  var promise = new Promise(function (resolve, reject) {
    if (score >= 60) {
      resolve("passed");
    } else {
      reject("Not passed due to low score in test");
    }
  });
  return promise;
}

function programResult() {
  //fetch all data and calculate passed program or failed
  var result = "passed";
  var promise = new Promise(function (resolve, reject) {
    if (result === "passed") {
      resolve("Allow for Placement");
    } else {
      reject("Dnt Allow Placement");
    }
  });
  return promise;
}

function placementInfo() {
  //fetch pllacement info and calaculate
  var isplace = false;
  var promise = new Promise(function (resolve, reject) {
    if (isplace) {
      resolve("Ask Amount");
    } else {
      reject("let him place first");
    }
  });

  return promise;
}

resultOfPrecourse(90, 90, 90)
  .then(function (res) {
    return testResult();
  })

  .then(function (res) {
    return programResult();
  })

  .then(function (res) {
    return placementInfo();
  })

  .then(function (d) {
    console.log(d);
  })
  .catch(function (err) {
    console.log(err);
  });
