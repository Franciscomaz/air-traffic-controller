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

    multiplyY(times) {
        return new Cartesian(this.x, this.y * times)
    }

    toPolar() {
        const distance = Math.sqrt(this.x * this.x + this.y * this.y)
        const radians = Math.atan2(this.y, this.x)
        return new Polar(distance, Degrees.fromRadians(radians))
    }
}
