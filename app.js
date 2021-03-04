document.addEventListener('DOMContentLoaded', () => {
    const grid = document.querySelector('.grid')
    const width = 8
    const squares = []
    const scoreDisplay = document.querySelector('#score')
    let score = 0;
    const candyColors = 
        [
        'url(images/blue-car.png)',
        'url(images/green-car.png)',
        'url(images/key.png)',
        'url(images/race-car.png)',
        'url(images/red-car.png)',
        'url(images/station.png)'
        ]

function createBoard() {
for (let i = 0; i <width*width; i++) {
    const square = document.createElement('div');
    square.setAttribute('draggable', true)
    square.setAttribute('id', i)
    let randomColor = Math.floor(Math.random()*candyColors.length)
    square.style.backgroundImage = candyColors[randomColor]
    grid.appendChild(square)
    squares.push(square)
}

 }
createBoard()
// drag the candies
let colorBeingDragged
let colorBeingReplaced
let squareIdBeingDragged
let squareIdBeingReplaced


squares.forEach(square => square.addEventListener('dragstart', dragStart))
squares.forEach(square => square.addEventListener('dragend', dragEnd))
squares.forEach(square => square.addEventListener('dragover', dragOver))
squares.forEach(square => square.addEventListener('dragenter', dragEnter))
squares.forEach(square => square.addEventListener('dragleave', dragLeave))
squares.forEach(square => square.addEventListener('drop', dragDrop))


function dragStart() {
    colorBeingDragged = this.style.backgroundImage
    squareIdBeingDragged = parseInt(this.id)
    console.log('dragStart, color: ' +colorBeingDragged + ' id: ' + squareIdBeingDragged)

}
function dragEnd() {
let validMoves = [
squareIdBeingDragged -1,
squareIdBeingDragged +1,
squareIdBeingDragged -width,
squareIdBeingDragged +width
    ]

let validMove = validMoves.includes(squareIdBeingReplaced)

if (squareIdBeingReplaced && validMove) {
    squareIdBeingReplaced =  null
}
else if (squareIdBeingReplaced && !validMove){ 
    squares[squareIdBeingDragged].style.backgroundImage = colorBeingDragged
    squares[squareIdBeingReplaced].style.backgroundImage = colorBeingReplaced
}
else squares[squareIdBeingDragged].style.backgroundImage = colorBeingDragged
}

// checking for matches

// check for row of Three
function checkRowForThree() {
  for (i = 0; i <= 61; i++) 
{
let rowOfThree = [i, i+1, i+2]
let decidedColor = squares[i].style.backgroundImage
const isBlank = squares[i].style.backgroundImage === ''
const notValid = [6,7,14,15,22,23,30,31,38,39,46,47,54,55]
if (notValid.includes(i)) continue
    if(rowOfThree.every(index => squares[index].style.backgroundImage === decidedColor && !isBlank)) {
        score += 3
        scoreDisplay.innerHTML = score;
        rowOfThree.forEach(index => squares[index].style.backgroundImage = '')
    }
}
}

// check for row of Four
function checkRowForFour()  {
    for (i = 0; i <= 60; i++) 
    {
    let rowOfFour = [i, i+1, i+2, i+3]
    let decidedColor = squares[i].style.backgroundImage
    const isBlank = squares[i].style.backgroundImage === ''
    const notValid = [5, 6, 7, 13, 14, 15, 21, 22, 23, 29, 30, 31, 37, 38, 39, 45, 46, 47, 53, 54, 55]
    if (notValid.includes(i)) continue
        if(rowOfFour.every(index => squares[index].style.backgroundImage === decidedColor && !isBlank)) {
            score += 4
            scoreDisplay.innerHTML = score;
            rowOfFour.forEach(index => squares[index].style.backgroundImage = '')
        }
    
    }
}

// check for row of Five
function checkRowForFive()  {
    for (i = 0; i <= 59; i++) 
    {
    let rowOfFive = [i, i+1, i+2, i+3, i+4]
    let decidedColor = squares[i].style.backgroundImage
    const isBlank = squares[i].style.backgroundImage === ''
    const notValid = [4, 5, 6, 7, 12, 13, 14, 15, 20, 21, 22, 23, 28, 29, 30, 31, 36, 37, 38, 39, 44, 45, 46, 47, 52, 53, 54, 55]
    if (notValid.includes(i)) continue
        if(rowOfFive.every(index => squares[index].style.backgroundImage === decidedColor && !isBlank)) {
            score += 5
            scoreDisplay.innerHTML = score;
            rowOfFive.forEach(index => squares[index].style.backgroundImage = '')
        }
    
    }
}

// check for column of Three
function checkColumnForThree() {
    for (i = 0; i <= 47; i++) 
  {
  let columnOfThree = [i, i+width, i+width*2]
  let decidedColor = squares[i].style.backgroundImage
  const isBlank = squares[i].style.backgroundImage === ''
  if(columnOfThree.every(index => squares[index].style.backgroundImage === decidedColor && !isBlank)) {
     
      score += 3
      scoreDisplay.innerHTML = score;
      columnOfThree.forEach(index => squares[index].style.backgroundImage = '')
  }
  }
  }

// check for column of Four
  function checkColumnForFour() {
    for (i = 0; i <= 39; i++) 
  {
  let columnOfFour = [i, i+width, i+width*2, i+width*3]
  let decidedColor = squares[i].style.backgroundImage
  const isBlank = squares[i].style.backgroundImage === ''
  if(columnOfFour.every(index => squares[index].style.backgroundImage === decidedColor && !isBlank)) {
      score += 4
      scoreDisplay.innerHTML = score;
      columnOfFour.forEach(index => squares[index].style.backgroundImage = '')
  }
  }
  }

  // check for column of Five
  function checkColumnForFive() {
    for (i = 0; i <= 31; i++) 
  {
  let columnOfFive = [i, i+width, i+width*2, i+width*3, i+width*4]
  let decidedColor = squares[i].style.backgroundImage
  const isBlank = squares[i].style.backgroundImage === ''
  if(columnOfFive.every(index => squares[index].style.backgroundImage === decidedColor && !isBlank)) {
      score += 5
      scoreDisplay.innerHTML = score;
      columnOfFive.forEach(index => squares[index].style.backgroundImage = '')
  }
  }
  }

  function moveDown() {
    for(i=0; i<=55; i++) {
        if(squares[i+width].style.backgroundImage === '' ) {
            squares[i+width].style.backgroundImage = squares[i].style.backgroundImage
            squares[i].style.backgroundImage = ''
        }
    const firstRow = [0, 1, 2, 3, 4, 5, 6, 7]
    const isFirstRow = firstRow.includes(i)
    if (isFirstRow && squares[i].style.backgroundImage== '') {
    let randomColor = Math.floor(Math.random() * candyColors.length) 
   // aktualny klocek 
   squares[i].style.backgroundImage = candyColors[randomColor]
   
  }
}

  }


function dragOver(e) {
    e.preventDefault()
    // console.log('dragOver')
}
function dragEnter(e) {
    e.preventDefault()
    // console.log('dragEnter')
}
function dragLeave() {
    // console.log('dragLeave')
}
function dragDrop() {
    colorBeingReplaced = this.style.backgroundImage
    squareIdBeingReplaced = parseInt(this.id)
    console.log('dragReplaced, color: ' +colorBeingReplaced + ' id: ' + squareIdBeingReplaced)
    this.style.backgroundImage = colorBeingDragged
    squares[squareIdBeingDragged].style.backgroundImage = colorBeingReplaced
}

window.setInterval(function(){
    moveDown()
    checkRowForFive()
    checkColumnForFive()
    checkRowForFour()
    checkColumnForFour()
    checkRowForThree()
    checkColumnForThree()
  }, 500);

})