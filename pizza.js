function placeOrder() {
  let crust = document.querySelector('input[name="crust"]:checked');
  let size = document.querySelector('input[name="size"]:checked');
  let toppings = document.querySelectorAll('input[type="checkbox"]:checked');
  let phone = document.getElementById("phone").value;

  if (!crust || !size || phone === "") {
    alert("Please fill in all required fields.");
    return;
  }

  let toppingsList = Array.from(toppings)
    .map((t) => t.value)
    .join(", ");
  document.getElementById("order-summary").innerHTML = `
          <strong>Pizza Order</strong><br>
          Size: ${size.value} &nbsp;&nbsp; Crust Type: ${crust.value}<br>
          Toppings: ${toppingsList || "None"}<br>
          Your Phone Number: ${phone}
      `;
}

function clearForm() {
  document
    .querySelectorAll('input[type="radio"], input[type="checkbox"]')
    .forEach((input) => (input.checked = false));
  document.getElementById("phone").value = "";
  document.getElementById("order-summary").innerHTML = "";
}
