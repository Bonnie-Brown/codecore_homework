
function todo() {

    const readline = require('readline'); // loading the modules

    const rl = readline.createInterface( // creating the interface using processes within an object
        {
            input: process.stdin,
            output: process.stdout,
           
        }
    );

    let status = {
        complete: '[✓]',
        incomplete: '[]'
    }

    let contents = ['laundry'];

    const menu = function menu() {

        console.log ("(v) View ○ (n) New ○ (cX) Complete ○ (dX) Delete ○ (q) Quit" + '\n')
        rl.question('>', answer =>{

            if (answer == 'v'){
                view();
            } else if (answer == 'n'){
                new_task();
            } else if (answer[0] == 'c'){
                complete(answer);
                
            } else if (answer[0] == 'd'){
                remove(answer);


            } else if ( answer == 'q'){
                quit();

            }


        })
    }

    const view = function view() {
        
        if (contents.length === 0) {
            
            console.log("The list is empty. Type 'n' to add a new task." + '\n')

         } else {

            for (let i = 0; i < contents.length; i++) {
                
                console.log(i + " " + contents[i] + '\n')
            
            }
        }

        menu()
    }

    const new_task = function new_task() {

        rl.question('Enter new task:' + '\n', task => {

            contents.push((status.incomplete + " " + task))

            console.log(`${task} has been added to the list!`);

            menu();

        })
    }

    const complete = function complete(input) {

        for (let i = 0; i < contents.length; i++) {

            if (input[1] == i) {

                contents[i].replace(status.incomplete, status.complete)

                console.log(contents[i], 'completed')

                menu()
            } 

        }



        
    }

    const remove = function remove(input) {
        
        for (let i = 0; i < contents.length; i++) {
            if (input[1] == i) {
                console.log(`${contents[i]} has been removed.`)
                contents.splice(i, 1)
                menu();
            }
            
        }
       
        
    }

    const quit = function quit() {

        console.log('See you later, alligator!');
        process.exit();
        
    }

    console.log("Welcome to Todo CLI!" + '\n' + '\n' + "--------------------" + '\n')

    menu()

}

todo()




