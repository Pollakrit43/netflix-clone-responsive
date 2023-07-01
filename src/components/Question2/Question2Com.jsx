import React, { useState } from "react";

import { QuestionCom } from "./../Question/QuestionCom";
import "./question2.css";

import data from "../../data.js";

export const Question2Com = () => {
  const [questions, setQuestions] = useState(data);
  return (
    <div className="question2">
      <h3 className="question2-title">Frequently Asked Questions</h3>
      {questions.map((question) => {
        return <QuestionCom key={question.id} {...question} />;
      })}
      <p className="question2-p">
        Ready to watch? Enter your email to create or restart your membership.
      </p>
      <div className="question2-email">
        <input type="email" placeholder="Email Address" />
        <button className="question2-btn" type="submit">
          Get Started
        </button>
      </div>
    </div>
  );
};
