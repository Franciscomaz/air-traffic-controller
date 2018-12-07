class TravelLane {
    constructor(left, right) {
        this.left = left
        this.right = right
    }

    static fromRightSide(rightSide, distanceBetween) {
        return new TravelLane(rightSide.minusX(distanceBetween), rightSide)
    }

    intersectsWith(travelLane) {
        return travelLane.x >= this.x &&
            travelLane.x <= this.x &&
            travelLane.y >= this.y &&
            travelLane.y <= this.y
    }
}