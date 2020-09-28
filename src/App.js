import React, { Component } from "react";
import "./style/index.scss";
import Form from "./components/Form.js";

class App extends Component {
	initialState = {
		name: "Please type your full name",
		phone: "",
		email: "",
		education: [],
		work: [],
	};

  state = this.initialState

  inputUpdate = obj => {
    this.setState(obj)
  }

	render() {
    const {name, phone, email, education, work} = this.state
    const personal = {name, phone, email}
		return (
			<div className="App">
				<p>yo</p>
				<Form inputUpdate={this.inputUpdate} fields={personal}  />
			</div>
		);
	}
}

export default App;
