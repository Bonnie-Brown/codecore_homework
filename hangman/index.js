// Create Array of Colours to Choose From

const colours = ["white", "yellow", "blue", "red", "green", "black", "brown", "grey", "pink", "orange", "purple", "silver", "gold", "lavender", "teal"]

// Set Additional Variables

let word = '';
let correct = [];
let incorrect = [];
let guessed = [];


// Function to Select a Word from Colours at Random

function selectWord(){

    word = colours[Math.floor(Math.random() * colours.length)]
    

}

// Add Event Listener to Buttons

letter_buttons = document.querySelectorAll('.btn-secondary')

letter_buttons.forEach(letter_button => {
    letter_button.addEventListener('click', event =>{
        guess(letter_button)
    })
});

function guess(letter_button) {
    
    // Disable the letter's button
    letter_button.setAttribute('disabled', true)

    let letter = letter_button.innerHTML.toLowerCase()

    

    // Determine whether or not the letter is part
    // of the word

    if (word.indexOf(letter) >= 0){
        console.log('Success!')
    } else {
        console.log('Boo!')
        console.log(letter)
    }
    
    // if (!guessed.includes(letter)){
    //     guessed.push(letter)
    // } 
}

selectWord()
