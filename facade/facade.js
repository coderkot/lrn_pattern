class Conveyor {
    setBody () { console.log('Body set') };

    getEngine () { console.log('Dismantle engine') };
    setEngine () { console.log('Engine set') };

    setInterior () { console.log('Interior added') };
    getInterior () { console.log('Update interior')};

    setExterior () { console.log('Exterior added') };
    setWheels () { console.log('Wheels added') };
    paint () {console.log('Car painted') };
}

class ConveyorFacade {
    constructor (car) {
        this.car = car;
    }

    assembleCar () {
        this.car.setBody();
        this.car.setEngine();
        this.car.setInterior();
        this.car.setExterior();
        this.car.setWheels();
        this.car.paint();
    }
}

const conveyor = new ConveyorFacade(new Conveyor());
conveyor.assembleCar();