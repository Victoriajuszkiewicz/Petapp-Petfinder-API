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
        <div className="container-fluid"></div>
        <div className="background">
          <h2> Find pets to adopt</h2>
          <div className="search">
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

            <button
              className="btn btn-primary z-0 "
              type="submit"
              value="Search"
            >
              Search
            </button>
          </div>
        </div>
        <div className="whybox">
          <h2 className="whytext">The benefits of adopting</h2>
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
                You are sure to find one close to you, making it easy to come
                and meet the dogs. Find your nearest centre and meet the dogs
                that are currently looking for their forever family.
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
                As well as having dogs of all shapes and sizes – we also have
                all ages. So, if you’re set on owning a puppy, buying one isn’t
                your only option. Plus, you’ll be helping to support the
                responsible acquisition of dogs.
              </p>
            </div>
          </div>
        </div>

        <div className="footer">
          <p>Designed by Victoria Juszkiewicz</p>
          <p>victoria.foxymedia@gmail.com</p>
        </div>
      </form>
    </div>
  );
}
