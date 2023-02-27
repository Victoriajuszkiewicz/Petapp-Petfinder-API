import React, { useState } from "react";
import "./App.css";
import Result from "./components/Result";
import Featured from "./components/Featured";
import { Routes, Route, Link } from "react-router-dom";
import { useEffect, createContext } from "react";
import Form from "./components/Form";
import { Button } from "react-bootstrap";
import sorry from "./sorry.png";
import logo from "./logo.png";

function App() {
  const [error, setError] = useState("");
  const [results, setResults] = useState([]);
  const [token, setToken] = useState(null);
  const OAUTH_URL = "https://api.petfinder.com/v2/oauth2/token";
  const PETFINDER_URL = `/v2/animals`;
  //const CLIENT_ID = "HXrybFRPtRK41Nieti4Kj8t0Nzq2eD0zS5IUfSFbcqwMXE9qPC";
  //const CLIENT_SECRET = "CYTIwKHusDjEZyhlPDPsZLo7fHXrcCGBV9uw1ub6";
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    getToken();
  }, []);

  // Get token from petfinder.com and save in state
  async function getToken() {
    //console.log(process.env.REACT_APP_CLIENT_ID);
    let credentials = {
      grant_type: "client_credentials",
      client_id: process.env.REACT_APP_CLIENT_ID,
      client_secret: process.env.REACT_APP_CLIENT_SECRET,
    };
    // add process.env.  before CLIENT ID to reach env folder

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

    //console.log(PET_TYPE);
    const PET_TYPE = `/v2/animals?type=${form.type}`;
    let response = await fetch(PET_TYPE, options);

    //changed to PET_TYPE from PET URL
    if (response.ok) {
      let data = await response.json();
      //console.log("response:all pets", data.animals);
      setResults(data.animals);

      // for (let pet of data.animals) {
      //   console.log(pet.name, pet.breeds, pet.age, pet.gender, pet.type);
      // }
    } else {
      setError(
        `No ${form.type} found. ${response.status}: ${response.statusText}`
      );
    }
    setLoading(false);
  }

  return (
    //* Nav Bar
    <div className="App">
      <section>
        <div>
          <nav>
            <img src={logo} alt="this is a logo" />

            <button>About us</button>
            <button>Pet Care</button>
            <button>Ways to support</button>
            <button>Contact us</button>
          </nav>
        </div>
      </section>
      <section className="home">
        <div>
          <Routes>
            <Route path="/" element={<Form printPets={printPets} />} />
            <Route path="/Result/*" element={<Result results={results} />} />
            <Route
              path="/Featured/:id"
              element={<Featured results={results} />}
            ></Route>
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

/*
    src={sorry}
              style={{
                height: 400,
                width: 500,
              }}

<h2 style={{ color: "red" }}>
*/
export default App;
/*
  {/* <Route
              path="/Result/Featured/:id"
              element={<Featured showPet={showPet} featProject={featProject} />}
            /> */
