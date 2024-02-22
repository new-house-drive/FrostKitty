"use strict";
window.onload = createDefaultXMLview();

//*TOP navbar onclick events
document.querySelector("#view-XML-button").onclick = () => {
  // Showing all XML-only divs
  createDefaultXMLview();
};

document.querySelector("#view-JSON-button").onclick = () => {
  createJSONview();
};

document.querySelector("#view-CSV-button").onclick = () => {
  const topNavBar = document.querySelector(".top-nav-bar");
  updateElementClassName(topNavBar, "top-csv-selected");

  const topButtonsList = document.querySelectorAll(".top-nav-btn");
  for (let button of topButtonsList) {
    updateElementClassName(button, "button-csv-selected");
  }

  const xmlCsvOnlyDivsList = document.querySelectorAll(".xml-csv-only");
  for (let div of xmlCsvOnlyDivsList) div.style.display = "inherit";
  const csvOnlyDivsList = document.querySelectorAll(".csv-only");
  for (let div of csvOnlyDivsList) div.style.display = "inherit";

  // Hiding all JSON only and XML only options
  const jsonOnlyDivsList = document.querySelectorAll(".json-only");
  for (let div of jsonOnlyDivsList) div.style.display = "none";
  const xmlOnlyDivsList = document.querySelectorAll(".xml-only");
  for (let div of xmlOnlyDivsList) div.style.display = "none";
};

//TODO: Leave only JSON view! REWRITE ALL IN REACT!
//* Behaviour on top-nav XML button clicked.
// Also default view onload
function createDefaultXMLview() {
  // Working on color scheme
  // topNavBar and three respective buttons and their hovers
  //TODO: add smoothness
  const topNavBar = document.querySelector(".top-nav-bar");
  updateElementClassName(topNavBar, "top-xml-selected");

  const topButtonsList = document.querySelectorAll(".top-nav-btn");
  for (let button of topButtonsList) {
    updateElementClassName(button, "button-xml-selected");
  }

  const xmlOnlyDivsList = document.querySelectorAll(".xml-only");
  for (let div of xmlOnlyDivsList) div.style.display = "inherit";
  const xmlCsvOnlyDivsList = document.querySelectorAll(".xml-csv-only");
  for (let div of xmlCsvOnlyDivsList) div.style.display = "inherit";

  // Hiding all JSON only and CSV only options
  const jsonOnlyDivsList = document.querySelectorAll(".json-only");
  for (let div of jsonOnlyDivsList) div.style.display = "none";
  const csvOnlyDivsList = document.querySelectorAll(".csv-only");
  for (let div of csvOnlyDivsList) div.style.display = "none";
}

//* XML only buttons behaviour!
document.querySelector("#get-xml-button").onclick = () => {
  let userInput = createUserInput("XML");

  let { id, gtin, mpn, brand} = userInput

  id = id.trim()
  gtin = gtin.trim()
  mpn = mpn.gtin()
  brand = brand.trim()

  // Product Identifiers Wrong Condition
  if (
    !id ||
    !gtin ||
    (!mpn || !brand)
  ) {
    alert("Please use GTIN, ID or Brand + MPN pair to get the product");
    return;
  }

  let url = constructLink("XML_s3")(userInput);
  window.open(url, "_blank");
};

document.querySelector("#get-xml-fo-button").onclick = () => {
  let userInput = createUserInput("XML");
  if (!userInput.id) {
    alert("You must enter ID for this request!💀");
    return;
  }

  let url = constructLink("XML_by_ID")(userInput);
  window.open(url, "_blank");
};

document.querySelector("#show-password-btn").onclick = () => {
  let inputPassword = document.querySelector("#input-password");
  if (inputPassword.type === "password") {
    inputPassword.type = "text";
    return;
  }
  inputPassword.type = "password";
};

//* Behaviour on top-nav JSON button clicked!
function createJSONview() {
  // UPDATE COLOR SCHEME
  const topNavBar = document.querySelector(".top-nav-bar");
  updateElementClassName(topNavBar, "top-json-selected");

  const topButtonsList = document.querySelectorAll(".top-nav-btn");
  for (let button of topButtonsList) {
    updateElementClassName(button, "button-json-selected");
  }
  // Hide XML, XML-CSV and CSV divs
  const xmlOnlyDivsList = document.querySelectorAll(".xml-only");
  for (let div of xmlOnlyDivsList) div.style.display = "none";
  const xmlCSVOnlyDivsList = document.querySelectorAll(".xml-csv-only");
  for (let div of xmlCSVOnlyDivsList) div.style.display = "none";
  const csvOnlyDivsList = document.querySelectorAll(".csv-only");
  for (let div of csvOnlyDivsList) div.style.display = "none";

  const jsonOnlyDivsList = document.querySelectorAll(".json-only");
  for (let div of jsonOnlyDivsList) div.style.display = "inherit";

  // INT language fix
  let inputLang = document.querySelector("#input-lang");
  if (inputLang.value === "INT") inputLang.selectedIndex = 1;
}

//* JSON only buttons behaviour!
document.querySelector("#get-json-button").onclick = () => {
  let userInput = createUserInput("JSON");
  let { id, gtin, mpn, brand} = userInput

  id = id.trim()
  gtin = gtin.trim()
  mpn = mpn.trim()
  brand = brand.trim()

  if (
    !id ||
    !gtin ||
    (!mpn || !brand)
  ) {

    console.log(id)
    console.log(!id)
    alert("Please use GTIN, ID or Brand + MPN pair to get the product");
    return;
  }

  let url = constructLink("JSON")(userInput);
  window.open(url, "_blank");
};

document.querySelector("#granular-select-all").onclick = () => {
  let checkboxesList = document.querySelectorAll(".granular-checkbox");
  for (let checkbox of checkboxesList) checkbox.checked = true;
};

document.querySelector("#granular-remove-all").onclick = () => {
  const checkboxesList = document.querySelectorAll(".granular-checkbox");
  for (let checkbox of checkboxesList) checkbox.checked = false;
};

//* to be used inside constructJSON link
//TODO: separate into external JS along with constructLink!
//TODO: make it private!
// output [selected, granular, checkboxes]
function getGranularOptionsList() {
  let granularOptionsList = [];
  let checkboxesList = document.querySelectorAll(".granular-checkbox");

  for (let checkbox of checkboxesList) {
    if (checkbox.checked) {
      granularOptionsList.push(checkbox.value);
      console.log(checkbox);
    }
  }

  return granularOptionsList;
}

//* CSV FUNCTIONS
document.querySelector("#get-csv-button").onclick = () => {
  let userInput = createUserInput("CSV");
  let url = constructLink("XML_s3")(userInput);

  window.open(url, "_blank");
};

//* COMMON FUNCTIONS
document.querySelector("#input-clear-all-button").onclick = () => {
  let inputsList = document.querySelectorAll(".input-form-field");

  for (let input of inputsList) input.value = "";
};

//* HELPER FUNCTIONS
//! BY defaulf deletes 2nd class for the sake of simplicity!
function updateElementClassName(element, newClassName) {
  const selected = element.classList[1];
  if (selected === newClassName) return;

  if (selected) {
    element.classList.remove(selected);
    element.classList.add(newClassName);
  }
  return element;
}

/*  CLASS USERINPUT
  *Universal function to handle three types of requests
  DEFAULT: shopname, language, id, mpn, brand, gtin
  XML: + password and output
  JSON: + app_key
  CSV: + password and output
*/
function createUserInput(type) {
  const inputShopname = document.getElementById("input-shopname").value.trim();
  const inputLang = document.getElementById("input-lang").value.trim();
  // TODO: If the value starts with whitespace, the value is empty string
  const inputIcecatID = document.getElementById("input-icecat-id").value.trim();
  const inputBrand = document.getElementById("input-brand").value.trim();
  const inputMPN = document.getElementById("input-mpn").value.trim();
  const inputGTIN = document.getElementById("input-gtin").value.trim();

  let userInput = {
    shopname: inputShopname,
    language: inputLang,
    id: inputIcecatID,
    brand: inputBrand,
    mpn: inputMPN,
    gtin: inputGTIN,
  };

  if (type === "XML" || type === "CSV") {
    userInput.password = document.getElementById("input-password").value;
  }

  if (type === "XML") {
    for (let radioButton of document.getElementsByName("xml-output")) {
      if (radioButton.checked) userInput.output = radioButton.id;
    }
  }

  if (type === "CSV") {
    userInput.output = "productcsv";
  }

  if (type === "JSON") {
    userInput.appkey = document.getElementById("input-app-key").value;
  }

  return userInput;
}


// FACTORY FUNCTION FOR ALL TYPES OF REQUESTS
// TO CREATE A LINK ON USER UI
//? Options: XML_s3, XML_by_ID, JSON
//TODO: Separate into external JS!
// Can be adlusted as many times as required.
// No Longer we require to create a new function
// with a new name every button. 
function constructLink(type) {
  if (type === "XML_s3") {
    return function (userInput) {
      let domain = "https://data.icecat.biz/xml_s3/xml_server3.cgi?";
      if (userInput.shopname && userInput.password) {
        domain = `https://${userInput.shopname}:${userInput.password}@data.icecat.biz/xml_s3/xml_server3.cgi?`;
      }

      let url = domain + `lang=${userInput.language}&`;

      if (userInput.id) url += `icecat_id=${userInput.id.trim()}&`;
      if (userInput.brand) url += `vendor=${userInput.brand.trim()}&`;
      if (userInput.mpn) url += `prod_id=${userInput.mpn.trim()}&`;
      if (userInput.gtin) url += `ean_upc=${userInput.gtin.trim()}&`;
      if (userInput.output) url += `output=${userInput.output.trim()}`;

      return url;
    };
  }
  if (type === "JSON") {

    return function (userInput) {
      let domain = "https://live.icecat.biz/api?";
      

      let url = domain + `lang=${userInput.language}&`;

      if (userInput.shopname) url += 'shopname=' + userInput.shopname + '&';
      if (userInput.shopname) url += 'app_key=' + userInput.appkey + '&';
      if (userInput.id) url += `icecat_id=${userInput.id}&`;
      if (userInput.brand) url += `Brand=${userInput.brand}&`;
      if (userInput.mpn) url += `ProductCode=${userInput.mpn}&`;
      if (userInput.gtin) url += `GTIN=${userInput.gtin}&`;

      url += 'content=' + getGranularOptionsList().toString()

      return url;
    };
  }

  if (type === "XML_by_ID") {
    return function (userInput) {
      let domain = "https://icecat.biz/";

      if (userInput.shopname && userInput.password) {
        domain = `https://${userInput.shopname}:${userInput.password}@icecat.biz/`;
      }

      let url = domain + userInput.language + "/xml?";
      url += `productId=${userInput.id}`;

      return url;
    };
  }
}
