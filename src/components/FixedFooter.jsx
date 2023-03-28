import React from "react";

function FixedFooter() {
  return (
    <section className="fixed-footer">
      <div className="content">
        <p>Based in Prague, currently somewhere in the USA</p>
        <a href="/" className="link">
          <span>Reach out</span>
          <svg
            className="animation"
            width="64"
            height="20"
            viewBox="0 0 82 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 19.5912C10.5 19.5912 11.1876 -0.119709 16.5 2.32749C22.5 5.09144 9.77856 26.7847 20 28.0911C30.5377 29.4379 18.3261 3.00823 27.5 2.09112C37.5 1.09144 27.488 30.1131 38 27.5914C47.939 25.2072 30.4301 3.8421 40.5 2.09112C52 0.0914757 43.2277 31.7032 52 28.0911C60.5 24.5912 46.1862 3.29317 54 2.09112C60.5 1.09119 60 16.946 68.5 19.5912C72.7882 20.9256 79.5 19.5912 79.5 19.5912M79.5 19.5912L71.5 10.5911M79.5 19.5912L71.5 28.0911"
              stroke="#3D5CBC"
              stroke-width="2.5"
            />
          </svg>
        </a>
      </div>
    </section>
  );
}

export default FixedFooter;
