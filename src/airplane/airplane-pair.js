class AirplanePair {
    constructor(first, second) {
        this.first = first
        this.second = second
    }

    willCollideIn(seconds) {
        const firstDimensions = this.first.dimensions
        const secondDimensions = this.second.dimensions

        const firstEndPosition = this.first.estimatedPositionIn(seconds)
        const secondEndPosition = this.second.estimatedPositionIn(seconds)

        const firstLane = TravelLane.fromRightSide(new Trajectory(this.first.coordinates, firstEndPosition), firstDimensions.x)
        const secondLane = TravelLane.fromRightSide(new Trajectory(this.second.coordinates, secondEndPosition), secondDimensions.x)

        if(!firstLane.intersectsWith(secondLane)) return false


    }

    distanceBetween() {
        return this.first.coordinates.distanceBetween(this.second.coordinates)
    }
}