import React, { Component } from "react";

class Form extends Component {
    

    handleChange = e => {
        this.props.inputUpdate({[e.target.name] : e.target.value})
    }

	handleSubmit = e => {
        e.preventDefault();
        alert('yo')
	}

	render() {
		const mapper = (object) => {
			let array = [];
			for (let key in object) {
				array.push(
					<label key={key}>
						{key}
						<input name={key} onChange={this.handleChange}></input>
					</label>
				);
			}
			return (
				<form className="forms-div" onSubmit={this.handleSubmit}>
					{array}
                    <input type="submit"></input>
				</form>
			);
		};
		const inputs = mapper(this.props.fields);
		return inputs;
	}
}

export default Form;
