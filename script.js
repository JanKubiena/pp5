function callOnSubmit(event) {
    event.preventDefault();
    let formObject = {
        "name": document.getElementById("firmLabel").value,
        "nip": document.getElementById("nip").value,
        "cityName": document.getElementById("cityName").value,
        "streetName": document.getElementById("streetName").value,
        "houseNumber": document.getElementById("houseNumber").value,
        "apartmentNumber": document.getElementById("apartmentNumber").value,
        "postalcode": document.getElementById("postalcode").value,
        "uwagiLabel": document.getElementById("uwagiLabel").value,
        "selectLabel": document.getElementById("selectLabel").value,
        "flexCheckDefault": document.getElementById("flexCheckDefault").checked
    };
    console.log(formObject);
  }

  //funkcja dodająca do formularza


  
