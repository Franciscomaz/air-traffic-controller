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

    makePairs() {
        let pairs = []
        for (let i = 0; i < this.length; i++) {
            for (let j = i + 1; j < this.length; j++) {
                pairs.push(new AirplanePair(this[i], this[j]))
            }
        }
        return pairs
    }

    clone() {
        return this.slice(0)
    }
}