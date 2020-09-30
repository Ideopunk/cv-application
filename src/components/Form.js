import React, { useState } from "react";
import Toast from "./Toast.js";

function Form(props) {

	const [submitted, setSubmitted] = useState(false)

	const handleChange = (e) => {
		props.inputUpdate({ [e.target.name]: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		toggleSubbmitted();
	};

	const toggleSubbmitted = () => {
		setSubmitted(!submitted);
	};

	const nameSwitch = (name) => {
		switch (name) {
			case "email":
				return "Email address";
			case "phone":
				return "Phone number";
			default:
				return "Name";
		}
	}

	const typeSwitch = (type) => {
		switch (type) {
			case "phone":
				return "tel";
			case "email":
				return "email";
			default:
				return "text";
		}
	}

	let arrayOfArrays = Object.entries(props.fields);
	console.log(arrayOfArrays);

	const inputMapper = (arrayOfArrays) => {
		let jsx = arrayOfArrays.map((array) => (
			<label key={array[0]} className="data">
				{nameSwitch(array[0])}
				<input
					type={typeSwitch(array[0])}
					name={array[0]}
					onChange={handleChange}
					value={array[1]}
					required
				></input>
			</label>
		));

		return (
			<form className="container" onSubmit={handleSubmit}>
				<h2>
					{props.fieldName[0].toUpperCase() + props.fieldName.substring(1)}
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
					{props.fieldName[0].toUpperCase() + props.fieldName.substring(1)}
				</h2>
				<div className="display">{jsx}</div>
				<div className="button-container">
					<button onClick={toggleSubbmitted}>Edit</button>
				</div>
				<Toast />
			</div>
		);
	};

	if (submitted === false) {
		return inputMapper(arrayOfArrays);
	} else {
		return displayMapper(arrayOfArrays);
	}
}

export default Form;
