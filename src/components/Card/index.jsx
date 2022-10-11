import React from "react";
import { Link } from "react-router-dom";
import { Icon } from "semantic-ui-react";

const Card = ({ creator }) => {
  return (
    <div className="creator-wrapper">
      <Link to={`./${creator.id}`} key={creator.id}>
        <img
          className="creator-card-image"
          alt="example"
          src={creator.profilePicture}
        />
        <div className="card-subline">
          <p style={{ color: "black", fontSize: "1.2rem" }}>
            {creator.userName}
          </p>
          <Icon name="heart outline" size="large" />
        </div>
        <div style={{ color: "gray", fontSize: "0.9rem" }}>
          {creator.profession}
        </div>
      </Link>
    </div>
  );
};

export default Card;
