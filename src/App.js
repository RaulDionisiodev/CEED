import React, { Component } from 'react';
import  FormularioCadastro  from './components/FormularioCadastro';
import  ListaDeNotas  from './components/ListadeNotas';
import "./assets/App.css";
import './assets/index.css';
class App extends Component {
  
  constructor(){
    super();
    this.notas = [];
    this.state = {
      notas: []
    };
  }

  criarNota(titulo, texto){
    const novaNota = {titulo, texto};
    const novoArrayDeNotas = [...this.state.notas, novaNota];
    const novoEstado = {
      notas : novoArrayDeNotas
    }
    this.setState(novoEstado)
  }

  deletarNota(index) {
    let arrayDeNotas = this.state.notas
    arrayDeNotas.splice(index, 1)
    this.setState({notas : arrayDeNotas})
    console.log("deletou")
  }

  render() {
    return (
      <section className="conteudo">
        <FormularioCadastro criarNota ={this.criarNota.bind(this)} />
        <ListaDeNotas 
          apagarNota = {this.deletarNota.bind(this)}
          notas = {this.state.notas} />
      </section>
    );
  }
}

export default App;
