class Airplanes extends Array{
    constructor() {
        super()
        this.changed = true
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

    isChanged() {
        return this.changed
    }
}