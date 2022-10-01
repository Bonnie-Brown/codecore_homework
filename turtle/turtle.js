class Turtle {
    constructor(x, y) {

        this.x = x;
        this.y = y;

        let start = [this.x, this.y];
        this.start = start;

        let path = [[this.x, this.y]];
        this.path = path;

        let currentCoordinates = [this.x, this.y];
        this.currentCoordinates = currentCoordinates;

        let N = "north"
        this.N = N

        let E = "east";
        this.E = E;

        let S = "south";
        this.S = S;

        let W = "west";
        this.W = W;


        let currentDirection = this.E;
        this.currentDirection = currentDirection;

        let vertical = [];
        this.vertical = vertical;

        let horizontal = [];
        this.horizontal = horizontal;

        let biggestX = " ";
        this.biggestX = biggestX;

        let biggestY = " ";
        this.biggestY = biggestY

        let xpoints = [];
        this.xpoints= xpoints;

        let ypoints = [];
        this.ypoints = ypoints;

        let str; 
        this.str = str;

        let newPath = [];
        this.newPath = newPath;

    }

    forward(steps) {
        /* Determine which axis the turtle is on */
        // if x axis:
        if (this.currentDirection === this.E || this.currentDirection === this.W) {
            this.x = steps;
            this.currentCoordinates = [this.x, this.y];
            this.horizontal.push(this.currentCoordinates[0]);
            this.path.push(this.currentCoordinates);
            

            return this

            // if y axis:
        } else if (this.currentDirection === this.N || this.currentDirection == this.S) {
            this.y = steps;
            this.currentCoordinates = [this.x, this.y];
            this.vertical.push(this.currentCoordinates[1]);
            this.path.push(this.currentCoordinates);

    
            return this
        }
    };


    right() {

        if (this.currentDirection === "east") {
            this.currentDirection = "south"
        } else if (this.currentDirection === "south") {
            this.currentDirection = "west"
        } else if (this.currentDirection === "west") {
            this.currentDirection = "north"
        } else if (this.currentDirection === "north") {
            this.currentDirection = "east"
        }


        return this
    };

    left() {

        if (this.currentDirection === "east") {
            this.currentDirection = "north"
        } else if (this.currentDirection === "north") {
            this.currentDirection = "west"
        } else if (this.currentDirection === "west") {
            this.currentDirection = "south"
        } else if (this.currentDirection === "south") {
            this.currentDirection = "east"
        }

        return this


    };

    allPoints() {

        console.log("Path:",this.path)

        return this
    };

    largest(){

        // Created this method to used in the print function. Did not end up using these values.

        this.horizontal.forEach(x => {
            if (this.biggestX === " ") {
                this.biggestX = x
            }

            else if (this.biggestX < x) {
                this.biggestX = x
            }


        });


        this.vertical.forEach(y => {

            if (this.biggestY === " ") {
                this.biggestY = y
            }
            else if (this.biggestY < y) {
                this.biggestY = y
            }

        });

        console.log(`The largest value of x is ${this.biggestX} and the largest value of y is ${this.biggestY}`)

        return this


    };

    print() {

        //Splitting 'x' coordinates from 'y' coordinates to create a nested array

        this.str = (this.path.join(","))
        this.newPath = this.str.split(",")

        for (let i = 0; i < this.newPath.length; i++) {

            if (i % 2 !== 0){
                this.ypoints.push(this.newPath[i])
            } else {
                this.xpoints.push(this.newPath[i])
            }
            
        }

        // I struggled with figuring the print method and the for loop out. It is unfortunately not working as expected.

        // I will go into detail here to explain the logic behind this.

        //Finding the starting point
        for (let i = 0; i < this.ypoints.length; i++) {
            for (let i = 0; i < this.xpoints.length; i++) {
                 if (this.xpoints[i] === 0 && this.ypoints[i] === 0){
                     console.log('Beginning of Log'+ '\n')
                     // if x = 0 and y = a number, we want to print a * on each new line for
                     // until we reach y's value and begin a new line
                 } else if(this.xpoints[i] === 0 && this.ypoints[i] !== 0){
                     console.log(('* ' + '\n').repeat(this.ypoints[i]))
                     // otherwise, if x = a number and y = 0, we want to print out * on the x axis until the 
                     // x value is reached and begin a new line
                 } else if (this.ypoints[i] === 0 && this.xpoints[i] !== 0){
                     console.log('*'.repeat(this.xpoints[i]) + '\n')
                    // The following else if and nested if statements are to consider the previous coordinates
                    // since the turtle will not always have coordinates that include 0.
                 } else if (this.xpoints[i] !== 0 && this.ypoints[i] !== 0){
                    // if the value of x has changed since the previous iteration, this is what we will be logging.
                    // We will be taking into consideration the previous steps and adding to them.
                     if (this.xpoints[i-1] === this.xpoints[i] && this.ypoints[i-1] !== this.ypoints[i]){
                         console.log(" ".repeat(this.xpoints[i-1] - 1) + '* '.repeat(this.xpoints[i]) + '\n')
                    // Otherwise, if is is the y value that has changed, the log will look a little different.
                    // We will still be taking into consideration the previous steps and adding to them.
                     } else if (this.xpoints[i-1] !== this.xpoints[i] && this.ypoints[i-1] === this.ypoints[i]) {
                         console.log(" ".repeat((this.xpoints[i-1])) + ("*" + '\n').repeat(this.ypoints[i]))
                     }

                    }
                }   
            
        };

        console.log('End of Log')
        return this
    }
}

const turt = new Turtle(0, 0).forward(5).right().forward(5).allPoints().print()

console.log(turt)


