import React, { Component } from "react";
import Toast from "./Toast.js";

class Form extends Component {
	state = {
		submitted: false,
	};

	handleChange = (e) => {
		this.props.inputUpdate({ [e.target.name]: e.target.value });
	};

	handleSubmit = (e) => {
		e.preventDefault();
		this.toggleSubbmitted();
	};

	toggleSubbmitted = () => {
		this.setState({ submitted: !this.state.submitted });
	};

	nameSwitch(name) {
		switch (name) {
			case "email":
				return "Email address";
			case "phone":
				return "Phone number";
			default:
				return "Name";
		}
	}

	typeSwitch(type) {
		switch (type) {
			case "phone":
				return "tel";
			case "email":
				return "email";
			default:
				return "text";
		}
	}

	render() {
		let arrayOfArrays = Object.entries(this.props.fields);
		console.log(arrayOfArrays);
		const inputMapper = (arrayOfArrays) => {
			let jsx = arrayOfArrays.map((array) => (
				<label key={array[0]} className="data">
					{this.nameSwitch(array[0])}
					<input
						type={this.typeSwitch(array[0])}
						name={array[0]}
						onChange={this.handleChange}
						value={array[1]}
						required
					></input>
				</label>
			));

			return (
				<form className="container" onSubmit={this.handleSubmit}>
					<h2>
						{this.props.fieldName[0].toUpperCase() + this.props.fieldName.substring(1)}
					</h2>
					<div className="form">{jsx}</div>
					<div className="button-container">
						<input type="submit"></input>
					</div>
				</form>
			);
		};

		const displayMapper = (arrayOfArrays) => {
			let jsx = arrayOfArrays.map((array) => (
				<div key={array[0]}>
					<h3>{array[0][0].toUpperCase() + array[0].substring(1)}</h3>
					<p>{array[1]}</p>
				</div>
			));

			return (
				<div className="container">
					<h2>
						{this.props.fieldName[0].toUpperCase() + this.props.fieldName.substring(1)}
					</h2>
					<div className="display">{jsx}</div>
					<div className="button-container">
						<button onClick={this.toggleSubbmitted}>Edit</button>
					</div>
					<Toast />
				</div>
			);
		};

		if (this.state.submitted === false) {
			return inputMapper(arrayOfArrays);
		} else {
			return displayMapper(arrayOfArrays);
		}
	}
}

export default Form;
