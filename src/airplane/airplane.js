
class Airplane {
    constructor(x, y, angle = 45, speed = 200) {
        this.x = x
        this.y = y
        this.angle = angle
        this.speed = speed
        this.name = 'a'+Math.round(Math.random() * (1 + 1000) + 1)
    }

    render() {
        let img = document.createElement('img');
        img.src = 'airship.png'
        console.log(img.src)
        ctx.font = "15px Arial";
        ctx.save();
        ctx.rotate(this.angle * Math.PI / 180);
        ctx.fillText(this.name, this.x, this.y);
        ctx.drawImage(img, this.x, this.y);
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
