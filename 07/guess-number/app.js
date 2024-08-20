const from = document.getElementById('from')
let guesses = document.getElementById('guesses')
let mesg = document.getElementById('lowOrHi')

const randomNumber = parseInt(Math.random() * 100 + 1)
let previuosGuess = []
let playGame = true;

if (playGame) {
    from.addEventListener('submit', (e) => {
        e.preventDefault()

        const guessValue = parseInt(document.getElementById('guessValue').value)
        if (!guessValue) {
            return
        }
        previuosGuess.push(guessValue)
        checkGuess(guessValue)
    })
}

function checkGuess(val) {
    if (isNaN(val)) {
        message(`Please enter a valid number`)
    }
    if(val === randomNumber){
        message(`You guess it right, the number was ${randomNumber}`)
    }else{
        message(`Incorrect guess, Keep trying: ${val}`)
    }
}

function message(mes) {
    mesg.innerText = ""
    mesg.innerText = mes
}

function startGame() {

}

function endGame() {

}