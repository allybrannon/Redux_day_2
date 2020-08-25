import Output from "../components/Output";
import { connect } from "react-redux";

function mapStateToProps(state) {
  // To "translate" we use something like a dictionary. In JS, that's an object!!
  return {
    // propName seen by React: value-in-state
    amount: state.checking,
  };
}

// const IronManSuit = connect(mapStateToProps);
// export default IronManSuit(Output);
// This is what fluent Redux devs write:
export default connect(mapStateToProps)(Output);
