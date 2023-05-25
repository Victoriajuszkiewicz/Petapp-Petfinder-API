import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import "./Form.css";

// components
import Benefits from "./Benefits.js";
import Footer from "./Footer.js";

export default function Form(props) {
	const navigate = useNavigate();

	const EMPTY_FORM = {
		type: "",
		location: "",
	};
	const [form, setForm] = useState({
		type: "",
		location: "",
	});

	const handleSubmit = (e) => {
		e.preventDefault();
		let formDetails = form;
		props.printPets(formDetails);
		//console.log(formDetails);
		setForm(EMPTY_FORM);
		navigate("/result");
	};

	const handleChange = (e) => {
		const name = e.target.name;
		const value = e.target.value;
		let newForm = { ...form };
		newForm[name] = value;
		setForm((state) => ({
			...state,
			[name]: value,
		}));
	};

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<div className="container-fluid"></div>
				<div className="background">
					<div className="container">
						<div className="row">
							<div className="col-12 col-sm-12 col-md-12 col-lg-8">
								<h2 id="Hometext"> Find pets to adopt</h2>
							</div>
						</div>
					</div>

					<div className="container">
						<div className="input-group mb-3">
							<label className="twoinputs">
								<select
									className="form-select "
									id="validationCustom04"
									value={form.type}
									name="type"
									onChange={(e) => handleChange(e)}
								>
									<option>Dog</option>
									<option>Cat</option>
									<option>Rabbit</option>
									<option>Pig</option>
								</select>
								<input
									className="form-control "
									id="validationCustom01"
									required
									type="text"
									placeholder="Location"
									name="location"
									value={form.location}
									onChange={(e) => handleChange(e)}
								/>
							</label>
							<div className="input-group-append">
								<button
									className="btn btn-primary"
									type="submit"
									value="Search"
								>
									Search
								</button>
							</div>
						</div>
					</div>
				</div>
				<Benefits></Benefits>
				<Footer></Footer>
			</form>
		</div>
	);
}
