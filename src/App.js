import React, { useState } from "react";
import "./App.css";

// components
import Result from "./components/Result";
import Featured from "./components/Featured";
import Form from "./components/Form";
import Aboutus from "./components/Aboutus.js";
import Petcare from "./components/Petcare.js";
import Allpets from "./components/Allpets.js";
import Contact from "./components/Contact.js";
import NavBar from "./components/NavBar.js";

import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";

function App() {
	const [error, setError] = useState("");
	const [results, setResults] = useState([]);
	const [token, setToken] = useState(null);

	const OAUTH_URL = "https://api.petfinder.com/v2/oauth2/token";
	// const PETFINDER_URL = `/v2/animals`;

	const [loading, setLoading] = useState(false);
	useEffect(() => {
		getToken();
	}, []);
	// needed so we can use more than 60min it asks about token automatically
	async function getToken() {
		let credentials = {
			grant_type: "client_credentials",
			client_id: process.env.REACT_APP_CLIENT_ID,
			client_secret: process.env.REACT_APP_CLIENT_SECRET,
		};

		let options = {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(credentials),
		};

		let response = await fetch(OAUTH_URL, options);
		if (response.ok) {
			let data = await response.json();
			//console.log("response: Token etc", data);
			setToken(data.access_token);
		} else {
			console.log(
				`Error in getToken(): ${response.status}: ${response.statusText}`
			);
		}
	}

	async function printPets(form) {
		let options = {
			headers: { Authorization: `Bearer ${token}` },
		};
		setLoading(true);
		setError("");
		const PET_TYPE = `/v2/animals?type=${form.type}`;
		let response = await fetch(PET_TYPE, options);

		if (response.ok) {
			let data = await response.json();
			//console.log("response:all pets", data.animals);
			setResults(data.animals);
		} else {
			setError(
				`No ${form.type} found. ${response.status}: ${response.statusText}`
			);
		}
		setLoading(false);
	}

	return (
		<div className="App">
			<NavBar></NavBar>
			<section className="home">
				<div>
					<Routes>
						<Route path="/" element={<Form printPets={printPets} />} />
						<Route path="/Result/*" element={<Result results={results} />} />
						<Route
							path="/Featured/:id"
							element={<Featured results={results} />}
						></Route>
						<Route path="/Aboutus" element={<Aboutus />} />
						<Route path="/Petcare" element={<Petcare />} />
						<Route path="/Allpets" element={<Allpets />} />
						<Route path="/Contact" element={<Contact />} />
					</Routes>
					{loading && (
						<div className="spinner-border text-dark" role="status">
							<span className="visually-hidden">Loading...</span>
						</div>
					)}

					{error && <div className="bcg-sorry" />}
				</div>
			</section>
		</div>
	);
}

export default App;
