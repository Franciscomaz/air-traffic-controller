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

    notify(layout) {
        this.element.innerHTML += layout
    }

    createLayout(type, msg) {
        return '<div class="alert ' + type + '">' + this.formatMessage(msg) + '</div>'
    }

    formatMessage(msg) {
        const formatedDate = new Date().toLocaleString('pt-BR')
        return '<strong>' + formatedDate + ': </strong>' + msg
    }
}