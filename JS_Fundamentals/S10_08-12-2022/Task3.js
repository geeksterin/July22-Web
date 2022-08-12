// WAF to print each and every element of array by appending brand word on element

var arr = ["Apple", "Oppo", "Oneplus", "Micromax"];
//Apple Brand
//Oppo Brand
//Oneplus Brand
//Micrmax Brand

//   for(var i=0;i<arr.length;i++){
//    console.log(arr[i] + "Brand")
//   }

arr.forEach(function (element, index) {
  console.log(element + " Brand");
});
