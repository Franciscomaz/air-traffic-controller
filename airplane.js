class Airplane {
    constructor(x, y, angle = 45, speed = 200, name) {
        this.x = x,
        this.y = y,
        this.angle = angle,
        this.speed = speed
        this.name = Math.round(Math.random() * (1 + 1000) + 1)
    }

    move() {
        this.x += this.speed/100
    }
}
