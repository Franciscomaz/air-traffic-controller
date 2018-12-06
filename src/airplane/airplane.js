let id = 1

class Airplane {
    constructor(coordinates, speed, direction) {
        this.id = id++
        this.coordinates = coordinates
        this.direction = direction
        this.speed = speed
        this.dimensions = new Cartesian(32, 32)
        this.img = this._createImage()
    }

    render() {
        ctx.save()
        this._moveToCenter()
        this._rotate()
        this._renderText()
        this._renderImage()
        ctx.restore()
    }

    update() {
        this._move()
    }

    poitingTo() {
        const x = Math.cos(this.direction.asRadians())
        const y = Math.sin(this.direction.asRadians())
        return new Cartesian(x, y)
    }

    estimatedPositionIn(seconds) {
        const kilometersPerSecond = this.speed
            .toKilometersPerSeconds()

        return this.poitingTo().mutiplyBy(kilometersPerSecond * seconds)
    }

    _moveToCenter() {
        const center = Board
            .center()
            .minus(this.dimensions.half())
        const coordinates = this
            .coordinates
            .multiplyY(-1)
            .add(center)
            .add(this.dimensions)
        ctx.translate(coordinates.x, coordinates.y)
    }

    _rotate() {
        ctx.rotate(this.direction.invert().asRadians());
    }

    _renderText() {
        ctx.font = "15px Arial";
        const dimensions = this.dimensions.invert()
        ctx.fillText(this.id, dimensions.x, dimensions.y)
    }

    _renderImage() {
        const dimensions = this.dimensions.invert()
        ctx.drawImage(this.img, dimensions.x, dimensions.y)
    }

    _move() {
        const boardDimensions = Board.center();
        if (this.coordinates.x < -boardDimensions.x) {
            this.coordinates.x = boardDimensions.x
        } else if (this.coordinates.x > boardDimensions.x) {
            this.coordinates.x = -boardDimensions.x
        }
        if (this.coordinates.y > boardDimensions.y) {
            this.coordinates.y = -boardDimensions.y
        } else if (this.y < -boardDimensions.y) {
            this.coordinates.y = boardDimensions.y
        }
        this.coordinates.add(this.poitingTo().mutiplyBy(this.speed.scaled()))
    }

    _createImage() {
        let img = new Image();
        img.src = 'airship.png'
        return img
    }
}
