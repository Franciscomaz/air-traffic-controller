class Trajectory {
    constructor(start, end) {
        this.start = start
        this.end = end
    }

    minusX(number) {
        return new Trajectory(this.start.minusX(number), this.end.minusX(number))
    }

    intersectsWith(trajectory) {
        const denom = (trajectory.end.y - trajectory.start.y) * (this.end.x - this.start.x) - (trajectory.end.x - trajectory.start.x) * (this.end.y - this.start.y)
        const numeA = (trajectory.end.x - trajectory.start.x) * (this.start.y - trajectory.start.y) - (trajectory.end.y - trajectory.start.y) * (this.start.x - trajectory.start.x)
        const numeB = (this.end.x - this.start.x) * (this.start.y - trajectory.start.y) - (this.end.y - this.start.y) * (this.start.x - trajectory.start.x)

        if (denom == 0) {
            return true
        }

        let uA = numeA / denom
        let uB = numeB / denom

        return uA >= 0 && uA <= 1 && uB >= 0 && uB <= 1
    }
}