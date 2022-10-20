
function todo() {

    const readline = require('readline'); // loading the modules

    const rl = readline.createInterface( // creating the interface using processes within an object
        {
            input: process.stdin,
            output: process.stdout,

        }
    );

    let contents = [];

    const menu = function menu() {

        console.log("(v) View ○ (n) New ○ (cX) Complete ○ (dX) Delete ○ (q) Quit" + '\n')
        rl.question('>', answer => {

            if (answer == 'v') {
                view();

            } else if (answer == 'n') {
                new_task();

            } else if (answer[0] == 'c') {
                complete(answer);

            } else if (answer[0] == 'd') {
                remove(answer);


            } else if (answer == 'q') {
                quit();

            } else {
                console.log('\n Incorrect Input. Please Try Again. \n')
                menu();
            }
        })
    }

    const view = function view() {

        if (contents.length === 0) {

            console.log("\n The list is empty. Type 'n' to add a new task. \n")

        } else {

            for (let i = 0; i < contents.length; i++) {

                console.log('\n' + i + " " + contents[i] + '\n')

            }
        }

        menu()
    }

    const new_task = function new_task() {

        rl.question('\nEnter new task: \n \n', task => {

            contents.push([('[]' + " " + task)])

            console.log(`\n${task} has been added to the list! \n`);

            menu();

        })
    }

    const complete = function complete(input) {

        for (let i = 0; i < contents.length; i++) {

            if (input[1] == i) {

                let newline = contents[i].join(" ").replace('[]', '[✓]').split();

                contents[i] = newline;

                console.log('\n' + (newline.join("").slice(4)), 'completed' + '\n');


                menu()
            }
        }
    }

    const remove = function remove(input) {

        for (let i = 0; i < contents.length; i++) {
            if (input[1] == i) {

                // the following is to make sure that the full name of the task
                // is logged, whether or not the task has been completed.

                if (contents[i].join("").includes('[✓]')) {
                    console.log(`\n ${(contents[i].join("").slice(4))} has been removed! \n`)
                    contents.splice(i, 1)
                } else {
                    console.log(`\n ${(contents[i].join("").slice(3))} has been removed! \n`)
                    contents.splice(i, 1)
                }


                menu();
            }
        }
    }

    const quit = function quit() {

        console.log('\n See you later!✌ \n');
        process.exit();

    }

    console.log("Welcome to Todo CLI!" + '\n' + '\n' + "--------------------" + '\n')

    menu()

}

todo()



