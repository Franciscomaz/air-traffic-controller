const escala = 1000

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

    airplanes.push(new Airplane(cartesian, new KilometersPerHour(velocidade, escala), new Degrees(direcao)))
}

//TODO
function editarAviao() {
    let x = document.getElementById("coordenada_x").value
    let y = document.getElementById("coordenada_y").value
    let raio = document.getElementById("raio").value
    let velocidade = document.getElementById("velocidade").value
    let angulo = document.getElementById("angulo").value
    let direcao = document.getElementById("direcao").value

    const cartesian = $('#cartesiano').is(':visible')
        ? new Cartesian(x, y)
        : Cartesian.fromPolar(Number(raio), new Degrees(angulo))
}

function avioesProximos() {
    const distanciaMinima = document.getElementById("distancia_minima_avioes").value
    const paresProximos = airplanes
        .pairs()
        .filter(pair => pair.distanceBetween() <= distanciaMinima)

    paresProximos.forEach(pair => {
        const distanceBetween = pair.distanceBetween()
        const mensagem = 'Avião '
            + pair.first.id
            + " está a "
            + distanceBetween.toFixed(2)
            + " Km do avião "
            + pair.second.id
        if (distanceBetween < 100) {
            notificator.danger(mensagem)
        } else {
            notificator.warning(mensagem)
        }
    })
}

function avioesProximosDoAeroporto() {
    const distanciaMinima = document.getElementById("distancia_minima_aeroporto").value

    const avioesComDistanciaMinima = airplanes
        .filter(airplane => airplane.coordinates.toPolar().radius <= distanciaMinima)

    avioesComDistanciaMinima.forEach(aviao => {
        notificator.warning('Avião: ' + aviao.id + " Distância: " + aviao.coordinates.toPolar().radiusToString())
    })
}

function avioesEmRotaDeColisao() {
    const tempoMinimoEmSegundos = document.getElementById("tempo_minimo").value

    airplanes
        .pairs()
        .filter(pair => pair.willCollideIn(tempoMinimoEmSegundos))
        .forEach(pair => {
            notificator.danger(
                "Avião " 
                + pair.first.id 
                + " irá colidir com o avião " 
                + pair.second.id
                + " em "
                + pair.timeToCollide().toFixed(2)
                + " segundos"
            )
        });
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
    $('#avioes input:checked').each(function () {
        ids.push($(this).attr('name'));
    });
    return ids
}

function toggleCoordenadas() {
    const polar = $('#polar')
    const cartesiano = $('#cartesiano')
    const botao = $('#toggle-coordenadas')
    if (cartesiano.is(':visible')) {
        botao.html('Polar')
        cartesiano.hide()
        polar.removeClass('d-none')
    } else {
        botao.html('Cartesiano')
        cartesiano.show()
        polar.addClass('d-none')
    }
}

function isModoSandbox() {
    return $('#sandbox').is('input:checked')
}
