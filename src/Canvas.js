import React, { useRef, useState, useEffect } from "react";

function Canvas({ color, lineWidth, tool }) {
  const canvasRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    context.strokeStyle = color;
    context.lineWidth = lineWidth;
    context.lineCap = "round"; // Sets the style of the end caps for a line

    // Setup the correct context based on the tool
    if (tool === "eraser") {
      context.globalCompositeOperation = "destination-out"; // Set to erase
      context.strokeStyle = "rgba(0,0,0,1)"; // Just needs to be opaque
    } else {
      context.globalCompositeOperation = "source-over"; // Set to draw
      context.strokeStyle = color;
    }
  }, [color, lineWidth, tool]);

  const startDrawing = ({ nativeEvent }) => {
    const { offsetX, offsetY } = nativeEvent;
    const context = canvasRef.current.getContext("2d");
    context.beginPath();
    context.moveTo(offsetX, offsetY);
    setIsDrawing(true);
  };

  const draw = ({ nativeEvent }) => {
    if (!isDrawing) return;
    const { offsetX, offsetY } = nativeEvent;
    const context = canvasRef.current.getContext("2d");
    context.lineTo(offsetX, offsetY);
    context.stroke();
  };

  const stopDrawing = () => {
    const context = canvasRef.current.getContext("2d");
    context.closePath();
    setIsDrawing(false);
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    context.clearRect(0, 0, canvas.width, canvas.height);
  };

  return (
    <div>
      <canvas
        ref={canvasRef}
        width={800}
        height={600}
        style={{ border: "1px solid black" }}
        onMouseDown={startDrawing}
        onMouseMove={draw}
        onMouseUp={stopDrawing}
        onMouseLeave={stopDrawing}
      />
      <button onClick={clearCanvas}>Clear Canvas</button>
    </div>
  );
}

export default Canvas;
