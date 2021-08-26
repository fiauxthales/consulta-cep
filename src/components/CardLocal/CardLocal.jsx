import React, { Component } from "react";
import buscaEndereco from "../../api";
import "./CardLocal.css";

class CardLocal extends Component {

  state= {
    endereco: "" ,
  }

  async componentDidMount(){
    const caminho = this.props.cep + "/json";
    const resposta = await buscaEndereco.get(caminho);
    this.setState({endereco: resposta.data})
  }

  render(){
    var {endereco} = this.state;
    return(
      <section className="card-local flex-center">
        <header>
          <h3 className="cep">{this.props.cep}</h3>
        </header>
        <ul className="inf-local flex-center">
          <li>{endereco.logradouro}</li>
          <li>{endereco.bairro}</li>
          <li>{endereco.localidade}</li>
          <li>{endereco.uf}</li>
        </ul>
      </section>
    )
  }
}

export default CardLocal;