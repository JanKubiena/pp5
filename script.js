var clientList = [];
var isEditMode = false;

function buildClientList(clientList) {
  document.getElementById("customer-list").innerHTML = "";
  clientList.forEach((v, i) => {
    let listElement = document.createElement("li");
    listElement.classList.add("list-group-item");
    listElement.id = `client-list-element-${i}`;
    if (isEditMode) {
      document.getElementById("customer-list").appendChild(listElement);
      const input = document.createElement("input");
      input.classList.add("form-control");
      input.type = "text";
      input.value = v;
      input.setAttribute("data-index", i);
      document.getElementById(`client-list-element-${i}`).appendChild(input);
    } else {
      let elementText = document.createTextNode(v);
      listElement.appendChild(elementText);
      document.getElementById("customer-list").appendChild(listElement);
    }
  });
}

function toggleEditMode() {
  const editButton = document.getElementById("editButton");

  if (isEditMode) {
    saveChanges();
    editButton.textContent = "Edytuj";
  } else {
    editButton.textContent = "Zapisz";
  }

  isEditMode = !isEditMode;
  buildClientList(clientList);
}

function saveChanges() {
  const inputs = document.querySelectorAll("#customer-list > li > input");

  inputs.forEach((input) => {
    const index = input.getAttribute("data-index");
    clientList[index] = input.value;
  });
}

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

  showClientList();

  clientList.push(`${formObject["name"]}`);
  buildClientList(clientList);
}

function showClientList() {
  document.getElementById("customer-list-div").style.display = "block";
  document.getElementById("customer-form-div").style.display = "none";
}

function showForm() {
  document.getElementById("customer-form-div").style.display = "block";
  document.getElementById("customer-list-div").style.display = "none";
  document.getElementById("customer-form").reset();
}

//funkcja dodająca do formularza
function AddTempData() {
  document.getElementById("firmLabel").value = "xyz";
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
