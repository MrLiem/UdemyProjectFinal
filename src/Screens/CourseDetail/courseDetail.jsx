import React, { useState,useEffect } from "react";

// import courseService để gọi API
import CourseService from "../../Services/coursesService";

// import action để chọn action gửi lên store
import reduxAction, { fetchCourseDetail } from "../../Redux/Action/action";
// import thẻ component card
import Card from "../../Components/card/card";
//
import Header from "../../Layouts/header/header";
import Cover from "../../Layouts/cover/cover";
import Footer from '../../Layouts/footer/footer';
// import scss
import classes from "./courseDetailStyle.module.scss";
import CardMedia from '../../Components/CardMedia/CardMedia'
import {useSelector,useDispatch} from 'react-redux'
import * as OrderActions from '../../Redux/Action/OrderAction'

const CourseDetail=props=>  {
  //chạy 1 lần duy nhất sau khi render dc chạy lần đầu
  const dispatch=useDispatch();
  // const [isOrdered,setIsOrdered]=useState(false);
  const course= useSelector(state=>state.courseDetail)
  const orderedCourses=useSelector(state=>state.order.orderedCoures);
  
  useEffect(()=> {
    let id= props.match.params.id;
    dispatch(fetchCourseDetail(id));
    dispatch(OrderActions.fetchOrders());
  },[])
    
  const check=(course,orderedCourses)=>{
    const courseCheck=orderedCourses.filter(order=>order.id===course.id);
    if(courseCheck.length===0){
      return false
    }
    return true;
  }
   

    return (
      <div className={classes.myCourseDetail}>
        <Header history={props.history}/>
        <div className={classes.myCover}>
          <Cover />
          <div className={classes.myCard}>
            <Card item={course} isOrdered={check(course,orderedCourses)}/>
          </div>
        </div>
        <CardMedia isOrdered={check(course,orderedCourses)}/>
        <Footer/>
      </div>
      
    );
  
}

export default CourseDetail