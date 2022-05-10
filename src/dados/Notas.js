export default class ArrayDeNotas{
    constructor(){
        this.notas = [];
        this._isncritos = [];
    }

    inscrever(func){

        this._isncritos.push(func);
    }

    desinscrever(func){
        this._isncritos = this._isncritos.filter(f => f !== func)
    }

    notificar(){
        this._isncritos.forEach( func => {
            func(this.notas)
        })
    }

    adicionarNota(titulo, texto, categoria){

        const novaNota = new Nota(titulo, texto, categoria);
        this.notas.push(novaNota)
        this.notificar();

    }

    apagarNotas(indice){
        this.notas.splice(indice, 1);
        this.notificar();
    }
}

class Nota {
    constructor(titulo, texto, categoria){
        this.titulo = titulo;
        this.texto = texto;
        this.categoria = categoria;
    }
}