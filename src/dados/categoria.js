export default class Categoria {
    constructor(){
        this.categorias = [];
    }

    adicionarCategoria(novaCategoria){
        this.categorias.push(novaCategoria)
    }
}