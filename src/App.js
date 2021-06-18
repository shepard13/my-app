import logo from "./logo.svg";
import "./App.css";
import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
    };
  }
  hendleNumberAllLikes = (event) => {
    this.setState({
      allNumber: event.target.value,
    });
  };
  hendleNumberNeededLikes = (event) => {
    this.setState({
      neededNumber: event.target.value,
    });
  };
  hendleAmountMoney = (event) => {
    this.setState({
      amountOfMoney: event.target.value,
    });
  };
  hendleSubmit = (event) => {
    const allLikes = this.state.allNumber;
    const neededLikes = this.state.neededNumber;
    const amountOfMoney = this.state.amountOfMoney;
    const result = (neededLikes * amountOfMoney) / allLikes;

    alert(`${neededLikes} LIKES COST: ${result}$`);
  };

  render() {
    return (
      <form onSubmit={this.hendleSubmit}>
        <div className="container">
          <div className="fields">
            <label className="lable">SERVICE: </label>
            <input
              type="number"
              value={this.state.numberAllLikes}
              onChange={this.hendleNumberAllLikes}
            />
          </div>
          <br />
          <div className="fields">
            <label className="lable">COST: $</label>
            <input
              type="number"
              value={this.state.amountOfMoney}
              onChange={this.hendleAmountMoney}
            />
          </div>
          <br />
          <div className="fields">
            <label className="lable">AMOUNT NEEDED: </label>
            <input
              className="input"
              type="number"
              value={this.state.numberNeededLikes}
              onChange={this.hendleNumberNeededLikes}
            />
          </div>
          <br />
          <h1>
            {(this.state.neededNumber * this.state.amountOfMoney) /
              this.state.allNumber}
            $
          </h1>
        </div>
      </form>
    );
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Form />
      </header>
    </div>
  );
}

export default App;
