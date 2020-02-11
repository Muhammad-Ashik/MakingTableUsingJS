// 1. Create the button
var button = document.createElement("button");
button.innerHTML = "Click here to create a table";
// 2. Append somewhere
var body = document.getElementsByTagName("body")[0];
body.appendChild(button);

// 3. Add event handler
button.addEventListener("click", generate_table);

function generate_table() {
  //find all the specific tag which is body and then tries to get the first entry from the resulting list
  let body = document.getElementsByTagName("body")[0];

  let table = document.createElement("table");
  let tbody = document.createElement("tbody");
  for (let i = 1; i < 5; i++) {
    let row = document.createElement("tr");
    for (let j = 1; j < 5; j++) {
      let cell = document.createElement("td");
      let cellText = document.createTextNode(
        "This is the text in column " + j + " in row " + i
      );
      cell.appendChild(cellText);
      row.appendChild(cell);
    }
    tbody.appendChild(row);
  }
  table.appendChild(tbody);
  body.appendChild(table);
  table.setAttribute("border", "2");
}
