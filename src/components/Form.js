import React, { Component } from "react";

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
		switch(name) {
			case "email":
				return "Email address";
			case "phone": 
				return "Phone number";
			default: 
				return "Name"
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
		console.log(arrayOfArrays)
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
					<h2>{this.props.fieldName[0].toUpperCase() + this.props.fieldName.substring(1)}</h2>
					<div className="form">{jsx}</div>
					<input type="submit"></input>
				</form>
			);
		};

		const displayMapper = (arrayOfArrays) => {
			let jsx = arrayOfArrays.map((array) => (
				<div key={array[0]}>
					<h1>{array[0]}</h1>
					<p>{array[1]}</p>
				</div>
			));

			return (
				<div className="container">
					<h2>{this.props.fieldName[0].toUpperCase() + this.props.fieldName.substring(1)}</h2>
					{jsx}
					<button onClick={this.toggleSubbmitted}>Edit</button>
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
