import React, { useEffect, useRef } from "react";
import "./Benefits.css";
import { gsap } from "gsap";



const Benefits = () => {
	// gsap.registerPlugin(SplitText) 

	const textRef = useRef(null);


	return (
		<div>
			<div className="whybox">
				<setion>
					<div ref={textRef}>
					<h2 className="whytext">The benefits of adopting</h2>
					</div>
				</setion>
				
				<div className="reasons">
					<div>
						<h4>We’ll help you find the perfect match</h4>
						<p>
							We love and care for each dog as if they are our own. Throughout
							their time with us, we get to know them and all their little
							quirks, and find out exactly what they need from their new home.{" "}
						</p>
					</div>
					<div>
						<h4>We have rehoming centres across the US</h4>
						<p>
							You are sure to find one close to you, making it easy to come and
							meet the dogs. Find your nearest centre and meet the dogs that are
							currently looking for their forever family.
						</p>
					</div>

					<div>
						<h4>Your new pet has had a full health check</h4>
						<p>
							Not only is our rehoming fee significantly cheaper than buying a
							dog, it also includes full vet checks.
						</p>
					</div>

					<div>
						<h4>From playful puppies to sensible seniors</h4>
						<p>
							As well as having dogs of all shapes and sizes – we also have all
							ages. So, if you’re set on owning a puppy, buying one isn’t your
							only option. Plus, you’ll be helping to support the responsible
							acquisition of dogs.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Benefits;
