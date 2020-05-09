class Bmw {
    constructor(model, price, maxSpeed) {
        this.model = model;
        this.price = price;
        this.maxSpeed = maxSpeed;
    }
}

class BmwFactory {
    create (type) {
        if (type === 'x5') { return new Bmw(type, 108000, 300) }
        if (type === 'x6') { return new Bmw(type, 110000, 320) }
    }
}

const factory = new BmwFactory;
const x5 = factory.create('x5');
console.log(x5);