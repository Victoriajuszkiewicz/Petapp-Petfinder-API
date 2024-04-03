import React from "react";
import logo from "../images/logodog.png";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
	return (
		<div>
			<nav className="navbar  navbar-expand navbar-light" id="mainnavbar">
				<NavLink to="/">
					<img src={logo} alt="this is a logo" />
				</NavLink>

				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav mr-auto">
						<NavLink to="/aboutus" className="nav-link nav-button">
							About us
						</NavLink>

						<NavLink to="/petcare" className="nav-link nav-button">
							Pet care
						</NavLink>

						<NavLink to="/allpets" className="nav-link nav-button">
							All pets
						</NavLink>

						<NavLink to="/quiz" className="nav-link nav-button">
							Quiz
						</NavLink>
					</ul>
				</div>
			</nav>
		</div>
	);
};

export default NavBar;
