console.log("BATTLESHIP!")

const getAllElements = () => {
    const userGrid = document.querySelector('.grid-user')
    const computerGrid = document.querySelector('.grid-computer')
    const displayGrid = document.querySelector('.grid-display')
    const ships = document.querySelectorAll('.ship')

    const destoyer = document.querySelector('destroyer-container')
    const submarine = document.querySelector('submarine-container')
    const cruiser = document.querySelector('cruiser-container')
    const battleship = document.querySelector('battleship-container')
    const carrier = document.querySelector('carrier-container')

    const startButton = document.querySelector('#start')
    const rotateButton = document.querySelector('#rotate')
    const turnDisplay = document.querySelector('#who-goes')
    const infoDisplay = document.querySelector('#info')
}

document.addEventListener('DOMContentLoaded', () => {
    getAllElements()
    
})