
class Airplane {
    constructor(x, y, angle, speed, direction, radius) {
        this.x = x
        this.y = y
        this.angle = angle
        this.direction = direction
        this.radius = radius
        this.speed = speed
        this.name = 'a'+Math.round(Math.random() * (1 + 1000) + 1)
    }

    render() {
        const x = this.x + width / 2 - 16
        const y = this.y * -1 + height / 2 - 16
        let img = document.createElement('img');
        img.src = 'airship.png'
        console.log(img.src)
        ctx.font = "15px Arial";
        ctx.save();
        ctx.rotate(this.angle * Math.PI / 180);
        ctx.fillText(this.name, x, y);
        ctx.drawImage(img, x, y);
        ctx.restore();
    }

    update() {
        this.move()
    }

    move() {
        let tempWidth = width / 2;
        let tempHeight = height / 2;
        if (this.x < -tempWidth) {
            this.x = tempWidth
        } else if (this.x > tempWidth) {
            this.x = -tempWidth
        }
        if (this.y > tempHeight) {
            this.y = -tempHeight
        } else if (this.y < -tempHeight) {
            this.y = tempHeight
        }
        this.x += this.speed/100
    }
}
