class Notificator {
    constructor() {
        this.element = document.getElementById('notificacoes')
    }

    success(msg) {
        this.notify(this.createLayout('alert-success', msg))
    }

    warning(msg) {
        this.notify(this.createLayout('alert-warning', msg))
    }

    danger(msg) {
        this.notify(this.createLayout('alert-danger', msg))
    }

    createLayout(type, msg) {
        return '<div class="alert ' + type + '">' + this.formatMessage(msg) + '</div>'
    }

    formatMessage(msg) {
        var today = new Date()
        var day = today.getDay()
        var month = today.getMonth()
        var year = today.getFullYear()

        var hours = today.getHours()
        var minutes = today.getMinutes()
        var seconds = today.getSeconds()

        const formatedDate = day + '/' + month + '/' + year + ' ' + hours + ':' + minutes + ':' + seconds
        return '<strong>' + formatedDate + ': </strong>' + msg
    }

    notify(layout) {
        console.log(this.element)
        this.element.innerHTML += layout
    }
}