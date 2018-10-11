const FPS = 60

const width = 500;
const height = 500;

const c = document.getElementById("canvas");
const ctx = c.getContext("2d");

const airplanes = []

init()

function init() {
    setInterval(() => {
        render()
        update()
    }, 1000 / FPS)
}

function render() {
    clear()
    drawBoard()
    drawTable()
    drawAirplane()
}

function update() {
    airplanes.forEach(airplane => {
        let tempWidth = width / 2;
        let tempHeight = height / 2;
        if (airplane.x < -tempWidth) {
            airplane.x = tempWidth
        } else if (airplane.x > tempWidth) {
            airplane.x = -tempWidth
        }
        if (airplane.y > tempHeight) {
            airplane.y = -tempHeight
        } else if (airplane.y < -tempHeight) {
            airplane.y = tempHeight
        }
        airplane.move()
    })
}

function clear() {
    ctx.beginPath();
    ctx.clearRect(0, 0, 600, 600);
}

function drawAirplane() {
    airplanes.forEach(airplane => {
        let img = document.createElement('img');
        img.src = 'airship.png'
        ctx.font = "15px Arial";
        ctx.save();
        ctx.translate(width / 2 - 16, height / 2 - 16);
        ctx.rotate(airplane.angle * Math.PI / 180);
        ctx.fillText(airplane.name, airplane.x, airplane.y);
        ctx.drawImage(img, airplane.x, airplane.y);
        ctx.restore();
    })
}

function drawBoard() {
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

function drawTable() {
    let tBody = document.getElementById('avioes')
    let airplanesTable = '';
    airplanes.forEach(airplane => {
        airplaneCell = '<tr>'
        airplaneCell += '<td>' + airplane.name + '</td>'
        airplaneCell += '<td>' + airplane.x + '</td>'
        airplaneCell += '<td>' + airplane.y + '</td>'
        airplaneCell += '<td>' + airplane.speed + '</td>'
        airplaneCell += '<td>' + airplane.angle + '</td>'
        airplaneCell += '</tr>'
        airplanesTable += airplaneCell;
    })
    tBody.innerHTML = airplanesTable
}
