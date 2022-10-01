class Turtle {
    constructor(x, y) {

        this.x = x;
        this.y = y;

        let start = [this.x, this.y];
        this.start = start;

        let end = [];
        this.end = end;

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

        let str 
        this.str = str

        let newPath = [];
        this.newPath = newPath;

        let difference
        this.difference = difference;

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
            this.vertical.push(this.y)
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


    }



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

        //Struggling here with the nested array. 

        for (let i = 0; i < this.ypoints.length; i++) {
            for (let j = 0; j < this.xpoints.length; j++) {
                 if (this.xpoints[i] === 0 && this.ypoints[i] === 0){
                     console.log("◯ ".repeat(this.biggestX) + '\n')
            //      } else if (this.ypoints[i] > 0){
            //         this.difference = this.biggestX - this.xpoints[i]
            //          console.log("◯ ".repeat(this.ypoints[i]) + "x".repeat(this.xpoints) + ("◯ ".repeat(this.difference)) + '\n')
            //      }
            //     }
            // }
        };
    }


      
        // return "." + ".".repeat(this.biggestX) + "\n" + ("." + this.space.repeat(this.biggestX - 1) + "." + "\n").repeat(this.biggestY - 1) + "." + ".".repeat(this.biggestX)

    };

        return this
}
}





const turt = new Turtle(0, 0).forward(5).right().forward(5).left().forward(10).largest().print()

console.log(turt)


