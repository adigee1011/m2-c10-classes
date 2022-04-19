// i want to create a class that represents a rectangle




class Rectangle {

    length;
    width;


    /**
     * 
     * @param {number} l - the length of the rectangle 
     * @param {number} w - the width of the rectanlge 
     */
    constructor(l,w) {
        this.length = l;
        this.width = w;
    }

    /**
     * 
     * @returns the strin represeatation of this instance
     */
     toString(){ //string representation of the class
        let string =  this.length + " x " + this.width;
         return string;
     }

    /**
     * @returns the area of this rectange
     */
    getArea() {
        //width times length
        let area = this.length * this.width
        return area;
    }

    /**
     * @returns the perimeter of this rectangle
     */
    getPerimeter(){
        let perimeter = 2 * (this.length + this.width)
        return perimeter;
    }
}

let r1 = new Rectangle(10,5);
console.log(r1);

let r2 = new Rectangle(20,10);

console.log("the rectangle:" + r1)
//using ',' [comma] this does not uses string function of the class
//using '+' [concat] this uses string function of class

//console.log(r1.getArea());

console.log(`the are of the rectangle ${r1} is ${r1.getArea()}`)


console.log("this width of r1 is", r1.width);


console.log(`the perimeter of the rectangle ${r1} is ${r1.getPerimeter()}`)


