import React, { useState } from "react";

function Colorpicker() {
  const [color, setColor] = useState("#FFFFFF");
  function handleColorChange(e) {
    setColor(e.target.value);
  }

  return (
    <div className="container mb-5 bg-info-subtle p-3">
      <h2>Color Picker</h2>
      <div style={{ backgroundColor: color }}>
        <p>Selected Color : {color}</p>
      </div>
      <label>Select a Color :</label>
      <input type="color" value={color} onChange={handleColorChange} />
    </div>
  );
}

export default Colorpicker;
