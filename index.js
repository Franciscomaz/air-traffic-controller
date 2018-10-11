const FPS = 30

const width = 600;
const height = 600;

const c = document.getElementById("canvas");
const ctx = c.getContext("2d");

const airplanes = []

init()

function init() {
    setInterval(() => {
        render()
        update()
    }, 1000/FPS)
}

function render() {
    clear()
    drawBoard()
    drawAirplane()
}

function update() {
    airplanes.forEach(airplane => {
        airplane.move()
    })
}

function clear() {
    ctx.clearRect(0, 0, 600, 600);
}

function drawAirplane() {
    airplanes.forEach(airplane => {
        let img=document.createElement('img');
        img.src = 'airship.png'
        img.style = 'width: 1px; height: 1px;'

        ctx.font = "15px Arial";
        ctx.save();
        ctx.translate(width/2, height/2);
        ctx.rotate(airplane.angle*Math.PI/180);
        ctx.fillText(airplane.name, airplane.x, airplane.y);
        ctx.drawImage(img, airplane.x, airplane.y);
        ctx.restore();
    })
}

function drawBoard(){
    for (var x = 0; x <= width; x += 30) {
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
    }
    
    for (var x = 0; x <= height; x += 30) {
        ctx.moveTo(0, x);
        ctx.lineTo(width, x);
    }
    
    ctx.strokeStyle = "black";
    ctx.stroke();
}
