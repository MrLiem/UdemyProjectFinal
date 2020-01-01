import React, { Fragment } from "react";
import Home from "./Screens/Home/home";
import CssBaseline from "@material-ui/core/CssBaseline";
// import route
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

// import CourseDatailTheme
import CourseDetail from "./Screens/CourseDetail/courseDetail";

// import SignIn Theme
import SignIn from "./Screens/SignIn/signIn";
// import SignUp Theme
import SignUp from "./Screens/SignUp/signUp";

import User2 from "./Screens/Users/User2";
import MyOrderedScreen from "./Screens/MyOrderedScreen/MyOrderedScreen";
import CartScreen from "./Screens/CartScreen/CartScreen";
import OrderScreen from "./Screens/OrderScreen/OrderScreen";

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <BrowserRouter>
        <Fragment>
          <Switch>
            <Route path="/signIn" component={SignIn} />
            <Route path="/home" component={Home} />
            <Route path="/courseDetail_maKh/:id" component={CourseDetail} />
            <Route path="/signUp" component={SignUp} />
            <Route path="/user" component={User2} />
            <Route path="/orderedCourses" component={MyOrderedScreen} />
            <Route path="/cart" component={CartScreen} />
            <Route path="/orders" component={OrderScreen} />
            <Redirect to="/signIn"> </Redirect>
          </Switch>
        </Fragment>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
