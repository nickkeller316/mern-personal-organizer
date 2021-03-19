import React, { useState } from "react";
import LoginHook from "../components/LoginHooks";
import App from "../App";

function PageSwitcher() {
	const [loggedIn, setLoggedIn] = useState(false);
	function updateLogin(bool) {
		setLoggedIn(bool);
	}
	return (
		<div>
			{loggedIn ? (
				<App updateLogin={updateLogin} />
			) : (
				<LoginHook updateLogin={updateLogin} />
			)}
		</div>
	);
}

export default PageSwitcher;
