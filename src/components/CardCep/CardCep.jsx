import React, { Component } from "react";
class CardCep extends Component {
  render(){
    return(
      <section className="card-cep">
        <header>
          <h3>{this.props.cep}</h3>
        </header>
      </section>
    )
  }
}

export default CardCep;