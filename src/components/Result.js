import React, { useState } from "react";
import icon from "../icon2.png";
import { Link } from "react-router-dom";
import "./Result.css";

export default function Result(props) {
  const [featProject, setFeatured] = useState({});

  function showPet(id) {
    // once clicked on picture of the dog
    //it shows Featured page with more details
    let featProj = props.results.find((o) => o.id === id);
    console.log(featProj);
    setFeatured(featProj);
  }

  return (
    <div className="resultsall">
      <h3 className="avil">Available furbabes</h3>
      <div className="result">
        {props.results.length && (
          <div className="allgrids">
            {props.results.map((e) => (
              <div key={e.id} className="card" style={{ width: "18rem" }}>
                <div>
                  {e.photos[0] ? (
                    <Link to={"/Featured/" + e.id}>
                      <img
                        className="card-img-top"
                        alt="pet"
                        src={e.photos[0] && e.photos[0].large}
                      />
                    </Link>
                  ) : (
                    <Link to={"/Featured/" + e.id}>
                      <img className="card-img-top" src={icon} alt="icon" />
                    </Link>
                  )}
                </div>
                <div className="card-body">
                  <h3 className="card-title">{e.name}</h3>
                  <h6 className="card-text">{e.breeds.primary}</h6>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
