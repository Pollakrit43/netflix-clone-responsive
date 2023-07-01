import React from "react";

import './kids.css'

import kidsImg from "../../assets/AAAABejKYujIIDQciqmGJJ8BtXkYKKTi5jiqexltvN1YmvXYIfX8B9CYwooUSIzOKneblRFthZAFsYLMgKMyNfeHwk16DmEkpIIcb6A3.png";

export const KidsCom = () => {
  return (
    <div className="kids">
      <div className="kids-img">
        <img src={kidsImg} />
      </div>
      <div className="kids-text">
        <div>
          <h2>Create profiles for kids</h2>
          <p>Send kids on adventures with their favorite characters in a space made just for them—free with your membership.</p>
        </div>
      </div>
    </div>
  );
};
