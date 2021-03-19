import React from "react";
import Tasks from "./pages/Tasks";
import AppNavBar from "./components/AppNavBar";

const App = (props) => {
	return (
		<div>
			<AppNavBar />
			<Tasks updateLogin={props.updateLogin} />
		</div>
	);
};

export default App;
