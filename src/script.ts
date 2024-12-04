var clientList: Customer[] = [];
var isEditMode = false;

function getElementById(elementName: string): HTMLInputElement {
  return document.getElementById(elementName) as HTMLInputElement;
}

function buildClientList() {
  let ol: HTMLElement = getElementById("customer-list") as HTMLElement;
  ol.innerHTML = "";
  clientList.forEach((client) => {
    ol.innerHTML += `<li class="list-group-item">${client.getCustomerInfo()} <button type="button" class="btn btn-danger" onclick="showForm();findClient(${
      client.nip
    })">edytuj dane</button></li>`;
  });
}

function callOnSubmit(event: Event): void {
  event.preventDefault();
  let newCustomer = new Customer();
  newCustomer.firmLabel = getElementById("firmLabel").value;
  newCustomer.nip = getElementById("nip").valueAsNumber;
  newCustomer.cityName = getElementById("cityName").value;
  newCustomer.streetName = getElementById("streetName").value;
  newCustomer.houseNumber = getElementById("houseNumber").valueAsNumber;
  newCustomer.apartmentNumber = getElementById("apartmentNumber").valueAsNumber;
  newCustomer.postalcode = getElementById("postalcode").value;
  newCustomer.comments = getElementById("comments").value;
  newCustomer.industry = getElementById("selectLabel").value;
  newCustomer.isActive = getElementById("flexCheckDefault").checked;

  console.log(newCustomer);

  showClientList();

  let flag = false;
  for (let i = 0; i < clientList.length; i++) {
    if (clientList[i].nip == newCustomer.nip) {
      flag = true;
      alert("Klient o podanym NIP już istnieje");
    }
  }
  if (flag == false) {
    clientList.push(newCustomer);
  }

  buildClientList();
}

function findClient(nip: number) {
  let newCustomer = clientList.find((client) => client.nip == nip);
  console.log(newCustomer);
  if (newCustomer == null) {
    newCustomer = new Customer();
  }
  getElementById("firmLabel").value = newCustomer.firmLabel;
  getElementById("nip").valueAsNumber = newCustomer.nip;
  getElementById("cityName").value = newCustomer.cityName;
  getElementById("streetName").value = newCustomer.streetName;
  getElementById("houseNumber").valueAsNumber = newCustomer.houseNumber;
  getElementById("apartmentNumber").valueAsNumber = newCustomer.apartmentNumber;
  getElementById("postalcode").value = newCustomer.postalcode;
  getElementById("comments").value = newCustomer.comments;
  getElementById("selectLabel").value = newCustomer.industry;
  getElementById("flexCheckDefault").checked = newCustomer.isActive;

  getElementById("clientButtons").style.display = "none";
  getElementById("editButtons").style.display = "block";
}

function editClient() {
  let newCustomer = new Customer();
  newCustomer.firmLabel = getElementById("firmLabel").value;
  newCustomer.nip = getElementById("nip").valueAsNumber;
  newCustomer.cityName = getElementById("cityName").value;
  newCustomer.streetName = getElementById("streetName").value;
  newCustomer.houseNumber = getElementById("houseNumber").valueAsNumber;
  newCustomer.apartmentNumber = getElementById("apartmentNumber").valueAsNumber;
  newCustomer.postalcode = getElementById("postalcode").value;
  newCustomer.comments = getElementById("comments").value;
  newCustomer.industry = getElementById("selectLabel").value;
  newCustomer.isActive = getElementById("flexCheckDefault").checked;

  for (let i = 0; i < clientList.length; i++) {
    if (clientList[i].nip == newCustomer.nip) {
      clientList[i] = newCustomer;
    }
  }

  buildClientList();
  showClientList();
}

function showClientList() {
  getElementById("customer-list-div").style.display = "block";
  getElementById("customer-form-div").style.display = "none";
}

function showForm() {
  getElementById("customer-form-div").style.display = "block";
  getElementById("customer-list-div").style.display = "none";
  getElementById("clientButtons").style.display = "block";
  getElementById("editButtons").style.display = "none";
  (document.getElementById("customer-form") as HTMLFormElement).reset();
}

//funkcja dodająca do formularza
function AddTempData() {
  getElementById("firmLabel").value = "xyz";
  getElementById("nip").valueAsNumber = 1234567890;
  getElementById("cityName").value = "Kraków";
  getElementById("streetName").value = "Rakowicka";
  getElementById("houseNumber").valueAsNumber = 2;
  getElementById("apartmentNumber").valueAsNumber = 1;
  getElementById("postalcode").value = "31-034";
  getElementById("comments").value = "brak";
  getElementById("selectLabel").value = "1";
  getElementById("flexCheckDefault").checked = true;
}
