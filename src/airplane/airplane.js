let id = 1

class Airplane {
    constructor(coordinates, speed, direction) {
        this.id = id++
        this.coordinates = coordinates
        this.direction = direction
        this.speed = speed
        this.img = this.createImage()
    }

    render() {
        const center = Board
            .center()
            .add(new Cartesian(-16, -16))
        const coordinates = this
            .coordinates
            .multiplyY(-1)
            .add(center)
        this.renderText(coordinates)
        this.renderImage(coordinates)
    }

    renderText(coordinates) {
        ctx.font = "15px Arial";
        ctx.fillText(this.id, coordinates.x, coordinates.y);
    }

    renderImage(coordinates) {
        ctx.drawImage(this.img, coordinates.x, coordinates.y);
    }

    rotate() {
        ctx.save()
        ctx.translate(width / 2 - 16, height / 2 - 16);
        ctx.rotate(this.angle * Math.PI / 180);
        ctx.restore()
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

    createImage() {
        let img = new Image();
        img.src = 'airship.png'
        return img
    }
}
