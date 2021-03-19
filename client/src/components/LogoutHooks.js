import React from "react";
import { useGoogleLogout } from "react-google-login";
const clientId =
	"316356783084-uc6cu69ell0aa9t4a0l3omfhjnmoaiir.apps.googleusercontent.com";
function LogoutHooks(props) {
	const onLogoutSuccess = (res) => {
		console.log("Logged out Success");
		props.updateLogin(false);
	};
	const onFailure = () => {
		console.log("Handle failure cases");
	};
	const { signOut } = useGoogleLogout({
		clientId,
		onLogoutSuccess,
		onFailure,
	});
	return (
		<div style={{ width: "6%", margin: "auto" }}>
			<button onClick={signOut} className="button" style={{ margin: "auto" }}>
				<span className="buttonText">Sign out</span>
			</button>
		</div>
	);
}
export default LogoutHooks;
