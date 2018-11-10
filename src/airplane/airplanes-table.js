class AirplanesTable {
    render(airplanes) {
        if (!airplanes.isChanged()){
            return;
        }
        let tBody = document.getElementById('avioes')
        let airplanesTable = '';
        airplanes.forEach(airplane => {
            let airplaneCell = '<tr>'
            airplaneCell += '<td><input type="checkbox" /></td>'
            airplaneCell += '<td>' + airplane.name + '</td>'
            airplaneCell += '<td>' + airplane.x + '</td>'
            airplaneCell += '<td>' + airplane.y + '</td>'
            airplaneCell += '<td>' + airplane.speed + '</td>'
            airplaneCell += '<td>' + airplane.angle + '</td>'
            airplaneCell += '</tr>'
            airplanesTable += airplaneCell;
            airplanes.changed = false
        })
        tBody.innerHTML = airplanesTable
    }

    update() {

    }
}