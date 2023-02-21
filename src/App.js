import React, { useState } from "react";
import "./App.css";
import Result from "./components/Result";
//import Featured from "./components/Featured";
import { Routes, Route, Link } from "react-router-dom";
//import image from "./img.jpg";

function App() {
  //const [type, setType] = useState("");
  //const [location, setLocation] = useState("");
  const [form, setForm] = useState({
    type: "",
    location: "",
  });

  const EMPTY_FORM = {
    type: "",
    location: "",
  };

  const PETFINDER_URL = `https://api.petfinder.com/v2/oauth2/token`;
  const petFinderKey = "HXrybFRPtRK41Nieti4Kj8t0Nzq2eD0zS5IUfSFbcqwMXE9qPC";
  const petFinderSecret = "CYTIwKHusDjEZyhlPDPsZLo7fHXrcCGBV9uw1ub6";

  const handleChange = (e) => {
    //setLocation(e.target.value);
    //setForm(e.target.value);
    //console.log(location, type);
    const type = e.target.name;
    const value = e.target.value;

    let newForm = { ...form };
    newForm[type] = value;

    setForm((form) => ({
      ...form,
      [e.target.name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form button submitted");
    //let { location, type } =
    //setLocation("");,

    setForm(EMPTY_FORM);
  };

  /*
  name="firstName"
          value={state.firstName}
          onChange={handleChange}
  */
  return (
    <div className="App">
      <nav>
        <h1>Petfinder</h1>
      </nav>

      <section className="home">
        <form onSubmit={handleSubmit}>
          <label>
            <select>
              <option value={form.type} onChange={(e) => handleChange(e)}>
                Dog
              </option>
              <option value={form.type} onChange={(e) => handleChange(e)}>
                Cat
              </option>
              <option value={form.type} onChange={(e) => handleChange(e)}>
                Rabbit
              </option>
              <option value={form.type} onChange={(e) => handleChange(e)}>
                Pig
              </option>
            </select>
            <input
              type="text"
              placeholder="Location"
              value={form.location}
              onChange={(e) => handleChange(e)}
            />
          </label>

          <button type="submit" value="Search">
            Search
          </button>
        </form>
      </section>

      <div>
        <Routes>
          <Route path="/" element={<Result />} />
        </Routes>
      </div>
    </div>
  );
}

//Result page only visible after clicking button search

export default App;
/* <Route path="/users" element={<Featured />} />
<nav>
        <Link to="/">All</Link> |<Link to="/users">Users</Link>
      </nav>
 */
