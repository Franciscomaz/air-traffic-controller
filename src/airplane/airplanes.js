class Airplanes extends Array {
    constructor() {
        super()
    }
    
    render() {
        this.forEach(airplane => {
            airplane.render()
        })
    }

    update() {
        this.forEach(airplane => {
            airplane.update()
        })
    }

    clone() {
        return this.slice(0)
    }
}