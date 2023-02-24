import React from "react";
import { useParams } from "react-router-dom";
import icon from "../icon2.png";

export default function Featured(props) {
  // This function is called only when picture of pet is clicked
  //Featured page is shown AFTER click
  //it should show picture,breeds.primary, age,gender,name,description
  // console.log(featProject);
  let { id } = useParams();
  let featProject = props.results.find((p) => p.id === +id);

  return (
    <div className="Featured">
      <h2>This is featured page</h2>
      <div>
        {featProject.photos[0] ? (
          <img
            src={featProject.photos[0].medium}
            //featProject.photos[0] &&
            key={featProject.id}
            onClick={(o) => featProject.showPet(featProject.id)}
          />
        ) : (
          <img
            src={icon}
            //added key
            key={featProject.id}
            onClick={(o) => props.showPet(featProject.id)}
            style={{
              height: 200,
              width: 200,
            }}
          />
        )}
      </div>
      <div className="two-text">
        <h2>{featProject.name}</h2>
        <h3>{featProject.gender}</h3>
        <h3>{featProject.primary}</h3>
        <h3>{featProject.age}</h3>
        <p>{featProject.description}</p>
      </div>
    </div>
  );
}
