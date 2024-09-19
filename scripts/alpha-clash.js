function continueGame() {
    // Step-1: Generate a random alphabet
    const alphabet = getARandomAlphabet();

    // set randomly generated alphabet to the screen
    const currentAlphabetElement = document.getElementById('current-alphabet')
    currentAlphabetElement.innerText = alphabet;

    // set background color
    setBackgroundColorById(alphabet);
}

function play() {
    // hide everything, show only the playgraound
    hideElementById('home-screen')
    hideElementById('final-score')
    showElementById('play-ground');

    // reset score and life
    setTextElementValueById('current-life', 5);
    setTextElementValueById('current-score', 0);

    continueGame();
}

function goHome() {
    hideElementById('final-score');
    showElementById('home-screen');
}

function gameOver() {
    hideElementById('play-ground');
    showElementById('final-score');

    // update final score
    const lastScore = getTextElementValueById('current-score');
    setTextElementValueById('game-score', lastScore);    

    const currentAlphabet = getElementTextById('current-alphabet');
    removeBackgroundColorById(currentAlphabet);
}

function handleKeyBoardKeyUpEvent(event) {
    const playerPressed = event.key;

    // stop the game if pressed 'Esc'
    if (playerPressed === 'Escape') {
        gameOver();
    }

    // get the expected to press
    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLocaleLowerCase();

    if (playerPressed === expectedAlphabet) {
        // update the score
        const currentScore = getTextElementValueById('current-score');
        const updatedScore = currentScore + 1
        setTextElementValueById("current-score" ,updatedScore)

        // start a new round
        removeBackgroundColorById(playerPressed);
        continueGame();
    } else {
        const currentLife = getTextElementValueById('current-life');
        const updatedLife = currentLife - 1;        
        setTextElementValueById("current-life", updatedLife);

        if (updatedLife === 0) {
            gameOver();
        }
    }
}

document.addEventListener('keyup', handleKeyBoardKeyUpEvent)