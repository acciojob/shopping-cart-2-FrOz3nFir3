//your code here
var itemName = document.getElementById("item-name-input");
var itemPrice = document.getElementById("item-price-input");

var tbody = document.querySelector("tbody");

var grandTotal = document.getElementById("total");
var totalSoFar = 0;

var addItem = document.querySelector("#add");

addItem.addEventListener("click", (event) => {
  // otherwise it will submit the form
  event.preventDefault();
  // invalid values
  var nameValue = itemName.value.trim();
  var priceValue = itemPrice.value;
  if (nameValue.length == 0 || itemPrice <= 0) return;

  let newRow = document.createElement("tr");

  let name = document.createElement("td");
  name.innerText = itemName.value;
  name.classList.add("item");
  name.setAttribute("data-ns-test", nameValue);

  newRow.append(name);

  let price = document.createElement("td");
  price.innerText = itemPrice.value;
  price.setAttribute("data-ns-test", priceValue);

  newRow.append(price);

  // is valid item
  if (itemName.value && itemPrice.value) {
    let total = document.createElement("td");
    total.innerText = priceValue;

    tbody.append(newRow);

    totalSoFar += Number(total.innerText);
    grandTotal.innerText = totalSoFar;
  }

  // reset
  itemName.value = "";
  itemPrice.value = "";
});
