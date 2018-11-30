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
            .multiplyY(-1)
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
        if (this.coordinates.x < -tempWidth) {
            this.coordinates.x = tempWidth
        } else if (this.coordinates.x > tempWidth) {
            this.coordinates.x = -tempWidth
        }
        if (this.coordinates.y > tempHeight) {
            this.coordinates.y = -tempHeight
        } else if (this.y < -tempHeight) {
            this.coordinates.y = tempHeight
        }
        const speed = this.speed.value/100
        this.coordinates.x += speed * Math.cos(this.direction.asRadians())
        this.coordinates.y += speed * Math.sin(this.direction.asRadians())
    }

    createImage() {
        let img = new Image();
        img.src = 'airship.png'
        return img
    }
}
