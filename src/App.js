import React, { Component } from 'react';
import FormularioCadastro from './components/FormularioCadastro';
import ListaDeNotas from './components/ListadeNotas';
import "./assets/App.css";
import './assets/index.css';
import ListaDeCategoria from './components/ListaDeCategorias';
class App extends Component {

  constructor() {
    super();
    
    this.state = {
      notas: [],
      categorias: []
    };
  }

  criarNota(titulo, texto) {
    const novaNota = { titulo, texto };
    const novoArrayDeNotas = [...this.state.notas, novaNota];
    const novoEstado = {
      notas: novoArrayDeNotas
    }
    this.setState(novoEstado)
  }

  adicionarCategoria(nomeCategoria){
    const novoArrayCategorias = [...this.state.categorias, nomeCategoria]
    const novoEstado = {...this.state, categorias: novoArrayCategorias}
    this.setState(novoEstado)
  }

  deletarNota(index) {
    let arrayDeNotas = this.state.notas
    arrayDeNotas.splice(index, 1)
    this.setState({ notas: arrayDeNotas })
    console.log("deletou")
  }

  render() {
    return (
      <section className="conteudo">
        <FormularioCadastro
          categorias={this.state.categorias}
          criarNota={this.criarNota.bind(this)} />
        <main className='conteudo-principal'>
          <ListaDeCategoria
            adicionarCategoria={this.adicionarCategoria.bind(this)}
            categorias={this.state.categorias} />
          <ListaDeNotas
            apagarNota={this.deletarNota.bind(this)}
            notas={this.state.notas} />
        </main>

      </section>
    );
  }
}

export default App;
