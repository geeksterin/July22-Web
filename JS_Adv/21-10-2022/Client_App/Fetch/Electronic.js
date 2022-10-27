function getData() {
  //method type: get
  //api or url : https://fakestoreapi.com/products
  //data-formar : optional in this case

  fetch("https://fakestoreapi.com/products")
    .then(
      function (res) {
        console.log(res.json);
        return res.json();
      },
      function (err) {
        console.log(err);
      }
    )
    .then(
      function (actualData) {
        document.getElementById("datarow").style.display = "block";
        var tbody = document.getElementById("tbody");
        console.log(actualData);
        actualData.forEach(function (ele) {
          var tr = document.createElement("tr");
          var td1 = document.createElement("td");
          var td2 = document.createElement("td");
          var td21 = document.createElement("td");
          var td3 = document.createElement("td");
          var img = document.createElement("img");

          tr.appendChild(td1);
          tr.appendChild(td2);
          tr.appendChild(td21);
          tr.appendChild(td3);
          td1.appendChild(img);
          img.src = ele.image;
          img.width = "100";
          img.height = "100";
          td2.innerText = ele.title;
          td21.innerText = ele.category;
          td3.innerText = "Rs. " + ele.price;
          tbody.appendChild(tr);
        });
      },
      function (err) {
        console.log(err);
      }
    );
}
