import React from "react";

import phoneImg from "../../assets/phone.jpg";
import boxshot from "../../assets/stranger.png";
import downloadIcon from "../../assets/download-icon.gif";

import "./download.css";

export const DownloadCom = () => {
  return (
    <div className="download">
      <div className="download-img">
        <img src={phoneImg} />
        <div className="download-boxshot">
          <img src={boxshot} />
          <div className="download-boxshot-text">
            <p>
              Stranger Things <br/>
              <span>Downloading...</span>
            </p>
          </div>
          <img src={downloadIcon} />
        </div>
      </div>
      <div className="download-text">
        <div>
          <h2>Download your shows to watch offline</h2>
          <p>Save your favorites easily and always have something to watch.</p>
        </div>
      </div>
    </div>
  );
};
