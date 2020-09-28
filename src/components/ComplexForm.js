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

		if (this.state.submitted === false) {
			for (let form of objectStuff) {
				let jsx = form.map((stuff, index) => {
					return (
						<label key={stuff[0]}>
							{stuff[0]}
							<input
								onChange={this.handleChange}
								name={stuff[0]}
								data-index={index}
								value={stuff[1]}
							></input>
						</label>
					);
				});
				jsxArray.push(jsx);
			}
		} else {
			for (let form of objectStuff) {
				let jsx = form.map((stuff, index) => {
					return (
						<div>
							<h3>{stuff[0]}</h3>
							<p>{stuff[1]}</p>
						</div>
					);
				});
				jsxArray.push(jsx);
			}
		}

		return (
			<form className="pretty">
				<div className="solo-form">{jsxArray}</div>
				<button value="education" onClick={this.generateNewEntry}>
					+
				</button>
				{this.state.submitted? <button onClick={this.toggleSubbmitted}>Edit</button> : <input type="submit" onClick={this.handleSubmit}></input> }
			</form>
		);
	}
}

export default ComplexForm;
