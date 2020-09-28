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
		alert("yo");
	};

	toggleSubbmitted = () => {
		this.setState({ submitted: !this.state.submitted });
	};

	render() {
		let arrayOfArrays = Object.entries(this.props.fields);

		const inputMapper = (arrayOfArrays) => {
			let jsx = arrayOfArrays.map((array) => (
				<label key={array[0]}>
					{array[0]}
					<input name={array[0]} onChange={this.handleChange} value={array[1]}></input>
				</label>
			));

			return (
				<form className="forms-div pretty" onSubmit={this.handleSubmit}>
					{jsx}
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
				<div className="pretty">
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
