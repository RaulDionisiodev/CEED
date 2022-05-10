export default class Categorias {
    constructor(){
        this.categorias = [];
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
            func(this.categorias)
        })
    }

    adicionarCategoria(novaCategoria){
        this.categorias.push(novaCategoria)
        this.notificar()
    }
}