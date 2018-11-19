function adicionarAviao() {
    let x = document.getElementById("coordenada_x").value
    let y = document.getElementById("coordenada_y").value
    let raio = document.getElementById("raio").value
    let velocidade = document.getElementById("velocidade").value
    let angulo = document.getElementById("angulo").value
    let direcao = document.getElementById("direcao").value

    const cartesian = $('#cartesiano').is(':visible')
        ? new Cartesian(x, y)
        : Cartesian.fromPolar(Number(raio), new Degrees(angulo))

    airplanes.push(new Airplane(cartesian, new Speed(velocidade), new Degrees(direcao)))
}

function avioesProximosDoAeroporto() {
    let distanciaMinima = document.getElementById("distancia_minima_aeroporto").value

    const avioes = avioesSelecionados()
        .map(aviaoSelecionado => airplanes.find(airplane => airplane.id == aviaoSelecionado))

    console.log(avioes)

    const avioesComDistanciaMinima = avioes
        .filter(airplane => airplane.coordinates.toPolar().radius <= distanciaMinima)

    avioesComDistanciaMinima.forEach(aviao => {
        notificator.warning('ID: ' + aviao.id + " Distância: " + aviao.coordinates.toPolar().radiusToString())
    })
}

function transladar() {
    const x = document.getElementById('translacao_x').value
    const y = document.getElementById('translacao_y').value

    avioesSelecionados().forEach(aviaoSelecionado => {
        const aviao = airplanes.find(airplane => airplane.id == aviaoSelecionado)
        new Transformator(aviao).translate(new Cartesian(x, y))
    })
}

function rotacionar() {
    const x = document.getElementById('rotacao_x').value
    const y = document.getElementById('rotacao_y').value
    const angulo = document.getElementById('rotacao_angulo').value

    avioesSelecionados().forEach(aviaoSelecionado => {
        const aviao = airplanes.find(airplane => airplane.id == aviaoSelecionado)
        new Transformator(aviao).rotate(new Degrees(angulo), new Cartesian(x, y))
    })
}

function escalonar() {
    const x = document.getElementById('escalonamento_x').value
    const y = document.getElementById('escalonamento_y').value

    avioesSelecionados().forEach(aviaoSelecionado => {
        const aviao = airplanes.find(airplane => airplane.id == aviaoSelecionado)
        new Transformator(aviao).scale(Number(x), Number(y))
    })
}

function avioesSelecionados() {
    var ids = [];
    $('#avioes input:checked').each(function() {
        ids.push($(this).attr('name'));
    });
    return ids
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
