import React from "react";
import { useParams } from "react-router-dom";

import icon from "../images/icon2.png";
import "./Featured.css";

export default function Featured(props) {
	// This function is called only when picture of pet is clicked
	//Featured page is shown AFTER click
	let { id } = useParams();
	let featProject = props.results.find((p) => p.id === +id);

	return (
		<div className="Featured">
			<div>
				{featProject.photos[0] ? (
					<img
						src={featProject.photos[0].medium}
						//featProject.photos[0] &&
						key={featProject.id}
						alt="this is a pet"
						onClick={(o) => featProject.showPet(featProject.id)}
					/>
				) : (
					<img
						src={icon}
						key={featProject.id}
						alt="this is a pet"
						onClick={(o) => props.showPet(featProject.id)}
						style={{
							height: 200,
							width: 200,
						}}
					/>
				)}
			</div>
			<div className="two-text" key={featProject.id}>
				<h3>Hello my name is {featProject.name}</h3>
				{featProject.gender ? <h4>Sex: {featProject.gender}</h4> : null}
				{featProject.primary ? <h4>Breed: {featProject.primary}</h4> : null}
				{featProject.age ? <h4>Age: {featProject.age}</h4> : null}
				{featProject.coat ? <h4>Coat: {featProject.coat}</h4> : null}
				{featProject.tags[0] ? <p>I am: {featProject.tags[0]}</p> : null}

				<p>{featProject.description}</p>
			</div>
			<p className="question">
				Could you be {featProject.name}'s perfect match?
			</p>
			{/* this button has no functionality but it could have shown form for adoption maybe  */}
			<button className="coulyou">Enquire about {featProject.name}</button>
		</div>
	);
}
