function adicionarAviao() {
    let x = document.getElementById("posicao_x").value
    let y = document.getElementById("posicao_y").value
    let angulo = document.getElementById("angulo").value
    let velocidade = document.getElementById("velocidade").value
    
    x = parseInt(x, 10)
    y = -parseInt(y, 10)
    angulo = parseInt(angulo, 10)
    velocidade = parseInt(velocidade, 10)

    airplanes.push(new Airplane(x, y, angulo, velocidade))
}