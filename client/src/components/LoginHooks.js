import React from "react";
import { useGoogleLogin } from "react-google-login";
// refresh token
import { refreshTokenSetup } from "../utils/refreshToken";
const clientId =
	"316356783084-uc6cu69ell0aa9t4a0l3omfhjnmoaiir.apps.googleusercontent.com";
function LoginHooks(props) {
	const onSuccess = (res) => {
		console.log("Login Success: currentUser:", res.profileObj);
		props.updateLogin(true);
		refreshTokenSetup(res);
	};
	const onFailure = (res) => {
		console.log("Login failed: res:", res);
		alert(`Failed to login.`);
	};
	const { signIn } = useGoogleLogin({
		onSuccess,
		onFailure,
		clientId,
		isSignedIn: true,
		accessType: "offline",
		// responseType: 'code',
		// prompt: 'consent',
	});
	return (
		<div
			className="btn btn-block"
			style={{ margin: "auto", width: "15%", marginTop: "25%" }}
		>
			<button onClick={signIn} className="button">
				<span className="buttonText">Sign in with Google</span>
			</button>
		</div>
	);
}
export default LoginHooks;
