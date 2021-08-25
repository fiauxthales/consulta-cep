import React from "react";
import ViaCep from "react-via-cep";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { cep: "" };

    this.handleChangeCep = this.handleChangeCep.bind(this);
    this.handleSuccess = this.handleSuccess.bind(this);
  }
  handleChangeCep(evt) {
    this.setState({ cep: evt.target.value });
  }
  handleSuccess(cepData) {
    console.log(cepData);
  }
  render() {
    return (
      <div className="App">
        <ViaCep cep={this.state.cep} onSuccess={this.handleSuccess} lazy>
          {({ data, loading, error, fetch }) => {
            if (loading) {
              return <p>loading...</p>;
            }
            if (error) {
              return <p>error</p>;
            }
            if (data) {
              return (
                <div>
                  <p>
                    CEP: {data.cep} <br />
                    LOGRADOURO: {data.logradouro} <br />
                    CIDADE: {data.localidade} <br />
                    UF: {data.uf} <br />
                  </p>
                </div>
              );
            }
            return (
              <div className="form-cep">
                <input
                  className="campocep"
                  onChange={this.handleChangeCep}
                  value={this.state.cep}
                  placeholder="CEP"
                  type="text"
                />
                <button className="BotaoPesquisaCep" onClick={fetch}>
                  Pesquisar
                </button>
              </div>
            );
          }}
        </ViaCep>
        <br />
      </div>
    );
  }
}

export default App;
