class Board {
    constructor() {}

    render() {
        this.clear()    

        let gridDimensions = width/15
        for (var x = 0; x <= width; x += gridDimensions) {
            ctx.moveTo(x, 0);
            ctx.lineTo(x, height);
        }
    
        for (var x = 0; x <= height; x += gridDimensions) {
            ctx.moveTo(0, x);
            ctx.lineTo(width, x);
        }
    
        ctx.strokeStyle = "black";
        ctx.stroke();
    }

    update() {
    }

    clear() {
        ctx.beginPath();
        ctx.clearRect(0, 0, width, height);
    }
}