import React, { Component } from "react";

class ComplexForm extends Component {

	toggleSubbmitted = () => {
		this.setState({ submitted: !this.state.submitted });
	};

	generateNewEntry = (e) => {
		e.preventDefault();
		console.log(this.state);
		this.props.addEntry(e.target.value)
		this.setState((prevState) => ({
			forms: prevState.forms + 1,
		}));
	};

	handleSubmit = (e) => {
		console.log(e.target);
		e.preventDefault();
		this.toggleSubbmitted();
	};

	handleChange = (e) => {
		console.log(e.target);
		this.props.complexInputUpdate(this.props.fieldName, e.target.getAttribute('data-index'), e.target.name, e.target.value);
	};

	render() {

		let bigArray = []
		for (let field of this.props.fields) {
			let objectStuff = Object.entries(field);
			let jsx = objectStuff.map((stuff, index) => {
				return (
					<label key={stuff[0]}>
						{stuff[0]}
						<input onChange={this.handleChange} name={stuff[0]} data-index={index} value={stuff[1]}></input>
					</label>
				);
			});
			bigArray.push(jsx)
		}

		return (
			<form className="pretty">
				<div className="solo-form">{bigArray}</div>
				<button value="education" onClick={this.generateNewEntry}>+</button>
				<input type="submit" onClick={this.handleSubmit}></input>
			</form>
		);
	}
}

export default ComplexForm;
