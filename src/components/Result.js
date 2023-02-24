import React, { useState } from "react";
//import { Link, Outlet } from "react-router-dom";
import icon from "../icon2.png";
import { Routes, Route, Link } from "react-router-dom";
import Featured from "./Featured.js";

export default function Result(props) {
  const [featProject, setFeatured] = useState({});

  function showPet(id) {
    //console.log("Result show pet", id);
    // once clicked on picture of the dog
    //it shows Featured page with more details
    let featProj = props.results.find((o) => o.id === id);
    //featProj shows more details about clicked id pet!!! it's an obj
    console.log(featProj);
    setFeatured(featProj);
  }
  //console.log(featProject);
  return (
    <div>
      {/* <Featured showPet={showPet} featProject={featProject} /> */}
      {/* <Routes> */}
      {/* <Route
          path="/Result/Featured"
          element={<Featured showPet={showPet} featProject={featProject} />}
        /> */}
      {/* </Routes> */}
      <h2 className="h2">Available furbabes</h2>
      <div className="card-group">
        <div className="card" style={{ width: "18rem" }}>
          {props.results.length && (
            <div>
              <ul>
                {props.results.map((e) => (
                  <div>
                    <div>
                      {e.photos[0] ? (
                        // <img
                        //   src={e.photos[0] && e.photos[0].small}
                        //   key={e.id}
                        //   onClick={(o) => showPet(e.id)}
                        // />
                        <Link to={"/Featured/" + e.id}>
                          <img
                            style={{
                              height: 200,
                              width: 200,
                            }}
                            className="card-img-top"
                            src={e.photos[0] && e.photos[0].medium}
                          />
                        </Link>
                      ) : (
                        <Link to={"/Featured/" + e.id}>
                          <img
                            className="card-img-top"
                            src={icon}
                            style={{
                              height: 200,
                              width: 200,
                            }}
                          />
                        </Link>
                      )}
                    </div>
                    <div className="card-body">
                      <h3 className="card-title">{e.name}</h3>
                      <h6 className="card-text">{e.breeds.primary}</h6>
                    </div>
                  </div>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

{
  /* 
const GridItem = ({ results }) => {
  let backgroundImage =
    results.photos.length > 0 ? results.photos[0].medium : "";
};

// function Result(props) { */
}
{
  /* //   return (
//     <div>
//       <h2>Result page</h2>
//       <div>
//         {props.results && ( */
}
//           <div className="result">
//             <ul>
//               {props.results.map((e) => (
//                 <li>
//                   {e.name}
//                   {e.breeds.primary}
//                   <div>
//                   {/* </div>{photos ? <img src={photos}> : <Icon />} */ //}
//                     <img
//                       src={e.photos ? e.photos[0] && e.photos[0].small : icon}
//                       // if e.photos is truthy then show else show icon
//                       // does it need to be separate function?
//                     />
//                   </div>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

//export default Result;
//*/
/*
function showIcon(props){
  if (props.results.photos){
    return <img
    src={e.photos[0] && e.photos[0].small}/>
  }
else {return <img src={icon}/> }

}

*/
/*
import React from "react";
import { useParams } from "react-router-dom";
import users from "../database.json";
​
export default function UserView() {
  const { id } = useParams();
​
  //   const user = users.find((user) => Number(user.id) === Number(id));
  // shorter syntax for converting to a number
  const user = users.find((user) => +user.id === +id);
​
  return (
    <div>
      <h2>{user?.name}'s page</h2>
    </div>
  );
}
*/
