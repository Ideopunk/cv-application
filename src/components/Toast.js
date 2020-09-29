import React, { Component } from "react";

class Toast extends Component {
	handleClick = (e) => {
		e.preventdefault();
		document.getElementById("toast").classList.add("hide");
	};

	componentDidMount = () => {
        let toast = document.getElementById("toast")
        setTimeout(() => toast.classList.add("transition"), 0);
		setTimeout(() => toast.classList.add("hide"), 1000);
	};

	render() {
		return (
			<div id="toast" className="toast">
				Thank you for your submission!
				<button className="toast-button" onClick={this.handleClick}>
					x
				</button>
			</div>
		);
	}
}

export default Toast;
