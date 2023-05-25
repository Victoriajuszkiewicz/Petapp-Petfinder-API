import React from "react";
import "./Footer.css";

const Footer = () => {
	return (
		<div className="container">
			<section className="footermain">
				<footer className="text-center text-white">
					<div className="container p-4 pb-0">
						<section className="">
							<p className="d-flex justify-content-center align-items-center">
								<span className="me-3">See my other projects</span>
								<a
									type="button"
									className="btn btn-outline-light btn-rounded"
									href="https://github.com/Victoriajuszkiewicz"
								>
									GitHub
								</a>
							</p>
						</section>
					</div>

					<div className="text-center p-3">
						© 2020 Copyright:
						<a
							className="text-white"
							href="mailto:victoria.fullstackdeveloper@gmail.com"
						>
							{" "}
							Victoria Juszkiewicz
						</a>
					</div>
				</footer>
			</section>
		</div>
	);
};

export default Footer;
