import React from "react";
import Home from "./Screens/Home/home";
import CssBaseline from "@material-ui/core/CssBaseline";

function App() {
  return (
    <React.Fragment>
      <CssBaseline/>
      <div className="App">
        <Home />
      </div>
    </React.Fragment>
  );
}

export default App;
