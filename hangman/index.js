// Create Array of Colours to Choose From

const colours = ["white", "yellow", "blue", "red", "green", "black", "brown", "grey", "pink", "orange", "purple", "silver", "gold", "lavender", "teal"]

// Set Additional Variables

let word = '';
let correct = [];
let incorrect = [];


// Function to Select a Word from Colours at Random

function selectWord(){

    word = colours[Math.floor(Math.random() * colours.length)]

}

// Add Event Listener to Buttons

letters = document.querySelectorAll('.btn-secondary')

letters.forEach(letter => {
    letter.addEventListener('click', event =>{
        console.log('Clicked!')
    })
});
