import React, { Component } from "react";
import CardCep from "../CardCep";
class CepList extends Component {
  render(){
    return(
    <ul>
      {this.props.ceps.map((cep,index) => {
        return(
          <li key={index}>
            <CardCep cep={cep.cep}/>
          </li>
        );
      })}
    </ul>
    );
  }

}

export default CepList;