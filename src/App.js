import React from "react";
import "./App.css";
import FormCep from "./components/FormCep";
import CepList from "./components/CepList";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { ceps: [] };
  }

  criarCep(cep) {
    const novoCep = { cep };
    const novoArrayCeps = [...this.state.ceps, novoCep];
    const novoEstado = {
      notas: novoArrayCeps,
    };
    this.setState(novoEstado);
  }

  render() {
    return (
      <div className="App">
        <FormCep criarCep={this.criarCep.bind(this)} />
        <CepList ceps={this.state.ceps} />
      </div>
    );
  }
}

export default App;
