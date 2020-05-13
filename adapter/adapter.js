class Engine2 {
    simpleInterface() {
        console.log('Engine 2.0');
    }
}

class EngineV8 {
    complicatedInterface() {
        console.log('Engine v8');
    }
}

class EngineV8Adapter {
    constructor(engine) {
        this.engine = engine;
    }

    simpleInterface() {
        this.engine.complicatedInterface();
    }
}

class Auto {
    startEngine(engine) {
        engine.simpleInterface();
    }
}

const myCar = new Auto();
const oldEngine = new Engine2();
myCar.startEngine(oldEngine);

const newEngine = new EngineV8Adapter(new EngineV8());
myCar.startEngine(newEngine);