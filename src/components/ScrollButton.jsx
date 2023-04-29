import React from "react";

const ScrollButton = () => {
  return (
    <button className="flex justify-between gap-4">
      <p className="md:font-bold md:text-white p-2 w-24 whitespace-nowrap align-text-bottom">
        Scroll Down
      </p>
      <div className="h-12 w-12 relative bg-white rounded-full items-center">
        <svg
          width="24px"
          height="24px"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute text-center my-3 mx-3"
        >
          <title />

          <g id="Complete">
            <g id="arrow-down">
              <g>
                <polyline
                  data-name="Right"
                  fill="none"
                  id="Right-2"
                  points="7 16.4 12 21.5 17 16.4"
                  stroke="#000000"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                />

                <line
                  fill="none"
                  stroke="#000000"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  x1="12"
                  x2="12"
                  y1="2.5"
                  y2="19.2"
                />
              </g>
            </g>
          </g>
        </svg>
      </div>
    </button>
  );
};

export default ScrollButton;
