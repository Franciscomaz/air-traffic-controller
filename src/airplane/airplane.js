let id = 1

class Airplane {
    constructor(coordinates, speed, direction) {
        this.id = id++
        this.coordinates = coordinates
        this.direction = direction
        this.speed = speed
        this.dimensions = new Cartesian(16, 16)
        this.img = this.createImage()
    }

    render() {
        ctx.save()
        this.moveToCenter()
        this.rotate()
        this.renderText()
        this.renderImage()
        ctx.restore()
    }

    moveToCenter() {
        const center = Board
            .center()
        const coordinates = this
            .coordinates
            .scaleY(-1)
            .add(center)
            .add(this.dimensions)
        ctx.translate(coordinates.x, coordinates.y)
    }

    renderText() {
        ctx.font = "15px Arial";
        const dimensions = this.dimensions.invert()
        ctx.fillText(this.id, dimensions.x, dimensions.y)
    }

    renderImage() {
        const dimensions = this.dimensions.invert()
        ctx.drawImage(this.img, dimensions.x, dimensions.y)
    }

    rotate() {
        ctx.rotate(this.direction.invert().asRadians());
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
        this.x += this.speed.value/100
    }

    createImage() {
        let img = new Image();
        img.src = 'airship.png'
        return img
    }
}
