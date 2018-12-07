class Transformator {
    constructor(objeto) {
        this.object = objeto
    }

    rotate(angle, point) {
        const radians = angle.asRadians()
        let coordinates = this.object
            .coordinates
            .minus(point)
        const x = coordinates.x * Math.cos(radians) - coordinates.y * Math.sin(radians)
        const y = coordinates.x * Math.sin(radians) + coordinates.y * Math.cos(radians)
        this.object.coordinates = new Cartesian(x, y).add(point)
    }
 
    translate(cartesian) {
        this.object.coordinates = this.object
            .coordinates
            .add(cartesian)
    }

    scale(percentX, percentY) {
        this.object.coordinates = this.object
            .coordinates
            .multiplyY(percentY / 100)
            .multiplyX(percentX / 100)
    }
}