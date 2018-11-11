class Polar {
    constructor(radius, angle) {
        this.angle = angle
        this.radius = Number(radius)
    }

    radiusToString() {
        return this.radius.toFixed(2) + ' Km'
    }
}