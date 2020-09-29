import React, { Component } from "react";
import Toast from "./Toast.js";

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
		this.props.removeEntry(e.target.name, e.target.value);
	};

	handleSubmit = (e) => {
		e.preventDefault();
		this.toggleSubbmitted();
	};

	handleChange = (e) => {
		this.props.complexInputUpdate(
			this.props.fieldName,
			e.target.getAttribute("data-index"),
			e.target.name,
			e.target.value
		);
	};

	inputOrArea = (name, value, index) => {
		if (name.includes('Tasks')) {
			return (
				<textarea
					onChange={this.handleChange}
					name={name}
					data-index={index}
					value={value}
				></textarea>
			)
		} else {
			return (
				<input
					onChange={this.handleChange}
					type={name.includes("date") ? "date" : "text"}
					name={name}
					data-index={index}
					value={value}
				></input>
			)
		}
	}

	render() {
		let jsxArray = [];

		let objectStuff = [];
		for (let field of this.props.fields) {
			objectStuff.push(Object.entries(field));
		}


		if (this.state.submitted === false) {
			for (let [index, form] of objectStuff.entries()) {
				let jsx = form.map((stuff) => {
					return (
						<label key={stuff[0]} className="data">
							{stuff[0]}
							{this.inputOrArea(stuff[0], stuff[1], index)}
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
						<div key={stuff[0]} className={stuff[0]==="Tasks"? "tasks" : ""}>
							<h3>{stuff[0]}</h3>
							<p>{stuff[1]}</p>
						</div>
					);
				});
				// jsxArray.push(jsx);
				jsxArray.push(
					<div className="display">{jsx}</div>
				);
			}
		}

		return (
			<form className="container">
				<h2>{this.props.fieldName[0].toUpperCase() + this.props.fieldName.substring(1)}</h2>
				{jsxArray}
				<div className="button-container">
					{this.state.submitted ? "" :
					<button value={this.props.fieldName} onClick={this.generateNewEntry}>
						+
					</button>}
					{this.state.submitted ? (
						<button onClick={this.toggleSubbmitted}>Edit</button>
					) : (
						<input type="submit" onClick={this.handleSubmit}></input>
					)}
					{this.state.submitted && <Toast />}
				</div>
			</form>
		);
	}
}

export default ComplexForm;
