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
    hideElementById('home-screen')
    showElementById('play-ground')
    continueGame();
}