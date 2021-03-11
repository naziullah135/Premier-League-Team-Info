import React from "react";
import "./Team.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useHistory } from "react-router";

const Team = (props) => {
  const { strTeam, strTeamBadge, idTeam } = props.team;

  const history = useHistory();
  const showTeamDetails = (teamId) => {
    history.push(`/teamdetails/${teamId}`);
  };
  return (
    <div className="col-md-4 team-div">
      <div
        className="card-div card container text-center"
        style={{ width: "20rem" }}
      >
        <img
          style={{ padding: "20px" }}
          src={strTeamBadge}
          class="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h2 className="card-title">{strTeam}</h2>
          <p className="card-text">Sports Type: Football</p>
          <button
            onClick={() => showTeamDetails(idTeam)}
            className="btn btn-primary"
          >
            Explore <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Team;
