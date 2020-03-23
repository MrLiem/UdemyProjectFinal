import React, { Component } from "react";
import HomeScreen from "./Screens/Home/home";
import CourseDetail from "./Screens/CourseDetail/courseDetail";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { connect } from "react-redux";
import reduxAction from "./Redux/Action/action";
import { restConnector } from "./Services";

// import Layout
import HeaderComponent from "./Layouts/Header/Header";
import FooterComponent from './Layouts/Footer/Footer';

import { LOGIN } from "./Redux/Action/type";
import ProfileDetail from "./Screens/Profile/ProfileDetail";
import CourseListCategoriesComponent from "./Components/CourseItem/CourseListCategories/CourseListCategories";
import PageResult from "./Screens/PageSearch/PageResult";
import CourseApprovedComponent from "./Screens/CourseManagement/CourseApproved";
import PageNotFound from "./Screens/PageNotFound/PageNotFound";

import './App.scss';


class App extends Component {
  render() {   
    return (
      
      <BrowserRouter>
        <HeaderComponent />
        <Switch>
            <Route exact path="/home" component={HomeScreen} />
            <Route exact path="/" component={HomeScreen} />
            <Route exact path="/coursedetail/:courseid" component={CourseDetail}/>
            <Route exact path="/profile" component={ProfileDetail} />
            <Route exact path="/coursecategories/:maDanhMuc" component={CourseListCategoriesComponent}/>
            <Route exact path="/page-result/:tenKhoaHoc" component={PageResult} />
            <Route exact path="/my-course" component={CourseApprovedComponent} />
            <Route component={PageNotFound} />
            <Route exact path="/" component={HomeScreen} />
        </Switch>
        <FooterComponent />
  
      </BrowserRouter>
    );
  }
  componentDidMount() {
    const userLoginStr = localStorage.getItem("userLogin");
    const userAccessToken = localStorage.getItem('accessToken');
    if (userLoginStr && userAccessToken) {
      restConnector.defaults.headers['Authorization'] = "Bearer " + userAccessToken
      
      this.props.dispatch( reduxAction( LOGIN, JSON.parse(userLoginStr) )  );

    }
 
  }
}

export default connect()(App);
