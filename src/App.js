import React from "react";
import "./App.css";
import CounterApp from "./CounterApp";
import { Provider } from "react-redux";
import { store } from "./store";
function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <div>
          <CounterApp />
        </div>
      </Provider>
    </div>
  );
}

export default App;
