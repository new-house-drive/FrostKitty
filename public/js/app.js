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
}

//* XML only buttons behaviour!
document.querySelector("#get-xml-button").onclick = () => {
  // Essential information
  const inputShopname = document.getElementById("input-shopname").value;
  const inputPassword = document.getElementById("input-password").value;
  const inputLang = document.getElementById("input-lang").value;

  // Product Identifiers
  const inputIcecatID = document.getElementById("input-icecat-id").value;
  const inputBrand = document.getElementById("input-brand").value;
  const inputMPN = document.getElementById("input-mpn").value;
  const inputGTIN = document.getElementById("input-gtin").value;

  // Product Identifiers Wrong Condition
  if (!inputIcecatID && !inputGTIN) {
    if (!inputMPN || !inputBrand) {
      alert("Please use GTIN, ID or Brand + MPN pair to get the product");
      return;
    }
  }
};

document.querySelector("#show-password-btn").onclick = () => {
  let inputPassword = document.querySelector('#input-password')
  if (inputPassword.type === 'password') {
    inputPassword.type = 'text'
    return
  }
  inputPassword.type = 'password'
}

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

  const jsonOnlyDivsList = document.querySelectorAll(".json-only");
  for (let div of jsonOnlyDivsList) div.style.display = "inherit";

  // INT language fix
  let inputLang = document.querySelector('#input-lang')
  if (inputLang.value === 'INT') inputLang.selectedIndex = 1
}

//* JSON only buttons behaviour!
document.querySelector("#get-json-button").onclick = () => {
  // Essential information
  const inputShopname = document.getElementById("input-shopname").value;
  const inputLang = document.getElementById("input-lang").value;
  const inputAppKey = document.getElementById("input-app-key").value;

  // Product Identifiers
  const inputIcecatID = document.getElementById("input-icecat-id").value;
  const inputBrand = document.getElementById("input-brand").value;
  const inputMPN = document.getElementById("input-mpn").value;
  const inputGTIN = document.getElementById("input-gtin").value;

  // Product Identifiers Wrong Condition
  if (!inputIcecatID && !inputGTIN) {
    if (!inputMPN || !inputBrand) {
      alert("Please use GTIN, ID or Brand + MPN pair to get the product");
      return;
    }
  }

  let url = constructJSONLink(
    inputShopname,
    inputAppKey,
    inputIcecatID,
    inputLang,
    inputGTIN,
    inputMPN,
    inputBrand
  );
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

//* One-to-rule-them-all JSON function.
// input -> all fields from product form for JSON
// Checks all the fields and add input as attributes
// output -> link to Icecat Live JSOn
function constructJSONLink(
  shopname,
  appkey,
  icecat_id,
  lang,
  gtin,
  mpn,
  brand,
  content
) {
  const DOMAIN = `https://live.icecat.biz/api?`;

  shopname = shopname || "openicecat-live";
  let url = DOMAIN + `shopname=${shopname}&`;

  if (appkey) url += `app-key=${appkey}&`;
  if (icecat_id) url += `icecat_id=${icecat_id}&`;
  if (gtin) url += `GTIN=${gtin}&`;
  if (brand) url += `Brand=${brand}&`;
  if (mpn) url += `ProductCode=${mpn}&`;

  url += `lang=${lang}`;

  console.log("Your link is: " + url);

  let granularList = getGranularOptionsList();

  if (!granularList) return url;

  url += "&content=" + granularList.toString();
  return url;
}

//* to be used inside constructJSON link
// no input
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
