class Transformator {
    constructor(objeto) {
        this.objeto = objeto
    }

    rotate(angle) {
        let xR = 2
        let yR = 2

        this.objeto.x -= xR;
        this.objeto.y -= yR;

        this.objeto.x *= Math.cos(this.objeto.angle - this.objeto.x * Math.sin(this.objeto.angle));
        this.objeto.y *= Math.cos(this.objeto.angle + this.objeto.x * Math.sin(this.objeto.angle));
    }

    translate() {

    }

    scale() {

    }
}