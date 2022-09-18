
let value = [process.argv[2]];

let cometogether = value.join(",")

let values = cometogether.split(",")


// Function that takes a number as an argument that returns that number of horizontal bard as a string.

function drawLine(num) {
    return '─'.repeat(num)
    
};

//Write three functions: drawTopBorder, drawMiddleBorder and drawBottomBorder.
//  Each function should take a number, return a line of length including corner pieces. 

function drawTopBorder(num) {
    return '┌' + drawLine(num) + '┐'
};

function drawMiddleBorder(num) {
    return '│' + drawLine(num) + '│'
};

function drawBottomBorder(num) {
    return '└' + drawLine(num) + '┘'
};

// Write a `drawBarsAround` function that takes a string, surrounds it with
// vertical lines then returns it.

function drawBarsAround(str) {
    return '│' + str + '│'
    
};

// Write a boxIt function that takes an array of strings and returns a string where each is in a single column table. 
// To add "new lines" to a string, use the \n special character.

    
function boxIt(arr) {

    for (let i = 0; i < arr.length; i++) {
        let num = 20
        if (arr[i] === arr[0]) {
            console.log (drawTopBorder(num) + '\n' + drawBarsAround(arr[i]) + '\n') 
        } else if (arr[i] !== arr[0] && arr[i] !== arr[arr.length-1]){
            console.log(drawMiddleBorder(num)+ '\n' + drawBarsAround(arr[i]) + '\n')

        } else {
            console.log(drawMiddleBorder(num)+ '\n' + drawBarsAround(arr[i]) + '\n' + drawBottomBorder(num))
        }
        
    }

};

console.log(boxIt(values))

     
