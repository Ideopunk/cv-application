import React, { Component } from "react";

class Form extends Component {
    state = {
        submitted: false,
    }

    handleChange = e => {
        this.props.inputUpdate({[e.target.name] : e.target.value})
    }

	handleSubmit = e => {
        e.preventDefault();
        this.toggleSubbmitted()
        // this.setState({submitted: true})
        alert('yo')
	}

    toggleSubbmitted = () => {
        this.setState({submitted: !this.state.submitted})
    }

	render() {
		const inputMapper = (object) => {
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
        
        const displayMapper = (object) => {
            let array = [];
            for (let key in object) {
                array.push(
                    <div key={key}>
                        <h3>{key}</h3>
                        <p></p>
                    </div>
                )
            }
            return <div className="pretty">
                {array}
                <button onClick={this.toggleSubbmitted}>Edit</button>
            </div>
        }

        if (this.state.submitted === false) {
            return (inputMapper(this.props.fields))
        } else {
            return displayMapper(this.props.fields)
        }
	}
}

export default Form;
