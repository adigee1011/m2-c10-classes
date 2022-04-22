let Car = require("./car")

class Truck extends Car {
    //boolean, it will treack if this is truck is loaded up with dirt/junk
    loaded;
    //even though the constructor for truck class
    //does not take in a fuel tank size,
    //we pass in 40 to the car class,
    //because all trucks in our simulation get a 40 gallon tank
    constructor(id,capacity,efficency){
        super(id,capacity,efficency)
    }

    getActualEfficiency(){
        let baseEfficency = super.getActualEfficiency();
        if(this.loaded){
            return baseEfficency * .50
        }
        else {
            return baseEfficency
        }
    }
}


module.exports = Truck;

