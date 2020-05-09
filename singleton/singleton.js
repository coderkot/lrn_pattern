class Counter {
    constructor() {
        if (typeof Counter.instance === 'object') {
            return Counter.instance;
        }

        this.count = 0;
        Counter.instance = this;
        return this;
    }

    getCounter () {
        return this.count;
    }

    increaseCounter () {
        return this.count++;
    }
}