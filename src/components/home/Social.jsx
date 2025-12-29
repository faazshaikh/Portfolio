import React from "react";

const Social = () => {
  return (
    <div className="home__social">
      <a
        href="https://github.com/faazshaikh"
        className="home__social-icon"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="uil uil-github-alt"></i>
      </a>

      <a
        href="https://linkedin.com/in/faazwshaikh"
        className="home__social-icon"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="uil uil-linkedin-alt"></i>
      </a>

      <a
        href="mailto:faazwaheedshaikh@gmail.com"
        className="home__social-icon"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="uil uil-envelope"></i>
      </a>
    </div>
  );
};

export default Social;
