function adicionarAviao() {
    airplanes.changed = true
    let x = document.getElementById("coordenada_x").value
    let y = document.getElementById("coordenada_y").value
    let raio = document.getElementById("raio").value
    let velocidade = document.getElementById("velocidade").value
    let angulo = document.getElementById("angulo").value
    let direcao = document.getElementById("direcao").value

    raio = Number(raio)
    velocidade = Number(velocidade)
    direcao = Number(direcao)

    const cartesian = $('#cartesiano').is(':visible')
        ? new Cartesian(x, y)
        : Cartesian.fromPolar(raio, new Degrees(angulo))

    airplanes.push(new Airplane(cartesian, velocidade, direcao))
}

function toggleCoordenadas() {
    const polar = $('#polar')
    const cartesiano = $('#cartesiano')
    const botao = $('#toggle-coordenadas')
    if (cartesiano.is(':visible')) {
        botao.html('Cartesiano')
        cartesiano.hide()
        polar.removeClass('d-none')
    } else {
        botao.html('Polar')
        cartesiano.show()
        polar.addClass('d-none')
    }
}
