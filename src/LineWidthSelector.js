import React from "react";

function LineWidthSelector({ lineWidth, setLineWidth }) {
  const handleChange = (event) => {
    setLineWidth(event.target.value);
  };

  return (
    <div>
      <label htmlFor="line-width-slider">Line Width: </label>
      <input
        id="line-width-slider"
        type="range"
        min="1"
        max="10"
        value={lineWidth}
        onChange={handleChange}
      />
    </div>
  );
}

export default LineWidthSelector;
