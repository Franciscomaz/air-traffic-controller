class Transformator {
    constructor(objeto) {
        this.objeto = objeto
    }

    rotate(angle, xR, yR) {
        this.objeto.x -= xR;
        this.objeto.y -= yR;

        angle = radians(angle)

        this.objeto.x *= Math.cos(angle) - this.objeto.x * Math.sin(angle) + xR;
        this.objeto.y *= Math.cos(angle) + this.objeto.x * Math.sin(angle) + yR;
    }

    translate(x, y) {
        this.objeto.x += x
        this.objeto.y += y
    }

    scale() {

    }

    radians(degrees) {
        return degrees * Math.PI / 180;
    };
   
    degrees(radians) {
        return radians * 180 / Math.PI;
    };
}