import React from "react";

import icon from "../images/icon2.png";
import { Link } from "react-router-dom";
import "./Result.css";

export default function Result(props) {
	// const [featProject, setFeatured] = useState({});

	return (
		<div className="resultsall">
			<h3 className="avil">Available furbabes</h3>
			<div className="container">
				{props.results.length && (
					<div className="row gy-4">
						{props.results.map((e) => (
							<div class="col-sm" id="allgrids">
								<div
									key={e.id}
									className="card h-100"
									style={{ width: "18rem" }}
								>
									<div>
										{e.photos[0] ? (
											<Link to={"/Featured/" + e.id}>
												<img
													className="card-img-top"
													alt="this is a pet"
													src={e.photos[0] && e.photos[0].large}
												/>
											</Link>
										) : (
											<Link to={"/Featured/" + e.id}>
												<img
													className="card-img-top"
													src={icon}
													alt="this is an icon"
												/>
											</Link>
										)}
									</div>
									<div className="card-body">
										<h3 className="card-title">{e.name}</h3>
										<h6 className="card-text">{e.breeds.primary}</h6>
									</div>
								</div>
							</div>
						))}
					</div>
				)}
			</div>
		</div>
	);
}
