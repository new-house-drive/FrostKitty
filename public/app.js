const board = document.querySelector('.board');

const header = document.createElement('div')

header.className = 'header'
board.appendChild(header)

const logo1 = document.createElement('div')
const logo2 = document.createElement('div')

logo1.innerHTML = "ZHOOOOOOOOOOOOOOOOOOOOOOOOOPA"
logo2.innerHTML = "ZHOOOOOOOOOOOOOOOOOOOOOOOOOPA"

logo1.className = 'logo-image'
logo2.className = 'logo-image'

header.appendChild(logo1)
header.appendChild(logo2)