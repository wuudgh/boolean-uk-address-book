const viewSection = document.querySelector(".view-section");
const contactsSection = document.querySelector(".contacts-section");

const state = {
  contacts: [],
  selectedContact: null
};

/* [START] NO NEED TO EDIT */

function getContacts() {
  fetch("http://localhost:3000/contacts")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      state.contacts = data;

      renderContactsList();
    });
}

function renderContactsList() {
  const listEl = document.createElement("ul");
  listEl.className = "contacts-list";

  for (let i = 0; i < state.contacts.length; i++) {
    const contact = state.contacts[i];
    const listItemEl = renderContactListItem(contact);

    listEl.append(listItemEl);
  }

  contactsSection.append(listEl);
}

function renderAddressSection(address) {
  const containerEl = document.createElement("section");

  const headingEl = document.createElement("h2");
  headingEl.innerText = "Address";

  containerEl.append(headingEl);

  const streetText = document.createElement("p");
  streetText.innerText = address.street;

  containerEl.append(streetText);

  const cityText = document.createElement("p");
  cityText.innerText = address.city;

  containerEl.append(cityText);

  const postCodeText = document.createElement("p");
  postCodeText.innerText = address.postCode;

  containerEl.append(postCodeText);

  return containerEl;
}

function renderContactView() {
  const contact = state.selectedContact;

  if (!contact) return;

  viewSection.innerHTML = "";

  const containerEl = document.createElement("article");
  containerEl.className = "center light-shadow address-card";

  const headingEl = document.createElement("h1");

  const fullName = `${contact.firstName} ${contact.lastName}`;
  headingEl.innerText = fullName;

  containerEl.append(headingEl);

  const addressSectionEl = renderAddressSection(contact.address);

  containerEl.append(addressSectionEl);

  viewSection.append(containerEl);
}

/* [END] NO NEED TO EDIT */

function renderContactListItem(contact) {
  const listItemEl = document.createElement("li");

  const headingEl = document.createElement("h3");

  const fullName = `${contact.firstName} ${contact.lastName}`;

  headingEl.innerText = fullName;

  listItemEl.append(headingEl);

  const viewBtn = document.createElement("button");
  viewBtn.className = "button grey";
  viewBtn.innerText = "View";

  viewBtn.addEventListener("click", function () {
    state.selectedContact = contact;

    renderContactView();
  });

  listItemEl.append(viewBtn);

  const editBtn = document.createElement("button");
  editBtn.className = "button blue";
  editBtn.innerText = "Edit";

  editBtn.addEventListener("click", function () {
    // [TODO] Write Code
  });

  listItemEl.append(editBtn);

  return listItemEl;
}

function listenNewContactButton() {
  const btn = document.querySelector(".new-contact-btn");

  btn.addEventListener("click", function () {
    // [TODO] Write Code
    renderform()
  });
}

// [TODO] Write Code

function main() {
  listenNewContactButton();
  getContacts();
}

main();
function renderform(){
 //const mainEl = document.querySelector("main");
 viewSection.innerHTML = "";

 //const contactForm = document.querySelector("form-stack light-shadow center contact-form");
 const contactFormEl = document .createElement("form")
 contactFormEl.className = "form-stack light-shadow center contact-form"
 viewSection.append(contactFormEl);

 const h1El = document.createElement("h1")
 h1El.innerText = "Create Contact";
 contactFormEl.append(h1El)

 const firstNameEl = document.createElement("label")
 firstNameEl.for = "first-name-input";
 firstNameEl.innerText = "First Name:";
 contactFormEl.append(firstNameEl);

 const inputEl = document.createElement("input");
  inputEl.id = "first-name-input";
  inputEl.name = "first-name-input";
  inputEl.text = "text";
  contactFormEl.append(inputEl);

 const lastNameEl = document.createElement("label");
 lastNameEl.for = "last-name-input";
 lastNameEl.innerText = "LastName:";
 contactFormEl.append(lastNameEl);

 const inputLastName = document.createElement("input");
 inputLastName.id = "last-name-input";
 inputLastName.name = "last-name-input";
 inputLastName.text = "text";
 contactFormEl.append(inputLastName);

 const streetEl = document.createElement("label");
 streetEl.for = "city-input";
 streetEl.innerText = "Street:";
 contactFormEl.append(streetEl);

 const inputStreetEl = document.createElement("input");
 inputStreetEl.id = "street-input";
 inputStreetEl.name = "street-input";
 inputStreetEl.text = "text";
 contactFormEl.append(inputStreetEl);

 const cityEl = document.createElement("label");
 cityEl.for = "city-input";
 cityEl.innerText = "City:";
 contactFormEl.append(cityEl);

 const inputCityEl = document.createElement("input");
 inputCityEl.id = "city-input";
 inputCityEl.name = "ciyy-input";
 inputCityEl.type = "type";
 contactFormEl.append(inputCityEl);

 const postCodeEl = document.createElement("label");
 postCodeEl.for = "post-code-input";
 postCodeEl.innerText = "Post Code:";
 contactFormEl.append(postCodeEl);

 const inputPostCode = document.createElement("input");
 inputCityEl.id = "post-code-input";
 inputPostCode.name = "post-code-input";
 inputPostCode.tect = "text";
 contactFormEl.append(inputPostCode);

 const divEl = document.createElement("div");
 divEl.class = "checkbox-section";
 contactFormEl.append(divEl);

 const checkBoxEl = document.createElement("label");
 checkBoxEl.setAttribute("for", "checkbox");
 checkBoxEl.innerText = "Block";
 checkBoxEl.setAttribute("type", "block-checkbox");
 divEl.append(checkBoxEl);
 

 const inputDiv = document.createElement("input");
 inputDiv.id = "block-checkbox";
 inputDiv.name = "block-checkbox";
 divEl.append(inputDiv);

 

 const divEl1 = document.createElement("div");
 divEl1.className = "actions-section";
 contactFormEl.append(divEl1);

 const buttonEl = document.createElement("button");
 buttonEl.className = "button blue";
 buttonEl.type = "submit";
 buttonEl.innerText = "Create";
 divEl1.append(buttonEl);

 
 

 contactFormEl.addEventListener("submit", function (event) {
  event.preventDefault();
  //const firstEl = inputEl.value;
  //const lastEl = inputLastName.value;
  //const streetEl = inputStreetEl.value;
  //const cityEl = inputCityEl.value;
  //const postCodeEL = inputPostCode.value;
  //const blockEl = inputDiv.checked;
  //const addressId = state.contacts.length+1
  const newContact = {
    "firstName": inputEl.value,
      "lastName": inputLastName.value,
      "blockContact": inputDiv.checked,
      addresses: {
        "street": inputStreetEl.value,
      "city": inputCityEl.value,
      "postCode": inputPostCode.value,
      }
  }
  addContact(newContact)
 })
}
function addContact(contact){
  console.log(contact)
  let addressId;
  fetch("http://localhost:3000/addresses", {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(contact.address)
  })
  .then(function (response) {
    return response.json()
  })
  .then(function (value) {
    //console.log(value,"value")
    //const myValue = JSON.parse(value)
    const addressId =  value.id
    const contactInfo = {
      "firstName": contact.firstName,
      "lastName": contact.lastName,
      "blockContact": contact.blockContact,
      "addressId": addressId

    }
    fetch("http://localhost:3000/contacts", {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(contactInfo)

    })
    .then(function (response) {
      return response.json()
    })
    .then(function (value){
      getContacts();
    })


    // do something with the people data here
  })
}
//function fetchContactInfo(firstEl,lastEl,streetEl,cityEl,postCodeEL,blockEl,addressId)
//{

//}
/*function addContact(contact){
  console.log(contact)
  let addressId;
  fetch("http://localhost:3000/addresses", {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(contact.addresses)
  })
  .then(function (response) {
    return response.json()
  })
  .then(function (value) {
    //console.log(value,"value")
    //const myValue = JSON.parse(value)
    const addressId =  value.id
    const contactInfo = {
      "firstName": contact.firstName,
      "lastName": contact.lastName,
      "blockContact": contact.blockContact,
      "addressId": addressId

    }
    fetch("http://localhost:3000/contacts", {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(contactInfo)

    })
    .then(funtion(response) { 
      return response.json()
    })
    .then(function (value){
      getContacts()
    })
    

    // do something with the people data here
  })
 
 
   
}*/