class Transformator {
    constructor(objeto) {
        this.object = objeto
    }

    rotate(angle, xR, yR) {
        this.object.x -= xR;
        this.object.y -= yR;

        angle = radians(angle)

        this.object.x *= Math.cos(angle) - this.object.x * Math.sin(angle) + xR;
        this.object.y *= Math.cos(angle) + this.object.x * Math.sin(angle) + yR;
    }

    translate(cartesian) {
        this.object.coordinates = this.object
            .coordinates
            .add(cartesian)
    }

    scale(percentX, percentY) {
        this.object.coordinates = this.object
            .coordinates
            .scaleY(percentY / 100)
            .scaleX(percentX / 100)
    }
}