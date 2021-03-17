import React, { useState } from "react";
import {
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
	NavLink,
	NavbarText,
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
							<NavLink href="https://github.com/nickkeller316/mern-shoppinglist">
								Tasks
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href="https://github.com/reactstrap/reactstrap">
								Shopping List
							</NavLink>
						</NavItem>
					</Nav>
					<NavbarText>About</NavbarText>
				</Collapse>
			</Navbar>
		</div>
	);
};

export default AppNavBar;
