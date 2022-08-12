//using indexof() and includes() can we find a certain element present in array or not
var arr = ["Apple", "Oppo", "Oneplus", "Micromax"];

function findElement(elementName) {
  //   var status = arr.indexOf(elementName);

  //   if (status == -1) {
  //     console.log(elementName, "does not exist in the given array");
  //   } else {
  //     console.log(elementName, " exist in the given array");
  //   }
  //   var status = arr.includes(elementName);

  if (arr.includes(elementName)) {
    console.log("Present");
  } else {
    console.log("Not Present");
  }
}

findElement("apple"); //  Not Present
findElement("Apple"); // Present
findElement("Geekster"); //Not Present
