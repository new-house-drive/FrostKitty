const board = document.querySelector('.board');

// Header - TOP navigation bar with 3 radio buttons, each
// turning its own interface
// Button XML, button JSON, button CSV
// update: reference files inside the respective formats

const header = document.createElement('div')

header.className = 'header'
board.appendChild(header)

const logo = document.createElement('img')

logo.className = 'logo-image'
logo.src = "kitty-logo.png"
logo.alt = "FrostKitty"

header.appendChild(logo)

const logoTitle = document.createElement('div')
logoTitle.className = 'logo-title'
logoTitle.innerText = "frost\nkitty"

header.appendChild(logoTitle)
//* RADIO BUTTON MENU
// XML radio button
const radioButtonXML = document.createElement('input')
radioButtonXML.setAttribute("type" , "radio")
radioButtonXML.setAttribute("id" , "xml")
radioButtonXML.setAttribute("name", "requestType")
radioButtonXML.setAttribute("value" , "XML")

const radioButtonXMLtitle = document.createElement('label')
radioButtonXMLtitle.setAttribute("for","xml" ) 
radioButtonXMLtitle.innerHTML="XML"

header.appendChild(radioButtonXML)
header.appendChild(radioButtonXMLtitle)

// JSON radiobutton
const radioButtonJSON = document.createElement('input')
radioButtonJSON.setAttribute("type" , "radio")
radioButtonJSON.setAttribute("id" , "json")
radioButtonJSON.setAttribute("name", "requestType")
radioButtonJSON.setAttribute("value" , "JSON")

const radioButtonJSONtitle = document.createElement('label')
radioButtonJSONtitle.setAttribute("for","json" ) 
radioButtonJSONtitle.innerHTML="JSON"

header.appendChild(radioButtonJSON)
header.appendChild(radioButtonJSONtitle)

// CSV radiobutton
const radioButtonCSV = document.createElement('input')
radioButtonCSV.setAttribute("type" , "radio")
radioButtonCSV.setAttribute("id" , "csv")
radioButtonCSV.setAttribute("name", "requestType")
radioButtonCSV.setAttribute("value" , "CSV")

const radioButtonCSVtitle = document.createElement('label')
radioButtonCSVtitle.setAttribute("for","csv" ) 
radioButtonCSVtitle.innerHTML="CSV"

header.appendChild(radioButtonCSV)
header.appendChild(radioButtonCSVtitle)