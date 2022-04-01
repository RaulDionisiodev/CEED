import React, { Component } from "react";
import "./estilo.css"

class FormularioCadastro extends Component {

    constructor(props) {
        super(props);
        this.titulo = "";
        this.texto = "";

    }

    _handlerMudancaTitulo(evento) {
        evento.stopPropagation();
        this.titulo = evento.target.value;
    }

    _handlerMudancatexto(evento) {
        evento.stopPropagation();
        this.texto = evento.target.value;
    }

    _criarNota(evento){
        evento.preventDefault();
        evento.stopPropagation();
        this.props.criarNota(this.titulo, this.texto);
    }

    render() {
        return (
            <form className="form-cadastro"
            onSubmit={this._criarNota.bind(this)}>
                <select className="form-cadastro-input">
                    {this.props.categorias.map(categoria => {
                        return <option>{categoria}</option>
                    })}
                </select>
                <input
                    type='text'
                    placeholder='Título'
                    className="form-cadastro_input"
                    onChange={this._handlerMudancaTitulo.bind(this)}
                ></input>
                <textarea
                    rows={15}
                    className="form-cadastro_input"
                    placeholder='Escreva sua nota...'
                    onChange={this._handlerMudancatexto.bind(this)} />
                <button className="form-cadastro_input form-cadastro_submit" >
                    Criar nota
                </button>
            </form>
        );
    }
}

export default FormularioCadastro;

