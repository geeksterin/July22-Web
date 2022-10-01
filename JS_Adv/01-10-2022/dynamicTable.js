function createTable() {
  //created all table related elements
  var tableRef = document.createElement("table"); //<table>  </table>
  var theadRef = document.createElement("thead"); //<thead>  </thead>
  var tbodyRef = document.createElement("tbody"); //<tbody>  </tbody>
  var tr1 = document.createElement("tr"); //<tr>  </tr>
  var tr2 = document.createElement("tr"); //>tr>  </tr>
  var tr3 = document.createElement("tr");
  var tr4 = document.createElement("tr");
  var th1 = document.createElement("th"); //<th>   </th>
  var th2 = document.createElement("th"); //<th>   </th>
  var th3 = document.createElement("th"); //<th>   </th>
  var td1 = document.createElement("td");
  var td2 = document.createElement("td");
  var td3 = document.createElement("td");
  var td4 = document.createElement("td");
  var td5 = document.createElement("td");
  var td6 = document.createElement("td");
  var td7 = document.createElement("td");
  var td8 = document.createElement("td");
  var td9 = document.createElement("td");

  //Insert the data
  th1.innerText = "ID"; //<th>  ID </th>
  th2.innerText = "NAME"; //<th>  NAME </th>
  th3.innerText = "CITY"; //<th>  CITY </th>

  tr1.appendChild(th1); // <tr> <th>  ID </th>   </tr>
  tr1.appendChild(th2); // <tr> <th>  ID </th> <th>  NAME </th>  </tr>
  tr1.appendChild(th3); //<tr> <th>  ID </th> <th>  NAME </th> <th>  CITY </th> </tr>

  theadRef.appendChild(tr1); // <thead>  <tr> <th>  ID </th> <th>  NAME </th> <th>  CITY </th> </tr>  </thead>

  td1.innerText = "101"; //<td> 101 </td>
  td2.innerText = "S1"; //<td> S1 </td>
  td3.innerText = "C1"; //<td> C1</td>

  tr2.appendChild(td1); //<tr> <td> 101 </td> </tr>
  tr2.appendChild(td2); //<tr> <td> 101 </td><td> S1 </td> </tr>
  tr2.appendChild(td3); //<tr> <td> 101 </td><td> S1 </td> <td> C1</td> </tr>

  tbodyRef.appendChild(tr2);

  td4.innerText = "102";
  td5.innerText = "S2";
  td6.innerText = "C2";

  tr3.appendChild(td4);
  tr3.appendChild(td5);
  tr3.appendChild(td6);

  tbodyRef.appendChild(tr3);

  td7.innerText = "103";
  td8.innerText = "S3";
  td9.innerText = "C3";

  tr4.appendChild(td7);
  tr4.appendChild(td8);
  tr4.appendChild(td9);

  tbodyRef.appendChild(tr4);

  tableRef.appendChild(theadRef);
  tableRef.appendChild(tbodyRef);
  theadRef.className = "table-dark";
  tableRef.className = "table table-hover secondRowCol";

  document.getElementById("tableCol").appendChild(tableRef);
}
