class Speed {
    constructor(value) {
        this.value = Number(value)
    }

    toString() {
        return this.value.toFixed(2) + ' Km'
    }
}