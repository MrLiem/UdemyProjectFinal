import React,{Fragment} from "react";
import Home from "./Screens/Home/home";
import CssBaseline from "@material-ui/core/CssBaseline";
// import route
import { BrowserRouter, Route,Redirect } from "react-router-dom";

// import CourseDatailTheme
import CourseDetail from "./Screens/CourseDetail/courseDetail";

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <BrowserRouter>
        <Fragment>
          <Route path="/home" exact component={Home} />
          <Route path="/courseDetail/:maKh" component={CourseDetail} />
          <Redirect to="/home"></Redirect>
        </Fragment>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
