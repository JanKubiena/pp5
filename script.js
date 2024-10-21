function callOnSubmit(event) {
  event.preventDefault();
  let formObject = {
    name: document.getElementById("firmLabel").value,
    nip: document.getElementById("nip").value,
    cityName: document.getElementById("cityName").value,
    streetName: document.getElementById("streetName").value,
    houseNumber: document.getElementById("houseNumber").value,
    apartmentNumber: document.getElementById("apartmentNumber").value,
    postalcode: document.getElementById("postalcode").value,
    uwagiLabel: document.getElementById("uwagiLabel").value,
    selectLabel: document.getElementById("selectLabel").value,
    flexCheckDefault: document.getElementById("flexCheckDefault").checked,
  };
  console.log(formObject);
}

//funkcja dodająca do formularza
function AddTempData() {
  document.getElementById("firmLabel").value = "koksownia";
  document.getElementById("nip").value = 1234567890;
  document.getElementById("cityName").value = "Kraków";
  document.getElementById("streetName").value = "Rakowicka";
  document.getElementById("houseNumber").value = 2;
  document.getElementById("apartmentNumber").value = 1;
  document.getElementById("postalcode").value = "31-034";
  document.getElementById("uwagiLabel").value = "brak";
  document.getElementById("selectLabel").value = "1";
  document.getElementById("flexCheckDefault").checked = true;
}
