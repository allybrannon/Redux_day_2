import React from "react";

const Increment = (props) => (
  <div>
    <button onClick={() => props.handleClick()}>Give me money</button>
  </div>
);

export default Increment;
