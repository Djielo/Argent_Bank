import React from "react";

const HomeFeatureItem = ({ src, title, txt }) => {
  return (
    <div className="feature-item">
      <img src={src} alt="Chat Icon" className="feature-icon" />
      <h3 className="feature-item-title">{title}</h3>
      <p>{txt}</p>
    </div>
  );
};

export default HomeFeatureItem;
