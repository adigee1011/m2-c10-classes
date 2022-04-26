let Car = require("./car")

class Truck extends Car {
    //boolean, it will treack if this is truck is loaded up with dirt/junk
    loaded;
    //even though the constructor for truck class
    //does not take in a fuel tank size,
    //we pass in 40 to the car class,
    //because all trucks in our simulation get a 40 gallon tank
    constructor(id,capacity,efficency){ // assume all truck have capacity as 40, then you can remove capacity from this line
        super(id,capacity,efficency) // the car class expects capacity so you can replace capacity by 40 here 
    }

    getActualEfficiency(){
        let baseEfficency = super.getActualEfficiency(); //call the parent's class method by using super
        if(this.loaded){
            return baseEfficency * .50
        }
        else {
            return baseEfficency
        }
    }
}


module.exports = Truck;

