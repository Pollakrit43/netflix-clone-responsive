import React, { useState } from "react";

import "./question.css";

export const QuestionCom = ({ title, info }) => {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <div className="question">
      <div className="question-div">
        <div onClick={() => setShowInfo(!showInfo)} className="question-title">
          <h3>{title}</h3>
          <button onClick={() => setShowInfo(!showInfo)}>
            {showInfo ? "-" : "+"}
          </button>
        </div>
      </div>
      <div className="questionShowp">{showInfo && <p>{info}</p>}</div>
    </div>
  );
};
