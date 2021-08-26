import React, { Component } from "react";
import "./FormCep.css";

class FormCep extends Component {
  constructor(props){
    super(props);
    this.cep ="";
  }
  _handleMudancaCep(evento) {
    evento.stopPropagation();
    this.cep = evento.target.value;
  }
  _criarCard(evento){
    evento.preventDefault();
    evento.stopPropagation();
    this.props.criarCard(this.cep);
  }
  render(){
    return(
      <form className="form-cep"
      onSubmit={this._criarCard.bind(this)}>
        <input
          className="campocep"
          onChange={this._handleMudancaCep.bind(this)}
          placeholder="CEP"
          type="text"
        />
        <button className="botao-pesquisa-cep">
          Pesquisar
        </button>
      </form>
    )
  }
}

export default FormCep;