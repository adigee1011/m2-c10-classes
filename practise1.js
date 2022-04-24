



class Fruit {
    
    name;
    size;

    constructor(name,size) {
        this.name = name;
        this.size = size;
    }

    nameOfFruit() {
        return this.name
    }

}


console.log(Fruit);

console.log('///////')

let apple = new Fruit('apple','10')

console.log(apple);

console.log(apple.nameOfFruit());

let chikoo = new Fruit('chikoo','3');

console.log(chikoo);


console.log(`${chikoo.nameOfFruit()}`)
