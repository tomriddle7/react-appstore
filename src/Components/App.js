import React, { Component } from "react";
import BigScreen from "./BigScreen";
import Router from "./Router";
import GlobalStyles from "./GlobalStyles";

class App extends Component {
  render() {
    return (
      <>
        <BigScreen />
        <Router />
        <GlobalStyles />
      </>
    );
  }
}

export default App;