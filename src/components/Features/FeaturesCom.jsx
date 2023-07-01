import React from "react";

import TV from "../../assets/tv.png";

import "./features.css";

export const FeaturesCom = () => {
  return (
      <div className="features">
        <div className="text-col">
          <h2>Enjoy on your TV</h2>
          <p>
            Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray
            players, and more.
          </p>
        </div>
        <div className="img-col">
          <img src={TV} />
          <video autoPlay playsInline muted loop>
            <source
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v"
              type="video/mp4"
            />
          </video>
        </div>
      </div>
  );
};
