import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import "./TeamDetails.css";
import MalePic from "../../images/Rectangle 28.png";
import FemalePic from"../../images/female.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faFacebook,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import {
  faFlag,
  faFutbol,
  faMars,
  faCalendarAlt,
} from "@fortawesome/free-solid-svg-icons";

const TeamDetails = (props) => {
  const { teamId } = useParams();
  const [details, setDetails] = useState([]);
  // const {strTeam} = props.details;
  useEffect(() => {
    fetch(
      `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${teamId}`
    )
      .then((res) => res.json())
      .then((data) => setDetails(data.teams[0]));
  });
  return (
    <div className="team-details">
      <div>
        <img style={{ width: "100%" }} src={details.strTeamBanner} alt="" />
      </div>
      <div className="details-box card mb-3">
        <div className="row g-0">
          <div className="col-md-7">
            <div className="card-body">
              <h1 className="card-title">{details.strTeam}</h1>
              <p className="card-text">
                <FontAwesomeIcon icon={faCalendarAlt} /> Founded:{" "}
                {details.intFormedYear}
              </p>
              <p className="card-text">
                <FontAwesomeIcon icon={faFlag} /> Country: {details.strCountry}
              </p>
              <p className="card-text">
                <FontAwesomeIcon icon={faFutbol} /> Sports Type:{" "}
                {details.strSport}
              </p>
              <p className="card-text">
                <FontAwesomeIcon icon={faMars} /> Gender: {details.strGender}
              </p>
            </div>
          </div>
          <div className="col-md-5">
            {
                details.strGender === "Male" ? (<img style={{ width: "100%", padding: "20px" }}
                    src={MalePic} alt="..."/>)
                    :(<img style={{ width: "100%", padding: "20px" }} src={FemalePic} alt="..."  />)     
            }
          </div>
        </div>
      </div>
      <div className="team-des">
        <p>{details.strDescriptionEN}</p>
      </div>
      <div className="social-icon">
        <a href={`https://${details.strTwitter}`} target="blank">
          <FontAwesomeIcon className="fa" icon={faTwitter} />
        </a>
        <a href={`https://${details.strFacebook}`} target="blank">
          <FontAwesomeIcon className="fa" icon={faFacebook} />
        </a>
        <a href={`https://${details.strYoutube}`} target="blank">
          <FontAwesomeIcon className="fa" icon={faYoutube} />
        </a>
      </div>
    </div>
  );
};

export default TeamDetails;
