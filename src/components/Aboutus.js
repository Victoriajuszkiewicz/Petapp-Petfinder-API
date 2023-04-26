import React from "react";
import "./Aboutus.css";

function Aboutus() {
	return (
		<div>
			<div className="container">
				<div className="row">
					<div className="col-xs-1 center-block text-center">
						<h2>About us </h2>
						<p className="aboutustext">
							Petfinder is an app that connects pets with their future owners.
							People can search by location or type and rescue a life companion.
							Find your new best friend Browse pets of over 11,500 shelters and
							rescues.
						</p>
					</div>
				</div>
				<div className="row justify-content-center">
					<div className="col-sm">
						<h2>Our mission</h2>
						<p className="aboutustext">
							We believe that every animal deserves a loving home.
						</p>
						<p className="aboutustext">
							Our goal is to make the adoption process easy and accessible,
							while also promoting responsible pet ownership.We believe that
							every animal deserves to be treated with kindness and respect.
							That's why we are dedicated to making the adoption process as
							seamless and stress-free as possible. Our app provides you with
							all the information you need to find your new furry friend,
							including photos, descriptions, and adoption requirements.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Aboutus;
