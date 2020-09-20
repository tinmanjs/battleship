console.log("BATTLESHIP!")

document.addEventListener('DOMContentLoaded', () => {
  const userGrid = document.querySelector('.grid-user')
  const computerGrid = document.querySelector('.grid-computer')
  const displayGrid = document.querySelector('.grid-display')
  const ships = document.querySelectorAll('.ship')
  console.log(ships)

  const destoyer = document.querySelector('destroyer-container')
  const submarine = document.querySelector('submarine-container')
  const cruiser = document.querySelector('cruiser-container')
  const battleship = document.querySelector('battleship-container')
  const carrier = document.querySelector('carrier-container')

  const startButton = document.querySelector('#start')
  const rotateButton = document.querySelector('#rotate')
  const turnDisplay = document.querySelector('#who-goes')
  const infoDisplay = document.querySelector('#info')
  
  const width = 10
  const userSquares = []
  const computerSquares = []
    
  function createBoard(grid, squares) {
    for (let i = 0; i < width*width; i++) {
      const square = document.createElement('div')
      square.dataset.id = i
      grid.appendChild(square)
      squares.push(square)
    }
  }

  // Generate ships in the computer's array
  // Struct = Array of ship objects
  // Each ship object is composed of a 
  //   ship name
  //   ship horizontal and vertical direction space
  const shipArray = [
      {
          name: 'destroyer',
          directions: [
              [0, 1],
              [0, width]
          ]
      },
      {
          name: 'submarine',
          directions: [
              [0, 1, 2],
              [0, width, width*2]
          ]
      },
      {
        name: 'cruiser',
        directions: [
            [0, 1, 2],
            [0, width, width*2]
        ]
    },
    {
        name: 'battleship',
        directions: [
            [0, 1, 2, 3],
            [0, width, width*2, width*3]
        ]
    },
    {
        name: 'carrier',
        directions: [
            [0, 1, 2, 3, 4],
            [0, width, width*2, width*3, width*4]
        ]
    } 
  ]
  
  createBoard(userGrid, userSquares)
  createBoard(computerGrid, computerSquares)

  // Draw the computer's ships in random locations
  function generateShip(ship) {
      let randomDirection = Math.floor(Math.random() * ship.directions.length)
      let current = ship.directions[randomDirection]
      if (randomDirection === 0) direction = 1
      if (randomDirection === 1) direction = 10
      console.log(direction)
      
      // get a random square on the array
      console.log(computerSquares.length, computerSquares)
      let randomStart = Math.abs(Math.floor(Math.random() * computerSquares.length - (ship.directions[0].length * direction)))

      // detect if a space is taken
      const isTaken = current.some(index => computerSquares[randomStart + index].classList.contains('taken'))

      // edge detection
      const isAtRightEdge = current.some(index => (randomStart + index) % width === width - 1)
      const isAtLeftEdge  = current.some(index => (randomStart + index) % width === 0)

      if (!isTaken && !isAtRightEdge && !isAtRightEdge) current.forEach(index => computerSquares[randomStart + index].classList.add('taken', ship.name))
      else generateShip(ship)
  }

  generateShip(shipArray[0])

})