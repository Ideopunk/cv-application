import React, { Component } from "react";

class ComplexForm extends Component {
	state = {
		forms: 1,
		submitted: false,
	};

	toggleSubbmitted = () => {
		this.setState({ submitted: !this.state.submitted });
	};

	generateNewEntry = (e) => {
		e.preventDefault();
		console.log(this.state);
		this.setState((prevState) => ({
			forms: prevState.forms + 1,
		}));
	};

	removeEntry = (e) => {
		e.preventDefault();
		if (this.state.forms > 1) {
			this.setState((prevState) => ({
				forms: prevState.forms - 1,
			}));
		}
	};

	handleSubmit = (e) => {
        console.log(e.target);
		e.preventDefault();
		this.toggleSubbmitted();
	};

	handleChange = (e) => {
        console.log(e.target)
        this.props.inputUpdate(this.props.fieldName, e.target.name, e.target.value )
    };

	render() {

		let inputarray = [];
		for (let i = 0; i < this.state.forms; i++) {
            let input = this.props.fields.map((field) => (
                <label key={field}>
                    {field}
                    <input onChange={this.handleChange} name={i} value={field}></input>
                </label>
            ));
			inputarray.push(input);
		}

		return (
			<form className="pretty">
				<div className="solo-form">{inputarray}</div>
				<button onClick={this.generateNewEntry}>+</button>
				<button onClick={this.removeEntry}>-</button>
				<input type="submit" onClick={this.handleSubmit}></input>
			</form>
		);
	}
}

export default ComplexForm;
