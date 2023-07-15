const board = document.querySelector('.board');
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