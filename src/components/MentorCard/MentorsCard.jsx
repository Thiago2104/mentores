import React from "react";
import "./MentorsCard.scss";

const MentorsCard = ({name, details}) =>{
  return (
    <div className="mentors-card">
      <div className="mentors-card__head">
        <h3>{name}</h3>
      </div>
      <div className="mentors-card__body">
        <p>
          {details}
        </p>
      </div>
    </div>
  );
};

export default MentorsCard;