class Degrees {
    constructor(value) {
        this.value = Number(value)
    }

    static fromRadians(radians) {
        return new Degrees(radians * 180 / Math.PI)
    }

    invert() {
        return new Degrees(-this.value)
    }

    asRadians() {
        return this.value * Math.PI / 180;
    }

    toString() {
        return this.value.toFixed(2) + ' °'
    }
}