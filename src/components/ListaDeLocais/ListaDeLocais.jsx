import React, { Component } from "react";
import CardLocal from "../CardLocal";
import "./ListaDeLocais.css";
class ListaDeLocais extends Component {
  render(){
    return(
    <ul className="lista-de-locais flex-center">
      {this.props.locais.map((local, index) => {
        return(
          <li key={index} className="li-card">
            <CardLocal cep={local.cep}/>
          </li>
        );
      })}
    </ul>
    );
  }

}

export default ListaDeLocais;