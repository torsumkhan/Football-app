import React from "react";

const Main = () => {
  return (
    <div className="main">
      <div className="select-fields">
        <div className="league-dropdown">
          <select className="league-names">
            <option>Argentine Liga Profesional de Fútbol</option>
            <option>Option 2</option>
            <option>Option 3</option>
            <option>Option 4</option>
          </select>
        </div>
        <div className="year">
          <select>
            <option>A</option>
            <option>B</option>
            <option>C</option>
            <option>D</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Main;
