class Trajectory {
    constructor(start, end) {
        this.start = start
        this.end = end
    }

    minusX(number) {
        return new Trajectory(this.start.minusX(number), this.end.minusX(number))
    }

    distance() {
        return this.start.x - this.end.x
    }
}