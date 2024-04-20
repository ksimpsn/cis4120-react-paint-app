import React from "react";

function ColorPicker({ color, setColor }) {
  const handleChange = (event) => {
    setColor(event.target.value);
  };

  return (
    <div>
      <label htmlFor="color-picker">Choose Color: </label>
      <input
        id="color-picker"
        type="color"
        value={color}
        onChange={handleChange}
      />
    </div>
  );
}

export default ColorPicker;
