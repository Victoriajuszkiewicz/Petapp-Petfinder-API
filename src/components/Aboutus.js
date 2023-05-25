import React from "react";
import "./Aboutus.css";
import { NavLink } from "react-router-dom";

//pictures
import catpic from "../images/catpic.jpg";
import dogpic from "../images/dogpic.jpg";
import dogpic2 from "../images/dog2.jpg";
import pig from "../images/pig.jpg";

function Aboutus() {
	return (
		<div>
			<div className="container">
				<div className="row" id="aboutusall">
					<div className="col">
						<h2>About us </h2>
						<p className="aboutustext">
							Petfinder is the website that aims to connect pets with their
							future owners. We understand the special bond between humans and
							animals and strive to facilitate the process of finding a loving
							and permanent home for pets in need.
							<br />
							<br />
							Our platform allows users to search for their ideal companions
							based on location and type making the adoption process both
							efficient and convenient. Our app serves as a bridge between
							potential pet owners and more than 11,500 shelters and rescues
							across the US.
						</p>
					</div>
					<div className="col">
						<img src={catpic} alt=" cute cat" className="picturecat" />
					</div>
					<div className="col">
						<img src={dogpic} alt=" a cute dog" className="picturecat" />
					</div>
					<div className="col">
						<img src={dogpic2} alt="cute dog" className="picturecat" />
					</div>
					<div className="row" id="aboutusall">
						<div className="col">
							<img src={pig} alt=" cute dog" className="picturepig" />
						</div>

						<div className="col">
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
							<NavLink to="/">
								<button type="button" className="btn btn-primary">
									Search for pets
								</button>
							</NavLink>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Aboutus;
