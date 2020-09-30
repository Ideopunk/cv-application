import React, { useEffect } from "react";

function Toast() {
	useEffect(() => {
		let toasts = document.getElementsByClassName("toast");
		for (let toast of toasts) {
			setTimeout(() => toast.classList.add("transition"), 0);
			setTimeout(() => toast.classList.add("hide"), 1000);
		}
	});

	return (
		<div id="toast" className="toast">
			Thank you for your submission! We've updated your profile!
		</div>
	);
}

export default Toast;
