//entry point for react
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import PageSwitcher from "./pages/PageSwitcher";

ReactDOM.render(
	<React.StrictMode>
		<PageSwitcher />
	</React.StrictMode>,
	//inserting App into this div
	//App is root component
	document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
