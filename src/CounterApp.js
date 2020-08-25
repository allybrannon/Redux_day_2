import React from "react";
import Output from "./container/OutputContainer";
import Increment from "./container/IncrementContainer";
import Decrement from "./container/DecrementContainer";
const CounterApp = (props) => (
  <div>
    <h1>The Most Amazing Counter App EVER!</h1>
    <Output />
    {/* Increment button */}
    <Increment />
    {/* Decrement Button */}
    <Decrement />
  </div>
);

export default CounterApp;
