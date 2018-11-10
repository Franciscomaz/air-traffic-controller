function adicionarAviao() {
    airplanes.changed = true
    let x = document.getElementById("coordenada_x").value
    let y = document.getElementById("coordenada_y").value
    let raio = document.getElementById("raio").value
    let velocidade = document.getElementById("velocidade").value
    let angulo = document.getElementById("angulo").value
    let direcao = document.getElementById("direcao").value

    x = Number(x)
    y = Number(y)
    raio = Number(raio)
    velocidade = Number(velocidade)
    angulo = Number(angulo)
    direcao = Number(direcao)

    const airplane = new Airplane(x, y, angulo, velocidade, raio, direcao)
    airplanes.push(airplane)
}

