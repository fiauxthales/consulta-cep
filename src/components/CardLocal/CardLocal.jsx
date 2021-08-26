import React, { Component } from "react";
import buscaEndereco from "../../api";

class CardLocal extends Component {

  state= {
    endereco: "" ,
  }

  async componentDidMount(){
    const caminho = this.props.cep + "/json";
    const resposta = await buscaEndereco.get(caminho);
    console.log(resposta.data);
    this.setState({endereco: resposta.data})
  }

  render(){
    const {endereco} = this.state;
    return(
      <section>
        <header>
          <h3>{this.props.cep}</h3>
        </header>
        <p>
          LOGRADOURO: {endereco.logradouro} <br />
          CIDADE: {endereco.localidade} <br />
          UF: {endereco.uf} <br />
        </p>
      </section>
    )
  }
}

export default CardLocal;