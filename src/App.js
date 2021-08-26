import React from "react";
import "./App.css";
import FormCep from "./components/FormCep";
import ListaDeLocais from "./components/ListaDeLocais";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      locais: [],
    };
  }

  criarCard(cep) {
    const novoCard = { cep };
    const novoArrayLocais = [...this.state.locais, novoCard];
    const novoEstado = {
      locais: novoArrayLocais,
    };
    this.setState(novoEstado);
  }

  render() {
    return (
      <div className="App">
        <FormCep criarCard={this.criarCard.bind(this)} />
        <ListaDeLocais locais={this.state.locais} />
      </div>
    );
  }
}

export default App;
