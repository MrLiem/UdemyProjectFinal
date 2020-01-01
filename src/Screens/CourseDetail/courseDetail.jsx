import React, { useState, useEffect } from "react";

// import courseService để gọi API
import CourseService from "../../Services/coursesService";

// import action để chọn action gửi lên store
import reduxAction, { fetchCourseDetail } from "../../Redux/Action/action";
// import thẻ component card
import Card from "../../Components/card/card";
//
import Header from "../../Layouts/header/header";
import Cover from "../../Layouts/cover/cover";
import Footer from "../../Layouts/footer/footer";
// import scss
import classes from "./courseDetailStyle.module.scss";
import CardMedia from "../../Components/CardMedia/CardMedia";
import { useSelector, useDispatch } from "react-redux";
import * as OrderActions from "../../Redux/Action/OrderAction";
import Spinner from "../../Components/Spinner/Spinner";

const CourseDetail = props => {
  //chạy 1 lần duy nhất sau khi render dc chạy lần đầu
  const dispatch = useDispatch();
  // const [isOrdered,setIsOrdered]=useState(false);
  const course = useSelector(state => state.courseDetail);
  const orderedCourses = useSelector(state => state.order.orderedCoures);
  const myCourses = useSelector(state => state.courseList.userCourses);
  const [isLoading, setIsLoading] = useState(false);
 
  useEffect(() => {
    setIsLoading(true);
    let id = props.match.params.id;
    dispatch(fetchCourseDetail(id)).then(res => setIsLoading(false));
    dispatch(OrderActions.fetchOrders()).then(res => setIsLoading(false));
  }, []);

  const checkOdered = (course, orderedCourses) => {
    const courseCheck = orderedCourses.filter(order => order.id === course.id);
    if (courseCheck.length === 0) {
      return false;
    }
    return true;
  };

  const checkIsMyCourse = (course, myCourses) => {
    const courseCheck = myCourses.filter(myCourse => myCourse.id === course.id);
    if (courseCheck.length === 0) {
      return false;
    }
    return true;
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className={classes.myCourseDetail}>
      <Header history={props.history} />
      <div className={classes.myCover}>
        <Cover />
        <div className={classes.myCard}>
          <Card
            item={course}
            isOrdered={checkOdered(course, orderedCourses)}
            isMyCourse={checkIsMyCourse(course, myCourses)}
          />
        </div>
      </div>
      <CardMedia
        videoUrl={course.videoIntro}
        isOrdered={checkOdered(course, orderedCourses)}
        isMyCourse={checkIsMyCourse(course, myCourses)}
      />
      <Footer />
    </div>
  );
};

export default CourseDetail;
