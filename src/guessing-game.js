class GuessingGame {
    constructor() {
        this.min = 0;
        this.max = 0;
        this.middle = 0;
    }

    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    guess() {
       return this.middle = Math.round((this.min + this.max) / 2);
    }

    lower() {
        this.max = this.middle;
    }

    greater() {
        this.min = this.middle;
    }
}

module.exports = GuessingGame;
