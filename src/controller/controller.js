function adicionarAviao() {
    airplanes.changed = true
    let x = document.getElementById("coordenada_x").value
    let y = document.getElementById("coordenada_y").value
    let angulo = document.getElementById("angulo").value
    let velocidade = document.getElementById("velocidade").value

    x = parseInt(x, 10) || 0
    y = -parseInt(y, 10) || 0
    angulo = parseInt(angulo, 10) || 0
    velocidade = parseInt(velocidade, 10) || 0


    const airplane = new Airplane(x, y, angulo, velocidade)
    this.centralizeAirplane(airplane)
    airplanes.push(airplane)
}

function centralizeAirplane(airplane) {
    const x = width / 2 - 16
    const y = height / 2 - 16
    new Transformator(airplane).translate(x, y)
}
