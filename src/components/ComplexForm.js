import React, { Component } from "react";

class ComplexForm extends Component {
	state = {
		submitted: false,
	};

	toggleSubbmitted = (e) => {
		this.setState({ submitted: !this.state.submitted });
	};

	generateNewEntry = (e) => {
		e.preventDefault();
		console.log(this.state);
		this.props.addEntry(e.target.value);
	};

	removeEntry = (e) => {	
		e.preventDefault();
		console.log(e.target.value)
		this.props.removeEntry(e.target.name, e.target.value);
	};

	handleSubmit = (e) => {
		console.log(e.target);
		e.preventDefault();
		this.toggleSubbmitted();
	};

	handleChange = (e) => {
		console.log(e.target);
		this.props.complexInputUpdate(
			this.props.fieldName,
			e.target.getAttribute("data-index"),
			e.target.name,
			e.target.value
		);
	};

	render() {
		let jsxArray = [];

		let objectStuff = [];
		for (let field of this.props.fields) {
			objectStuff.push(Object.entries(field));
		}

		console.log(objectStuff)

		if (this.state.submitted === false) {
			for (let [index, form] of objectStuff.entries()) {
				let jsx = form.map((stuff) => {
					return (
						<label key={stuff[0]}>
							{stuff[0]}
							<input
								onChange={this.handleChange}
								type={stuff[0].includes("Date") ? "date" : "text"}
								name={stuff[0]}
								data-index={index}
								value={stuff[1]}
							></input>
						</label>
					);
				});
				jsxArray.push(
					<div className="form" key={index}>
						{jsx}
						<button onClick={this.removeEntry} value={index} name={this.props.fieldName}>x</button>
					</div>
				);
			}
		} else {
			for (let form of objectStuff) {
				let jsx = form.map((stuff, index) => {
					return (
						<div key={stuff[0]}>
							<h3>{stuff[0]}</h3>
							<p>{stuff[1]}</p>
						</div>
					);
				});
				jsxArray.push(jsx);
			}
		}

		return (
			<form className="form-container">
				<h2>{this.props.fieldName[0].toUpperCase() + this.props.fieldName.substring(1)}</h2>
				{jsxArray}
				<button value={this.props.fieldName} onClick={this.generateNewEntry}>
					+
				</button>
				{this.state.submitted ? (
					<button onClick={this.toggleSubbmitted}>Edit</button>
				) : (
					<input type="submit" onClick={this.handleSubmit}></input>
				)}
			</form>
		);
	}
}

export default ComplexForm;
