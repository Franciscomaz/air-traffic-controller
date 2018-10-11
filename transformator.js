class Transformator{
    constructor(objeto) {
        this.objeto = objeto
    }

    rotate() {
        this.objeto -= xR;
        this.objeto -= yR;

        result[0] = x * Math.cos(this.objeto.angle - this.objeto.x * Math.sin(this.objeto.angle));
        result[1] = y * Math.cos(this.objeto.angle + this.objeto.x * Math.sin(this.objeto.angle));

        result[0] += xR;
        result[1] += yR;

        return result;
    }

    translate() {

    }

    stagger() {

    }
}