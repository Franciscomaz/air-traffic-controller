class TravelLane {
    constructor(left, right) {
        this.left = left
        this.right = right
    }

    static fromRightSide(rightSide, distanceBetween) {
        return new TravelLane(rightSide.minusX(distanceBetween), rightSide)
    }

    distanceBetweenSides() {
        return this.right.x - this.left.x
    }

    intersectsWith(travelLane) {
        Math.max(0, Math.min(d1xMax,d2xMax) - Math.max(d1x,d2x))
        Math.max(0, Math.min(d1yMax,d2yMax) - Math.max(d1y,d2y));
        return travelLane.left.intersectsWith(this.left)
            || travelLane.left.intersectsWith(this.right)
            || travelLane.right.intersectsWith(this.left)
            || travelLane.right.intersectsWith(this.right)


    }
}