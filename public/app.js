const board = document.querySelector('.board');

const header = document.createElement('div')

header.className = 'header'
header.innerHTML = "Modified long way to go!"

board.innerHTML = "Modified long way to go!"
board.appendChild(header)

console.log("why are you running?")