import React from "react";

function ToolSelector({ tool, setTool }) {
  return (
    <div>
      <label htmlFor="tool-selector">Tool: </label>
      <select
        id="tool-selector"
        value={tool}
        onChange={(e) => setTool(e.target.value)}
      >
        <option value="pencil">Pencil</option>
        <option value="eraser">Eraser</option>
      </select>
    </div>
  );
}

export default ToolSelector;
