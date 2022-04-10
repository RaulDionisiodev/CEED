import React, { Component } from 'react';
import FormularioCadastro from './components/FormularioCadastro';
import ListaDeNotas from './components/ListadeNotas';
import "./assets/App.css";
import './assets/index.css';
import ListaDeCategoria from './components/ListaDeCategorias';
import Categoria from './dados/categoria';
import ArrayDeNotas from './dados/Notas';
class App extends Component {

  constructor() {
    super();
    this.categorias = new Categoria();
    this.notas = new ArrayDeNotas();

  }

  render() {
    return (
      <section className="conteudo">
        <FormularioCadastro
          categorias={this.categorias.categorias}
          criarNota={this.notas.adicionarNota} />
        <main className='conteudo-principal'>
          <ListaDeCategoria
            adicionarCategoria={this.categorias.adicionarCategoria}
            categorias={this.categorias.categorias} />
          <ListaDeNotas
            apagarNota={this.notas.apagarNotas}
            notas={this.notas.notas} />
        </main>

      </section>
    );
  }
}

export default App;
