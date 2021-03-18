import React, { useState } from "react";
import {
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
	NavLink,
} from "reactstrap";

const AppNavBar = (props) => {
	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => setIsOpen(!isOpen);

	return (
		<div>
			{/* change to md if looking weird */}
			<Navbar color="light" light expand="sm">
				<NavbarBrand href="/">Personal Organizer</NavbarBrand>
				<NavbarToggler onClick={toggle} />
				<Collapse isOpen={isOpen} navbar>
					<Nav className="mr-auto" navbar>
						<NavItem>
							<NavLink href="/">Tasks</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href="https://www.amazon.com/">Shopping List</NavLink>
						</NavItem>
					</Nav>
					<NavLink href="/about">About</NavLink>
				</Collapse>
			</Navbar>
		</div>
	);
};

export default AppNavBar;
