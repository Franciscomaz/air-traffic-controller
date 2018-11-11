const FPS = 60

const canvas = document.getElementById("canvas")
const ctx = canvas.getContext("2d")

const width = canvas.width
const height = canvas.height

const board = new Board()

const airplanes = new Airplanes()
const table = new AirplanesTable()

const notificator = new Notificator()
notificator.success('Radar iniciado.')

init()

function init() {
    setInterval(() => {
        render()
        update()
    }, 1000 / FPS)
}

function render() {
    board.render()
    table.render(airplanes)
    airplanes.render()
}

function update() {
    //board.update()
    //airplanes.update()
}
