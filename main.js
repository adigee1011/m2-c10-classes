class Address {

    street;
    city;
    zip;
    state;






    //this method gets called, whenever a new instacne of
    //the class is created


    /**
     * Instantiate a new address object
     * @param {*} st street of address
     * @param {*} c city of address
     * @param {*} z zip of address
     * @param {*} s state of address
     */
    constructor(st,c,s,z) { // it is called constructor because you are construcing the code when you create the instance
        //whatever code you type here,
        //will be executed when a new instance of 
        //the class is created
        console.log("inside the constructor");
        //we use this because this's instance is abc
        this.street = st;
        this.city - c;
        this.zip = z;
        this.state = s;

    }


}


// 1234 main street, apt 101, austin, exas 78704
let home = new Address ("1234 main street, apt 101", "austin", "texas","78704");


//9876 1st street, suite 2013. austin texas, 78707
let work = new Address ();

//varaibles
//functions
//if
//for loops
//arrays
//object