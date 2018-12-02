class KilometersPerHour {
    constructor(value, scale) {
        this.value = Number(value)
        this.scale = Number(scale)
    }

    scaled() {
        return this.value / this.scale
    }

    toKilometersPerSeconds() {
        return this.value / 3600
    }

    toString() {
        return this.value.toFixed(2) + ' Km/h'
    }
}