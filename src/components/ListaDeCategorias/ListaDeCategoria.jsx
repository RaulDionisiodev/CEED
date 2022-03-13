import React, { Component } from 'react';

class ListaDeCategoria extends Component {
    _handleEventoInput(e){
        if(e.key === "Enter"){
            console.log("adicionar catgoria")
        }
    }
    render() {
        return (
            <section className='lista-categorias' >
                <ul className='lista-categorias_lista'>
                    <li className='lista-categorias_item'>Categorias</li>
                    <li className='lista-categorias_item'>Categorias</li>
                    <li className='lista-categorias_item'>Categorias</li>
                    <li className='lista-categorias_item'>Categorias</li>

                    <input type="text" className='lista-categorias_input'
                        placeholder='Adicionar categoria' 
                        onKeyUp={this._handleEventoInput.bind(this)}/>
                </ul>
            </section>
        )
    }
}

export default ListaDeCategoria;