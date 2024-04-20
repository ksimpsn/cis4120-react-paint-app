import React from "react";

function ToolSelector({ tool, setTool }) {
  const handleSelect = (event) => {
    setTool(event.target.value);
  };

  return (
    <div>
      <label htmlFor="tool-selector">Select Tool: </label>
      <select id="tool-selector" value={tool} onChange={handleSelect}>
        <option value="pencil">Pencil</option>
        <option value="eraser">Eraser</option>
      </select>
    </div>
  );
}

export default ToolSelector;
