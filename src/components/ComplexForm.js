import React, { useState } from "react";
import Toast from "./Toast.js";

function ComplexForm(props) {
	const [submitted, setSubmitted] = useState(false);

	const toggleSubbmitted = () => {
		setSubmitted(!submitted);
	};

	const generateNewEntry = (e) => {
		e.preventDefault();
		console.log(submitted);
		props.addEntry(e.target.value);
	};

	const removeEntry = (e) => {
		e.preventDefault();
		props.removeEntry(e.target.name, e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		toggleSubbmitted();
	};

	const handleChange = (e) => {
		props.complexInputUpdate(
			props.fieldName,
			e.target.getAttribute("data-index"),
			e.target.name,
			e.target.value
		);
	};

	const inputOrArea = (name, value, index) => {
		if (name.includes("Tasks")) {
			return (
				<textarea
					onChange={handleChange}
					name={name}
					data-index={index}
					value={value}
				></textarea>
			);
		} else {
			return (
				<input
					onChange={handleChange}
					type={name.includes("date") ? "date" : "text"}
					name={name}
					data-index={index}
					value={value}
				></input>
			);
		}
	};

	let jsxArray = [];

	let objectStuff = [];
	for (let field of props.fields) {
		objectStuff.push(Object.entries(field));
	}

	if (submitted === false) {
		for (let [index, form] of objectStuff.entries()) {
			let jsx = form.map((stuff) => {
				return (
					<label key={stuff[0]} className="data">
						{stuff[0]}
						{inputOrArea(stuff[0], stuff[1], index)}
					</label>
				);
			});
			jsxArray.push(
				<div className="form" key={index}>
					{jsx}
					<button onClick={removeEntry} value={index} name={props.fieldName}>
						x
					</button>
				</div>
			);
		}
	} else {
		for (let form of objectStuff) {
			let jsx = form.map((stuff) => {
				return (
					<div key={stuff[0]} className={stuff[0] === "Tasks" ? "tasks" : ""}>
						<h3>{stuff[0]}</h3>
						<p>{stuff[1]}</p>
					</div>
				);
			});
			jsxArray.push(<div className="display">{jsx}</div>);
		}
	}

	return (
		<form className="container">
			<h2>{props.fieldName[0].toUpperCase() + props.fieldName.substring(1)}</h2>
			{jsxArray}
			<div className="button-container">
				{submitted ? (
					""
				) : (
					<button value={props.fieldName} onClick={generateNewEntry}>
						+
					</button>
				)}
				{submitted ? (
					<button onClick={toggleSubbmitted}>Edit</button>
				) : (
					<input type="submit" onClick={handleSubmit}></input>
				)}
				{submitted && <Toast />}
			</div>
		</form>
	);
}

export default ComplexForm;
