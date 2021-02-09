document.addEventListener('DOMContentLoaded', () => {
    const grid = document.querySelector('.grid')
    const width = 8
    const squares = []

    const candyColors = 
        [
        'red',
        'yellow',
        'orange',
        'purple',
        'green',
        'blue'
        ]

function createBoard() {
for (let i = 0; i <width*width; i++) {
    const square = document.createElement('div');
    square.setAttribute('draggable', true)
    square.setAttribute('id', i)
    let randomColor = Math.floor(Math.random()*candyColors.length)
    square.style.backgroundColor = candyColors[randomColor]
    grid.appendChild(square)
    squares.push(square)
}

 }
createBoard()

// drag the candies
let colorBeingDragged
let colorBeingReplaced
let idBeingDragged


squares.forEach(square => square.addEventListener('dragstart', dragStart))
// squares.forEach(square => square.addEventListener('dragend', dragEnd))
// squares.forEach(square => square.addEventListener('dragover', dragOver))
// squares.forEach(square => square.addEventListener('dragenter', dragEnter))
// squares.forEach(square => square.addEventListener('dragleave', dragLeave))
// squares.forEach(square => square.addEventListener('drop', dragDrop))


function dragStart() {
    colorBeingDragged = this.style.backgroundColor
    idBeingDragged = parseInt(this.id)

    console.log('dragStart, color: ' +colorBeingDragged + ' id: ' + idBeingDragged)

}
function dragEnd() {
    console.log('dragEnd')
}
function dragOver() {
    console.log('dragOver')
}
function dragEnter() {
    console.log('dragEnter')
}
function dragLeave() {
    console.log('dragLeave')
}
function dragDrop() {
    console.log('dragDrop')
}
 


})