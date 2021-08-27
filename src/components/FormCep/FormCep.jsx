import React, { Component } from "react";
import "./FormCep.css";
import Input from '@material-ui/core/Input'
import  Button  from '@material-ui/core/Button';
import { Box } from "@material-ui/core";

class FormCep extends Component {

  constructor(props){
    super(props);
    this.cep ="";
    this.boxestilo = {
      margin: 80,
    }
    this.buttonEstilo = {
      marginLeft: 30, background: '#00652E'
    }
    this.inputEstilo = {
    }
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
      <Box style={this.boxestilo} display="flex" justifyContent="center">
        <form justifyContent="center"
        onSubmit={this._criarCard.bind(this)}>
          <Input 
            onChange={this._handleMudancaCep.bind(this)}
            placeholder="CEP"
            type="text"
          />
          <Button style={this.buttonEstilo} color="primary" variant="contained" type="submit">
            Pesquisar
          </Button>
        </form>
      </Box>
    )
  }
}

export default FormCep;