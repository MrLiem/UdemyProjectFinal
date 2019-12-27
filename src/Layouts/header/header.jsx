import React, { useEffect } from "react";
import classes from "./headerStyle.module.scss";
import { Link } from "react-router-dom";
import IconButton from "../../Components/IconButton/IconButton";
import Button from "../../Components/Button/Button";
import Avatar from "../../Components/Avatar/Avatar";
import CartIcon from '../../Components/CartIcon/CartIcon'
import {useDispatch,useSelector} from 'react-redux'
import UserServices from '../../Services/userService'
import * as localStorage from '../../Services/localStorage'

 const Header =props=> {
  const currentUser= useSelector(state=>state.currentUser)
  const dispatch= useDispatch();
  
  useEffect(()=>{
    const user= localStorage.getFromLocalStorage();
    dispatch(UserServices.fetchUser(user.userId))
  },[])

 
  
  const returnHomePage = () => {
    props.history.push("/home");
    //props.history.push('/courseDetail_maKh/'+props.item.id);
  };

  const avatarClicked=()=>{
    props.history.push("/user");
  }

  const returnCourseListScreen = () => {
    props.history.push("/orderedCourses");
  };

    const avatarImage= currentUser.imageUrl;
    return (
      <header className={`container-fluid ${classes.myNavBar}`}>
        <nav className="navbar navbar-expand-md navbar-light">
          <div className="col-6 col-md-8  col-xl-8">
            <div className="row">
              <a
                onClick={returnHomePage}
                className={`navbar-brand ${classes.navbar_brand}`}
                href="#"
              >
                <img src="./img/logo-coral.svg" alt="logo" />
              </a>
              <div className={classes.categories}>
                <i className="fa fa-th" /> Categories
              </div>
              <div className={classes.input_search}>
                <form>
                  <div className="input-group">
                    <input
                      type="text"
                      className={`form-control ${classes.form_control}`}
                      placeholder="Search for anything"
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                    />
                    <div
                      className={`input-group-prepend ${classes.input_group_prepend}`}
                    >
                      <span
                        className={`input-group-text ${classes.input_group_text}`}
                        id="basic-addon1"
                      >
                        <i className="fa fa-search" />
                      </span>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="col-4 col-md-4  col-xl-4" style={{ marginBottom: 4 }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center"
              }}
            >
              <div>
                <Button
                  text="Course List"
                  onClick={returnCourseListScreen}
                />
              </div>
              <div>
                <Avatar
                  alt="NONE"
                  src={avatarImage}
                  width="45px"
                  height="45px"
                  onClick={avatarClicked}
                />
              </div>
              <div>
                <CartIcon history={props.history}/>
              </div>
            </div>
          </div>
          <button
            className="col-2 navbar-toggler d-lg-none"
            type="button"
            data-toggle="collapse"
            data-target="#collapsibleNavId"
            aria-controls="collapsibleNavId"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
        </nav>
      </header>
    );
  
}


export default Header