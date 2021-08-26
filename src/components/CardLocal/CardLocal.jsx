import React, { Component } from "react";
import buscaEndereco from "../../api";
import "./CardLocal.css";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

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
      <Card>
        <CardContent>
          <Typography>{this.props.cep}</Typography>
          <ul className="inf-local flex-center">
            <li>{endereco.logradouro}</li>
            <li>{endereco.bairro}</li>
            <li>{endereco.localidade}</li>
            <li>{endereco.uf}</li>
          </ul>
        </CardContent>
      </Card>
    )
  }
}

export default CardLocal;