export default class Categoria {
    constructor(){
        this.categorias = [];
        this._isncritos = [];
    }

    inscrever(func){
        this._isncritos.push(func);
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