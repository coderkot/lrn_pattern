class CarAccess {
    open() {
        console.log('open');
    }

    close() {
        console.log('close');
    }
}

class SecuritySystem {
    constructor(door) {
        this.door = door;
    }

    open(pass) {
        if (this.auth(pass)) {this.door.open()}
        else {console.log('access denied')}
    }

    close() {
        this.door.close();
    }

    auth(pass) {
        return pass === "Alex"
    }
}

const door = new SecuritySystem(new CarAccess());
door.open('Jack'); // access denied
door.open('Alex'); // open
door.close();