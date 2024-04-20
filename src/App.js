import React, { useState } from "react";
import "./App.css";
import Canvas from "./Canvas";
import ColorPicker from "./ColorPicker";
import LineWidthSelector from "./LineWidthSelector";
import ToolSelector from "./ToolSelector";

function App() {
  const [color, setColor] = useState("#000000");
  const [lineWidth, setLineWidth] = useState(3);
  const [tool, setTool] = useState("pencil");

  return (
    <div className="App">
      <h1>Kayla's Art Studio!</h1>
      <ColorPicker color={color} setColor={setColor} />
      <LineWidthSelector lineWidth={lineWidth} setLineWidth={setLineWidth} />
      <ToolSelector tool={tool} setTool={setTool} />
      <Canvas color={color} lineWidth={lineWidth} tool={tool} />
    </div>
  );
}

export default App;
