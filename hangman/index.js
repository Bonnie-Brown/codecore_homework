$(document).ready(function(){

    // Create Array of Colours to Choose From

    // const colours = ["white", "yellow", "blue", "red", "green", "black", "brown", "grey", "pink", "orange", "purple", "silver", "gold", "lavender", "teal"]
       const colours = ["white"]
    // Set Additional Variables

    let word = '';
    let max_failed_attempts = 6;
    let wrong_guesses = 0;
    let guessed_letters = [];
    let placeholder = null;
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

    const winner = () => new Audio("sounds/tada.wav");
    const loser = () => new Audio("sounds/sad.wav");

    // ------------------ Key Test 

    // addEventListener('keyup', (event) => {

    //   key_up(event)

    // })

    // function key_up(event){
    //     console.log(event)

    // }

    // // ------------------  


    // Function to Select a Word from Colours at Random

    function random_word() {

        word = colours[Math.floor(Math.random() * colours.length)]
        console.log(word)

    }

    random_word();
    

    // Add Event Listener to Buttons

    // Reset Button

    reset_button = document.querySelector('.btn-danger')

    reset_button.addEventListener('click', event => {
        reset()
    })

    // Letter Button

    letter_buttons = document.querySelectorAll('.btn-secondary')

    letter_buttons.forEach(letter_button => {
        letter_button.addEventListener('click', event => {
            guess(letter_button)
        })
    });

    // Function to react to a clicked button

    function guess(letter_button) {

        // Disable the letter's button once clicked
        letter_button.setAttribute('disabled', true)

        let letter = letter_button.innerHTML.toLowerCase()

        if (!guessed_letters.includes(letter)) {
            guessed_letters.push(letter)
        }

        // Determine whether or not the letter is part
        // of the word

        // If it is, update the game and check to see if the user has
        // won the game

        if (word.indexOf(letter) >= 0) {
            update_game()
            game_status()

        } else {

            incorrect_guess()

        }
    }

    // When an incorrect guess is made, update the picture and check to see
    // if the user has lost the game
    function incorrect_guess() {

        wrong_guesses += 1

        update_picture();
        game_status();

    }

    // Check to see if a user has won or lost a game
    function game_status() {

        if (placeholder === word) {

            winner().play();
            // setTimeout(confirm('You won!'), 200);
            setTimeout(() => { confirm('You won!') }, 1000)
            reset();

        } else if (wrong_guesses === max_failed_attempts) {

            loser().play();
            // setTimeout(confirm('You lost!'), 200);
            setTimeout(() => { confirm('You lost!') }, 1000)
            reset();
        }
    }

    // Update the picture as the user guesses incorrectly
    function update_picture() {

        document.getElementById('image').src = './img/gallows' + wrong_guesses + '.jpg'

    }

    // Update the game as the user guesses correctly
    function update_game() {

        placeholder = word.split('').map(letter => (guessed_letters.indexOf(letter) >= 0 ? letter : " _ ")).join('')

        document.querySelector('.placeholder').innerHTML = placeholder

    };

    update_game();

    // Reset the game when the user clicks the reset button
    function reset() {
        wrong_guesses = 0;
        guessed_letters = [];
        document.getElementById('image').src = './img/gallows0.jpg';
        button_reset();
        random_word();
        update_game();
    }

    // Reset Letter Buttons

    function button_reset() {
        buttons = document.querySelectorAll('.btn-secondary')

        buttons.forEach(button => {

            button.removeAttribute('disabled')

        });
    }

    // Play Audio

   

    // function play_winner_audio() {
    //     // document.getElementById('winner').play();
    //     winner()
    //     setTimeout(confirm('You won!'), 1000);
    // }
    // function play_loser_audio() {

    //     // document.getElementById('loser').play();
    //     loser()
    //     setTimeout(confirm(`You lost! The colour was: ${word}.`), 1000);

    // }  
    
})




