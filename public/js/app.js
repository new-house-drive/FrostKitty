

// const viewJSONButton = document.getElementById('view-JSON')
// viewJSONButton.onclick = () => {
//   document.querySelector('.view-json').setAttribute('display', 'relative')
  
//   document.querySelector('.view-xml').setAttribute('display', 'none')
//   document.querySelector('.view-csv').setAttribute('display', 'none')
// }

//* Behaviour on JSON button clicked.
document.getElementById('view-XML-button').onclick = () => {
  document.querySelector('.view-xml').setAttribute('display', 'relative')
  
  document.querySelector('.view-json').style.display = 'none'
  // document.querySelector('.view-csv').setAttribute('display', 'none')

  document.querySelector('#dropdown-int').style.display = 'inherit'
}

// const viewCSVButton = document.getElementById('view-CSV')
// viewCSVButton.onclick = () => {
//   document.querySelector('.view-csv').setAttribute('display', 'relative')

//   document.querySelector('.view-xml').setAttribute('display', 'none')
//   document.querySelector('.view-json').setAttribute('display', 'none')
// }


document.querySelector(".get-json-button").onclick = () => {
    // Essential information
    const inputShopname = document.getElementById("input-shopname").value
    const inputLang = document.getElementById('input-lang').value
    const inputAppKey = document.getElementById('input-app-key').value
    
    // Product Identifiers
    const inputIcecatID = document.getElementById("input-icecat-id").value
    const inputBrand = document.getElementById('input-brand').value
    const inputMPN = document.getElementById('input-mpn').value
    const inputGTIN = document.getElementById('input-gtin').value

    // Product Identifiers Wrong Condition
    if (!inputIcecatID && !inputGTIN) {
      if (!inputMPN || !inputBrand) {
        alert ('Please use GTIN, ID or Brand + MPN pair to get the product')
        return
      }
    }


    let url = constructJSONLink(inputShopname, inputAppKey, inputIcecatID, inputLang, inputGTIN, inputMPN, inputBrand)
    window.open(url, '_blank') 
};

document.querySelector('#granular-select-all').onclick = () => {

  const checkboxesList = document.querySelectorAll(".granular-checkbox")
  for (checkbox of checkboxesList) checkbox.checked = true
}

document.querySelector('#granular-remove-all').onclick = () => {
  const checkboxesList = document.querySelectorAll(".granular-checkbox")
  for (checkbox of checkboxesList) checkbox.checked = false
}
//* One-to-rule-them-all JSON function.
// input -> all fields from product form for JSON
// Checks all the fields and add input as attributes
// output -> link to Icecat Live JSOn
function constructJSONLink(shopname, appkey, icecat_id, lang, gtin, mpn, brand, content) {
    const DOMAIN = `https://live.icecat.biz/api?`     
    
    shopname = shopname || "openicecat-live"
    let url = DOMAIN + `shopname=${shopname}&`

    if (appkey) url += `app-key=${appkey}&`    
    if (icecat_id) url+= `icecat_id=${icecat_id}&`
    if (gtin) url+=`GTIN=${gtin}&`
    if (brand) url+=`Brand=${brand}&`
    if (mpn) url +=`ProductCode=${mpn}&`
    
    url += `lang=${lang}`;

    console.log("Your link is: " + url)

    let granularList = getGranularOptionsList()

    if(!granularList) return url;

    url += "&content=" + granularList.toString()
    return url
  
  }

//* to be used inside constructJSON link
// no input
// output [selected, granular, checkboxes]
function getGranularOptionsList() {
  let granularOptionsList = []
  let checkboxesList = document.querySelectorAll(".granular-checkbox")
  
  for (checkbox of checkboxesList) {
    if (checkbox.checked) {
      granularOptionsList.push(checkbox.value)
      console.log(checkbox)
    }
  }

  return granularOptionsList
}