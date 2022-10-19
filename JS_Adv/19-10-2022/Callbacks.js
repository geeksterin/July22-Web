function resultOfPrecourse(day1, day2, day3, testCallback) {
  // me
  var studentAttandance = day1 + day2 + day3;
  if (studentAttandance >= 270) {
    console.log("Student Allowed to Give Exam");
    testCallback();
  } else {
    console.log("Not qualified for the Exam");
  }
}

function resultOfTest(FSDCallback) {
  //fetch the data of result from database //300
  var testScore = 80;
  if (testScore >= 60) {
    console.log("Qualified for FSDPRogram");
    FSDCallback();
  } else {
    console.log("Not Qualified for FSDPRogram due to low score in the test");
  }
}

function resultOfFSDProgram(placementCallback) {
  // fetched all the details of user + fetched all the details of program and caluclate //500
  var result = "passed";
  if (result === "passed") {
    console.log("Allow for Placement to the Student");
    placementCallback();
  } else {
    console.log(
      "Student not allowed for Placement due to  not qualified in FSDProgram"
    );
  }
}

function resultOfPlacement() {
  //fetch the details of all the company that he applied for and results  //200
  var isPlaced = true;
  if (isPlaced) {
    console.log("Ask for FSDProgram Payment"); //50 //25 //ask
  } else {
    console.log("Let Him get Placed First");
  }
}

resultOfPrecourse(100, 120, 120, function () {
  //nested 3 //nested 30 50
  resultOfTest(function () {
    resultOfFSDProgram(function () {
      resultOfPlacement();
    });
  });
});

// Scenario 1 : 100,120,120
