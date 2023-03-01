import React, { useState } from "react";
import "./App.css";
import Result from "./components/Result";
import Featured from "./components/Featured";
import { Routes, Route, Link } from "react-router-dom";
import { useEffect, createContext } from "react";
import Form from "./components/Form";
import { Button } from "react-bootstrap";
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
    //* Nav Bar
    <div className="App">
      <section>
        <div>
          <nav>
            <img src={logo} alt="this is a logo" />
            {/* These are fake buttons with no functionality */}
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

export default App;
