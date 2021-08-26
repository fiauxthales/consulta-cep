import React, { Component } from "react";
import "./FormCep.css";
import Input from '@material-ui/core/Input'
import  Button  from '@material-ui/core/Button';

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
      <form className="form-cep flex-center"
      onSubmit={this._criarCard.bind(this)}>
        <Input
          onChange={this._handleMudancaCep.bind(this)}
          placeholder="CEP"
          type="text"
        />
        <Button color="primary" variant="contained" type="submit">
          Pesquisar
        </Button>
      </form>
    )
  }
}

export default FormCep;