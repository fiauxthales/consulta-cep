import React, { Component } from "react";
import CardLocal from "../CardLocal";
class ListaDeLocais extends Component {
  render(){
    return(
    <ul>
      {this.props.locais.map((local, index) => {
        return(
          <li key={index}>
            <CardLocal cep={local.cep}/>
          </li>
        );
      })}
    </ul>
    );
  }

}

export default ListaDeLocais;