//importing react in each component no longer required
import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";
import Button from "./Button";

const Header = ({ title, onAdd, showAdd }) => {
	const location = useLocation();
	return (
		<header className="header">
			<h1>{title}</h1>
			{location.pathname === "/" && (
				<Button
					color={showAdd ? "red" : "green"}
					text={showAdd ? "Close" : "Add"}
					onClick={onAdd}
				/>
			)}
		</header>
	);
};

//header.defaultProps
Header.defaultProps = {
	title: "Tasks",
};

//Header.propTypes
Header.propTypes = {
	title: PropTypes.string.isRequired,
};

export default Header;
