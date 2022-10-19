function resultOfPrecourse(day1, day2, day3, testR) {
  var result = day1 + day2 + day3;
  if (result >= 270) {
    testR();
  } else {
    console.log("Not allowed for Test due to low attandance");
  }
}

function resultOfTest(id) {
  //fetch the data from database and store data in variable
  var testScore = 80;
  if (testScore >= 60) {
    id();
  } else {
    console.log("Cannot generate id due to low score in test");
  }
}

function getId(f) {
  //fetch all the details of users from db and generate ID
  var studentId = 7890;
  if (studentId != null) {
    //fetch program details

    var result = "completed";
    if (result === "completed") {
      allowPlacement();
    } else {
    }
  } else {
    console.log("not generated bcoz of error");
  }
}

function allowPlacement() {
  //get all placement details
  var isplaced = true;
  if (isplaced) {
    console.log("Ask for payment");
  } else {
    console.log("Need to be placed");
  }
}

resultOfPrecourse(90, 90, 100, function () {
  resultOfTest(function () {
    generateId(function () {
      allowPlacement(function () {});
    });
  });
});
