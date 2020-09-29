import React, { Component } from "react";

class Toast extends Component {
	componentDidMount = () => {
        let toast = document.getElementById("toast")
        setTimeout(() => toast.classList.add("transition"), 0);
		setTimeout(() => toast.classList.add("hide"), 1000);
	};

	render() {
		return (
			<div id="toast" className="toast">
				Thank you for your submission! We've updated your profile!
			</div>
		);
	}
}

export default Toast;
