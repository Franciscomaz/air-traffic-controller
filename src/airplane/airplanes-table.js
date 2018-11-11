class AirplanesTable {
    render(airplanes) {
        airplanes.forEach(airplane => {
            if ($('#aviao-' + airplane.id).length === 0) {
                this.add(airplane)
            } else {
                this.update(airplane)
            }
        })
    }

    add(airplane) {
        const id = airplane.id
        const coordinates = airplane.coordinates
        const polar = coordinates.toPolar()

        let airplaneCell = '<tr id="aviao-' + id + '">'
        airplaneCell += '<td><input type="checkbox" name="' + airplane.id + '" /></td>'
        airplaneCell += '<td id="id-' + id + '">' + id + '</td>'
        airplaneCell += '<td id="x-' + id + '">' + coordinates.x.toFixed(2) + '</td>'
        airplaneCell += '<td id="y-' + id + '">' + coordinates.y.toFixed(2) + '</td>'
        airplaneCell += '<td id="angulo-' + id + '">' + polar.angle.toString() + '</td>'
        airplaneCell += '<td id="direcao-' + id + '">' + airplane.direction.toString() + '</td>'
        airplaneCell += '<td id="raio-' + id + '">' + polar.radiusToString() + '</td>'
        airplaneCell += '<td id="velocidade-' + id + '">' + airplane.speed.toString() + '</td>'
        airplaneCell += '</tr>'
        document.getElementById('avioes').innerHTML += airplaneCell
    }

    update(airplane) {
        const coordinates = airplane.coordinates
        const polar = coordinates.toPolar()
        document.getElementById('id-' + airplane.id).innerHTML = airplane.id
        document.getElementById('x-' + airplane.id).innerHTML = coordinates.x.toFixed(2)
        document.getElementById('y-' + airplane.id).innerHTML = coordinates.y.toFixed(2)
        document.getElementById('angulo-' + airplane.id).innerHTML = polar.angle.toString()
        document.getElementById('direcao-' + airplane.id).innerHTML = airplane.direction.toString()
        document.getElementById('raio-' + airplane.id).innerHTML = polar.radiusToString()
        document.getElementById('velocidade-' + airplane.id).innerHTML = airplane.speed.toString()
    }
}