import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import image from "../img2.jpg";
import "./Form.css";

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
    //let { location, type } =
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
        <div className="z-3 position-absolute p-5">
          <label>
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

          <button className="btn btn-primary z-0 " type="submit" value="Search">
            Search
          </button>
        </div>

        <div className="z-2 position-absolute img-fluid ">
          <img src={image} alt="this is a picture of dog" />
        </div>
      </form>
    </div>
  );
}
