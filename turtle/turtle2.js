class Turtle {
    constructor(x, y){

        this.x = x;
        this.y = y;

        let start = [this.x, this.y];
        this.start = start;

        let end  = [];
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

    }

    forward (steps) {
        /* Determine which axis the turtle is on */
        // if x axis:
        if (this.currentDirection === this.E || this.currentDirection === this.W){
            this.x = steps;
            this.currentCoordinates = [this.x, this.y];
            this.path.push(this.currentCoordinates);
            console.log("*".repeat(steps))
            // return "*".repeat(steps)
            return this
            
        // if y axis:
        } else if (this.currentDirection === this.N || this.currentDirection == this.S){
            this.y = steps;
            this.currentCoordinates = [this.x, this.y];
            this.path.push(this.currentCoordinates);
            console.log(("*" + "\n").repeat(steps))
            // return ("*" + "\n").repeat(steps)
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

        console.log('Within right method')

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
        return this.path;
    };

    print(){

    };

    }

    const turt = new Turtle(0,0).forward(5).right().forward(5)
    console.log(turt)
   
    


