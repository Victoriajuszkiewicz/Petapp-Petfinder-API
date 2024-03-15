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
						© 2024 Copyright:
						<a
							className="text-white"
							href="https://main--vj-webdev-portfolio.netlify.app/"
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
