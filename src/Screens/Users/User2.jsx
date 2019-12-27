import React,{useState,useEffect} from "react";
import Header from "../../Layouts/header/header";
import Avatar from "../../Components/Avatar/Avatar";
import Tab from "../../Components/Tab/Tab";
import Table from "../../Components/Table/Table";
import Button from "../../Components/Button/Button";
import Footer from "../../Layouts/footer/footer";
import {useSelector,useDispatch} from 'react-redux'
import classes from "./User2.module.scss";
import UserServices from '../../Services/userService'
import * as localStorage from '../../Services/localStorage'

const User2 = props => {

  const currentUser= useSelector(state=>state.currentUser);
  const dispatch= useDispatch();
  useEffect(()=>{
    const user= localStorage.getFromLocalStorage();
    dispatch(UserServices.fetchUser(user.userId))
  },[])
  
  return (
    <div>
      <Header history={props.history}/>
      <div className={`py-5 ${classes.myUser2}`}>
        <div className="container">
          <div className="row">
            <div className="col-3">
              <Avatar
                alt="NONE"
                src={currentUser.imageUrl}
                width='100px'
                height='100px'
              />
              <div>
                <h5>Framwork: </h5>
                <p>React Js</p>
              </div>
              <div>
                <h5>Skills</h5>
                <p>Web Designer</p>
                <p>Web Developer</p>
              </div>
            </div>
            <div className="col-7">
              <h5>Jonathan2512</h5>
              <p>Web Developer and Designer</p>

              <Tab />
              <Table currentUser={currentUser}/>
            </div>
            <div className="col-2">
              <Button text="Edit your profile" />
            </div>
          </div>
        </div>
      </div>
      <div className={classes.myFooter}>
        <Footer />
      </div>
    </div>
  );
};

export default User2;
