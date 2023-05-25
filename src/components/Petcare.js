import React from "react";
import "./Petcare.css";
import allpets from "../images/allpets.jpg";

function Petcare() {
	return (
		<div>
			<div className="container">
				<div className="row" id="allpetcare">
					<div className="col-sm">
						<h2>Pet care</h2>
						<p>
							{" "}
							We are dedicated to providing the best possible care for our furry
							friends. Whether you are a new pet owner or a seasoned pro, we
							have all the information you need to ensure your pet stays healthy
							and happy
						</p>
					</div>

					<div className="col-sm">
						<h2>Feeding</h2>
						<p>
							{" "}
							A healthy and balanced diet is essential to your pet's well-being.
							We recommend feeding your pet a high-quality commercial pet food
							that is appropriate for their age, size, and breed. Be sure to
							follow the recommended feeding guidelines and avoid overfeeding,
							which can lead to obesity and other health issues.
						</p>
					</div>

					<div className="col-sm">
						<h2>Exercise</h2>
						<p>
							{" "}
							Regular exercise is crucial for maintaining your pet's physical
							and mental health. Dogs, in particular, require daily walks and
							playtime to keep them active and engaged. Cats also benefit from
							playtime, whether it's with toys or a good old-fashioned laser
							pointer.
						</p>
					</div>
				</div>
			</div>
			<div className="container">
				<img
					src={allpets}
					alt="all pets dogs and cats"
					style={{ width: 700, marginTop: 20, borderRadius: 50 }}
				/>
			</div>
		</div>
	);
}

export default Petcare;
