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
