function resultOfPrecourse(day1, day2, day3, testResultCallback) {
  var totalTime = day1 + day2 + day3;
  if (totalTime >= 270) {
    testResultCallback();
  } else {
    console.log("Not Qualified for Test due to low attindance");
  }
}

function resultOfTest(resultOfProgramCallback) {
  //fetch the result data from the database
  var testScore = 80;
  if (testScore >= 60) {
    resultOfProgramCallback();
  } else {
    console.log("Not Qualified for Program due to low Score in Test");
  }
}

function resultOfProgram(placementCallback) {
  //fetch the data of program and calculate the result of program and return the result
  var result = "passed";
  if (result === "passed") {
    placementCallback();
  } else {
    console.log(
      "Not qualified for Placement due unsccessfull completion of program"
    );
  }
}

function resultOfPlacement() {
  //fetch the data of placement
  var isplaced = true;
  if (isplaced) {
    console.log("Ask for payment of the program");
  } else {
    console.log("Let him get placed first");
  }
}

resultOfPrecourse(90, 90, 100, function () {
  resultOfTest(function () {
    resultOfProgram(function () {
      resultOfPlacement();
    });
  });
});
