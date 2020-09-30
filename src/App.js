import React, { useState } from "react";
import "./style/index.scss";
import Form from "./components/Form.js";
import ComplexForm from "./components/ComplexForm.js";

function App(props) {
	const initialSchool = [
		{
			"School name": "School name",
			"Title of study": "Title of study",
			"Start date": "2000-01-01",
			"End date": "2000-01-01",
		},
	];

	const initialWork = [
		{
			"Company name": "Company name",
			"Position title": "Position title",
			Tasks: "List your main tasks in this position.",
			"Start date": "2000-01-01",
			"End date": "2000-01-01",
		},
	];

	const [personal, setPersonal] = useState({ name: "Full name", phone: "Phone", email: "Email" });
	const [work, setWork] = useState(initialWork);
	const [school, setSchool] = useState(initialSchool);

	const inputUpdate = (key, value) => {
		setPersonal((personal) => ({ ...personal, [key]: value }));
	};

	// uhhhh
	const complexInputUpdate = (field, i, name, value) => {
		console.log(field, i, name, value);
		if (field === "education") {
			setSchool((school) =>
				school.map((entry, index) => {
					if (index === i) {
						entry[name] = value;
					}
					return entry;
				})
			);
		} else {
			setWork((work) =>
				work.map((entry, index) => {
					if (index === i) {
						entry[name] = value;
					}
					return entry;
				})
			);
		}
	};

	const addEntry = (field) => {
		if (field === "education") {
			setSchool((school) => [...school, JSON.parse(JSON.stringify(initialSchool[0]))]);
		} else {
			setWork((work) => [...work, JSON.parse(JSON.stringify(initialWork[0]))]);
		}
		console.log(initialSchool, initialWork);
	};

	const removeEntry = (field, i) => {
		console.log(field, i);
		if (field === "education") {
			const newSchool = school.filter((entry, index) => index !== i);
			setSchool(newSchool);
		} else {
			const newWork = work.filter((entry, index) => index !== i);
			setWork(newWork);
		}
	};

	return (
		<div className="App">
			<header>
				<h1>CV Submission</h1>
			</header>
			<Form inputUpdate={inputUpdate} fieldName="personal" fields={personal} />
			<ComplexForm
				complexInputUpdate={complexInputUpdate}
				fieldName="education"
				fields={school}
				addEntry={addEntry}
				removeEntry={removeEntry}
			/>
			<ComplexForm
				complexInputUpdate={complexInputUpdate}
				fieldName="work"
				fields={work}
				addEntry={addEntry}
				removeEntry={removeEntry}
			/>
			<div className="fake"></div>
		</div>
	);
}

export default App;
