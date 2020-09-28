import React, { Component } from "react";
import "./style/index.scss";
import {Form, ComplexForm} from "./components/Form.js";

class App extends Component {
	initialState = {
		name: "Full name",
		phone: "Phone",
		email: "Email",
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
        <ComplexForm inputUpdate={this.inputUpdate} fields={education} />
        <ComplexForm inputUpdate={this.inputUpdate} fields={work} />
			</div>
		);
	}
}

export default App;
