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
						<NavLink to="/aboutus" className="nav-item">
							<span className="nav-link">About us</span>
						</NavLink>

						<NavLink to="/petcare" className="nav-item">
							<span className="nav-link">Pet care</span>
						</NavLink>

						<NavLink to="/allpets" className="nav-item">
							<span className="nav-link">All pets</span>
						</NavLink>
					</ul>
				</div>
			</nav>
		</div>
	);
};

export default NavBar;
