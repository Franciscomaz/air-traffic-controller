class Cartesian {
    constructor(x, y) {
        this.x = Number(x)
        this.y = Number(y)
    }

    static fromPolar(radius, angle) {
        const radians = angle.asRadians()
        const x = radius * Math.cos(radians)
        const y = radius * Math.sin(radians)
        return new Cartesian(x, y)
    }

    add(cartesian) {
        return new Cartesian(this.x + cartesian.x, this.y + cartesian.y)
    }

    minus(cartesian) {
        return this.add(cartesian.invert())
    }

    minusX(number) {
        return new Cartesian(this.x - number, this.y)
    }

    mutiplyBy(times) {
        return new Cartesian(this.x * times, this.y * times)
    }

    multiplyX(times) {
        return new Cartesian(this.x * times, this.y)
    }

    multiplyY(times) {
        return new Cartesian(this.x, this.y * times)
    }

    half() {
        return new Cartesian(this.x / 2, this.y / 2)
    }

    invert() {
        return new Cartesian(-this.x, -this.y)
    }

    distanceBetween(point) {
        return Math.sqrt((Math.pow(point.x-this.x,2))+(Math.pow(point.y-this.y,2)))
    }

    toPolar() {
        const distance = Math.sqrt(this.x * this.x + this.y * this.y)
        const radians = Math.atan2(this.y, this.x)
        return new Polar(distance, Degrees.fromRadians(radians))
    }
}
