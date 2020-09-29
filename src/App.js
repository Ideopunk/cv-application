import React, { Component } from "react";
import "./style/index.scss";
import Form from "./components/Form.js";
import ComplexForm from "./components/ComplexForm.js";

class App extends Component {
	initialSchool = {
		"School name": "School name",
		"Title of study": "Title of study",
		"Start date": "2000-01-01",
		"End date": "2000-01-01",
	};
	initialWork = {
		"Company name": "Company name",
		"Position title": "Position title",
		"Tasks": "List your main tasks in this position",
		"Start date": "2000-01-01",
		"End date": "2000-01-01",
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
		let currentState = this.state;
		currentState[field][index][name] = value;
		this.setState(currentState);
	};

	addEntry = field => {
		let currentState = this.state;
		if (field === "education") {
			currentState[field].push(JSON.parse(JSON.stringify(this.initialSchool)))
		} else {
			currentState[field].push(JSON.parse(JSON.stringify(this.initialWork)))
		}
		this.setState(currentState)
		console.log(this.initialSchool, this.initialWork)
	}

	removeEntry = (field, index) => {
		let currentState = this.state
		currentState[field].splice(index, 1)
		this.setState(currentState)
	}

	render() {
		const { name, phone, email, education, work } = this.state;
		const personal = { name, phone, email };
		return (
			<div className="App">
				<header><h1>CV</h1></header>
				<Form inputUpdate={this.inputUpdate} fieldName="personal" fields={personal} />
				<ComplexForm
					complexInputUpdate={this.complexInputUpdate}
					fieldName="education"
					fields={education}
					addEntry={this.addEntry}
					removeEntry={this.removeEntry}
				/>
				<ComplexForm
					complexInputUpdate={this.complexInputUpdate}
					fieldName="work"
					fields={work}
					addEntry={this.addEntry}
					removeEntry={this.removeEntry}
				/>

			</div>
		);
	}
}

export default App;
