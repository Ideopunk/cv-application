import React, { Component } from "react";
import "./style/index.scss";
import Form from "./components/Form.js";
import ComplexForm from "./components/ComplexForm.js";

class App extends Component {
	initialState = {
		name: "Full name",
		phone: "Phone",
		email: "Email",
		education: [],
		work: [],
	};

	state = this.initialState;

	inputUpdate = (obj) => {
		this.setState(obj);
	};

	complexInputUpdate = (name, index, value) => {
		let currentState = this.state;
		currentState[name][index] = value;
		this.setState(currentState);
	};

	render() {
		const { name, phone, email, education, work } = this.state;
		const personal = { name, phone, email };
		return (
			<div className="App">
				<p>yo</p>
				<Form inputUpdate={this.inputUpdate} fields={personal} />
				<ComplexForm
					inputUpdate={this.complexInputUpdate}
					fieldName="education"
					stateField={education}
					fields={["School name", "Title of study", "Start date", "End date"]}
				/>
				<ComplexForm
					inputUpdate={this.complexInputUpdate}
					fieldName="work"
					stateField={work}
					fields={[
						"Company name",
						"Position title",
						"Main tasks",
						"Start date",
						"End date",
					]}
				/>
			</div>
		);
	}
}

export default App;
