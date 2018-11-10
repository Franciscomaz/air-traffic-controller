class Degrees {
    constructor(value) {
        this.value = Number(value)
    }

    static fromRadians(radians) {
        return new Degrees(radians * 180 / Math.PI)
    }

    asRadians() {
        return this.value * Math.PI / 180;
    }
}