import React from "react";
import { useParams } from "react-router-dom";
import icon from "../icon2.png";
import "./Featured.css";

export default function Featured(props) {
  // This function is called only when picture of pet is clicked
  //Featured page is shown AFTER click
  //it should show picture,breeds.primary, age,gender,name,description
  // console.log(featProject);
  let { id } = useParams();
  let featProject = props.results.find((p) => p.id === +id);

  return (
    <div className="Featured">
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
        <h3>Hello my name is {featProject.name}</h3>
        <h4>Sex: {featProject.gender}</h4>
        <h4>Breed: {featProject.primary}</h4>
        <h4>Age: {featProject.age}</h4>
        <h4>Coat: {featProject.coat}</h4>
        <p>I am: {featProject.tags[0]}</p>
        <p>{featProject.description}</p>
      </div>
      <p className="question">
        Could you be {featProject.name}'s perfect match?
      </p>
      <button className="coulyou">Enquire about {featProject.name}</button>
    </div>
  );
}
