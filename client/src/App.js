import React from "react";
import Tasks from "./pages/Tasks";
import AppNavBar from "./components/AppNavBar";

const App = () => {
	return (
		<div>
			<AppNavBar />
			<Tasks />
		</div>
	);
};

export default App;
