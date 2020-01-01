import React, { useState, useEffect } from "react";
import Header from "../../Layouts/header/header";
import Avatar from "../../Components/Avatar/Avatar";
import Tab from "../../Components/Tab/Tab";

import Footer from "../../Layouts/footer/footer";
import { useSelector, useDispatch } from "react-redux";
import classes from "./User2.module.scss";
import UserServices from "../../Services/userService";
import * as localStorage from "../../Services/localStorage";
import FormUser from "../../Components/FormUser/FormUser";
import Dialog from "../../Components/Dialog/Dialog";
import CourseServices from "../../Services/coursesService";
import reduxAction from "../../Redux/Action/action";
import { FETCH_COURSES } from "../../Redux/Action/type";
import convertJsonToArray from "../../Utils/convertJsonToArray";
import * as CourseActions from "../../Redux/Action/CourseActions";
import CourseItem from "../../Components/CourseItem/CourseItem";
import Spinner from '../../Components/Spinner/Spinner'
const User2 = props => {
  const userCourses = useSelector(state => state.courseList.userCourses);
  const currentUser = useSelector(state => state.currentUser.info);
  console.log(currentUser.userId)
  const idCurrentUser= useSelector(state=>state.currentUser.id);
  const [isLoading,setIsLoading]=useState(false);
  // console.log('render lai')
  // console.log('userCourses ',userCourses)
  const dispatch = useDispatch();

  useEffect(() => {
    setIsLoading(true);
    const user = localStorage.getFromLocalStorage();
    CourseServices.fetchCourses()
      .then(res => {
        setIsLoading(false);
        dispatch(reduxAction(FETCH_COURSES, convertJsonToArray(res.data)));
      })
      .catch(err => {
        console.log(err);
      });
    dispatch(UserServices.fetchUser(user.userId)).then(res=>setIsLoading(false));
  }, []);

  const deleteCourse = id => {
    setIsLoading(true);
    dispatch(CourseActions.deleteCourse(id)).then(res=>setIsLoading(false));
  };
  const addCourse = (
    title,
    price,
    imageUrl,
    videoIntro,
    description,
    category
  ) => {
    setIsLoading(true);
    dispatch(
      CourseActions.addCourse(
        title,
        price,
        imageUrl,
        videoIntro,
        description,
        category
      )
    ).then(res=>setIsLoading(false));
  };

  if(isLoading){
    return <Spinner/>
  }
  return (
    <div>
      <Header history={props.history} />
      <div className={`py-5 ${classes.myUser2}`}>
        <div className="container">
          <div className="row">
            <div className="col-3">
              <Avatar
                alt="NONE"
                src={currentUser.imageUrl}
                width="100px"
                height="100px"
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
              {/* <Table currentUser={currentUser} /> */}
              {typeof currentUser.userId !== "undefined" && (
                <FormUser currentUser={currentUser} id={idCurrentUser} />
              )}
            </div>
            {/* <div className="col-2">
              <Button text="Edit your profile" />
            </div> */}
          </div>
        </div>
      </div>
      {/*Your Courses*/}
      <h1 className="text-center text-success">Your Courses</h1>
      <div style={{display:'flex',justifyContent:'flex-end',marginRight:'14%'}}>
        <Dialog addCourse={addCourse} />
      </div>

      <div className="container">
        <div className="row">
          {userCourses.map((course, index) => {
            return (
              <div className="col-3 mt-4" key={index}>
                <CourseItem
                  item={course}
                  history={props.history}
                  isDelete
                  deleteCourse={deleteCourse}
                />
              </div>
            );
          })}
        </div>
      </div>

      <div className={classes.myFooter}>
        <Footer />
      </div>
    </div>
  );
};

export default User2;
