import React from "react";
import { connect } from "react-redux";
import { actionWithdraw } from "../actions";

const Decrement = (props) => (
  <button onClick={props.handleClick}>Buy some stuff</button>
);

function mapDispatchToProps(dispatch) {
  return {
    handleClick: () => {
      dispatch(actionWithdraw(1000, "checking"));
      console.log("you bought something useless");
    },
  };
}
// I will replace this with smart connected version
export default connect(null, mapDispatchToProps)(Decrement);
