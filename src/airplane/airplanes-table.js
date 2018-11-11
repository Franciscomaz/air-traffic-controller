class AirplanesTable {
    render(airplanes) {
        if (!airplanes.isChanged()){
            return;
        }
        let tBody = document.getElementById('avioes')
        let airplanesTable = '';
        airplanes.forEach(airplane => {
            const coordinates = airplane.coordinates
            const polar = coordinates.toPolar()
            let airplaneCell = '<tr>'
            airplaneCell += '<td><input type="checkbox" /></td>'
            airplaneCell += '<td>' + airplane.id + '</td>'
            airplaneCell += '<td>' + coordinates.x.toFixed(2) + '</td>'
            airplaneCell += '<td>' + coordinates.y.toFixed(2) + '</td>'
            airplaneCell += '<td>' + polar.angle.value.toFixed(2) + ' °' + '</td>'
            airplaneCell += '<td>' + airplane.direction.value.toFixed(2) + ' °' + '</td>'
            airplaneCell += '<td>' + polar.radius.toFixed(2) + ' Km' + '</td>'
            airplaneCell += '<td>' + airplane.speed.toFixed(2) + ' Km' + '</td>'
            airplaneCell += '</tr>'
            airplanesTable += airplaneCell;
            airplanes.changed = false
        })
        tBody.innerHTML = airplanesTable
    }
}