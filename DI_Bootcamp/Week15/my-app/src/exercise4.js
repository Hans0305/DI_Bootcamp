import React from "react";


const style_header = {
  color: "white",
  backgroundColor: "DodgerBlue",
  padding: "10px",
  fontFamily: "Arial",
};

const exercise4 = (props) => {
  return (
    <div>
      <h1 style={style_header}>This is a Header</h1>
      <p className="para">This is a paragraph</p>
      <a href="/#">This is a link</a>
      <form>
        <label>This is a form</label>
        <br></br>
        <label>Enter your name</label>
        <br></br>
        <input type="text"></input>
      </form>
 
      <ul>
        This is a list:
        <li>Coffee</li>
        <li>Tea</li>
        <li>Milk</li>
      </ul>
    </div>
  );
};
export default exercise4;