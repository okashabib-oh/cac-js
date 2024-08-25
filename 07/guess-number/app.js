const from = document.getElementById('from')
let guesses = document.getElementById('guesses')
let mesg = document.getElementById('lowOrHi')
let previuosGu = document.getElementById('previuosGuess')
let remaining = document.getElementById('lastResult')

const randomNumber = parseInt(Math.random() * 100 + 1)
// console.log(randomNumber);
let previuosGuess = []
let playGame = true;
let guessesRemaining = 10

if (playGame) {
    from.addEventListener('submit', (e) => {
        e.preventDefault()

        const guessValue = parseInt(document.getElementById('guessValue').value)
        if (!guessValue) {
            return
        }
        previuosGuess.push(guessValue)
        previuosGu.innerText = previuosGuess
        checkGuess(guessValue)
        remaining.innerText = guessesRemaining
    })
}

function checkGuess(val) {
    if (isNaN(val)) {
        message(`Please enter a valid number`)
    }
    if(val === randomNumber){
        message(`You guess it right, the number was ${randomNumber}`)
    }else{
        --guessesRemaining
        message(`Incorrect guess, Keep trying: ${val}`)
        if(guessesRemaining <= 0){
            message(`Game Over the number was ${randomNumber}`)
            endGame()
        }
    }
}

function message(mes) {
    mesg.innerText = ""
    mesg.innerText = mes
}

function startGame() {

}

function endGame() {
    playGame = false
    message(`Game Over, the number was ${randomNumber}`)
}