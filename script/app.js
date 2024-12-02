//  app.js

const guessNumber = 50
let attempts = 0

const guessInput = document.getElementById('enter')
const guessButton = document.getElementById('guessbutton')
const guessFeedback = document.getElementById('feedback')
const attemptsDisplay = document.getElementById('attempts')
const restartButton = document.getElementById('restart')

// GuessButton Function
guessButton.addEventListener('click', () => {
    const userGuess = parseInt(guessInput.value, 10)
    attempts++
    if(isNaN (userGuess) || userGuess < 1 || userGuess > 100) {
        guessFeedback.textContent = 'Please enter a number between 1 and 100'
    }
    if (userGuess === guessNumber) {
        guessFeedback.textContent = 'congratulation! you guess the number'
        guessButton.disabled = true
        restartButton.style.display = 'inline-block'
    } else if (userGuess < guessNumber) {
        guessFeedback.textContent = 'Too Low!'
    } else {
        guessFeedback.textContent = 'Too High!'
    }
    
    attemptsDisplay.textContent = `Attempts: ${attempts}`
    guessInput.value = ''
})

// retstart function
restartButton.addEventListener('click', () => {
    attempts = 0
    guessFeedback.textContent = ''
    attemptsDisplay.textContent = ''
    restartButton.style.display = 'none'
    guessInput.value = ''
    guessButton.disabled = false

})