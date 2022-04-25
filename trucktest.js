let assert = require("assert");
let Truck = require("./truck.js")


describe("basic extend",function(){

    it("basic",function(){
    let t = new Truck(1,40,15);
    t.addFuel(10);
    t.drive(15);
    assert.equal(t.odometer,15);
    assert.equal(t.fuel,9);
    })

    it("load efficiency",function(){
        let t = new Truck(1,40,15);
        t.loaded = true;
        t.addFuel(10);
        t.drive(15);
        assert.equal(t.odometer,15);
        assert.equal(t.fuel,8);
        }) 
})