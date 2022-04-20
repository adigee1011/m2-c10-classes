

// class that represents a car
// properties 
// odometer - how many miles the car has travelled
// fuel capacity - how many gallons of fuel the car can hold
// fuel - how many gallons of fuel the car currently has
// efficiency - how many miles the car can travel on 1 gallon of fuel

const assert = require('assert');

class Car {

    //string 0 the id of the car
    id;


    //number - how many miles the car has travelled
    odometer;

    //number - how many gallons of fuel the car can hold
    fuelCapacity;

    //number - how many gallson of fuel the car currently has 
    fuel;


    //number - how many miles the car can travel on 1 gallon of fuel
    efficency;


    /**
     * Constructs a new insstance of Car, and set the odometer and fuel to 0
     * @param {string} id 
     * @param {number} fuelCapacity 
     * @param {number} efficency 
     */
    constructor(id,fuelCapacity,efficency) {
        this.id = id;
        this.odometer = 0;
        this.fuel = 0;
        this.efficency = efficency;
        this.fuelCapacity = fuelCapacity;
    }

    //method that adds fuel
    /**
     * adds fuel to the car
     * @param {number} gallons 
     */
    addFuel(gallons) {

        this.fuel = this.fuel + gallons;
        if(this.fuel > this.fuelCapacity){
            this.fuel = this.fuelCapacity
        }
        if(this.fuel<0){
            this.fuel = 0;
        }
       }
}



if(typeof describe == 'function') {

describe("Constructor Tests", function(){

    it("odometer test",function(){
        let c1 = new Car(1,10,30);
        let expectedOdometer = 0;
        let actualOdometer = c1.odometer;
        assert.equal(actualOdometer,expectedOdometer,"expecting odometer to be 0 on new instances of car")
    })

    it("initial inputs",function(){
        let c1 = new Car (1,10,30);
        assert.equal(c1.id,1,"the id is not set correctly")
        assert.equal(c1.fuelCapacity,10,"the fuel capacity is not set correctly")
        assert.equal(c1.efficency,30,"the mpg not set correctly");
    })

})  

describe("Suite2",function(){
    it("add fuel", function(){
        let c = new Car(1,10,30);
        assert.equal(c.fuel,0,"Car should start with 0 fuel")

        c.addFuel(5);
        assert.equal(c.fuel,5,"Expecting fuel to be 5")

        c.addFuel(2);
        assert.equal(c.fuel,7,"Expecting fuel to be 5")
    })

    it("handle overflow",function(){
        let c = new Car(1,10,30);
        c.addFuel(20);

        assert.equal(c.fuel,10,"Cannot over fill the car")
    })

    it("handle negative fuel",function(){
        let c = new Car(1,10,30);
        c.addFuel(5);
        c.addFuel(-3);
        assert.equal(c.fuel,2,"allow siphoning")

        c.addFuel(-3);
        assert.equal(c.fuel,0,"cannot take out gas you do not have");
    })
})

}


let bettleJuice = new Car(1,10,30);

let expected = 0;
let actual = bettleJuice.odometer;



