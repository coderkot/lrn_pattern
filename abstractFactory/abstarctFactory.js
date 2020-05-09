/** Abstract factory **/
function bmwProducer (type) {
    return type === 'sport' ? sportCarFactory : familyCarFactory;
}

/** Factories **/
function sportCarFactory() {
    return new Z4();
}

function familyCarFactory() {
    return new I3();
}

/** Cars **/
class Z4 {
    info () {
        return "Sport car Z4";
    }
}

class I3 {
    info () {
        return "Family car I3";
    }
}

const producer = bmwProducer('sport');
const sportCar = new producer();
console.log(sportCar.info());