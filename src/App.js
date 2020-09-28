import React, { Component } from "react";
import "./style/index.scss";
import Form from "./components/Form.js";
import ComplexForm from "./components/ComplexForm.js";

class App extends Component {
	initialSchool = {
		name: "School name",
		title: "Title of study",
		startDate: "Start date",
		endDate: "End date",
	};
	initialWork = {
		name: "Company name",
		title: "Position title",
		tasks: "Main tasks",
		startDate: "Start date",
		endDate: "End date",
	};

	initialState = {
		name: "Full name",
		phone: "Phone",
		email: "Email",
		education: [this.initialSchool],
		work: [this.initialWork],
	};

	state = JSON.parse(JSON.stringify(this.initialState));

	inputUpdate = (obj) => {
		this.setState(obj);
	};

	complexInputUpdate = (field, index, name, value) => {
		console.log(field, index, name, value)
		let currentState = this.state;
		currentState[field][index][name] = value;
		console.log(currentState)
		this.setState(currentState);
	};

	addEntry = field => {
		let currentState = this.state;
		if (field === "education") {
			currentState[field].push(this.initialSchool)
		} else {
			currentState[field].push(this.initialWork)
		}
		this.setState(currentState)
	}

	render() {
		const { name, phone, email, education, work } = this.state;
		const personal = { name, phone, email };
		return (
			<div className="App">
				<Form inputUpdate={this.inputUpdate} fields={personal} />
				<ComplexForm
					complexInputUpdate={this.complexInputUpdate}
					fieldName="education"
					addEntry={this.addEntry}
					fields={education}
				/>
				<ComplexForm
					complexInputUpdate={this.complexInputUpdate}
					fieldName="work"
					fields={work}
					addEntry={this.addEntry}
				/>

			</div>
		);
	}
}

export default App;
