import React, { useEffect, useState } from "react";
import Header from "../../Layouts/header/header";
import Cover from "../../Layouts/cover/cover";
import Intro from "../../Layouts/myIntro/myIntro";
import Footer from "../../Layouts/footer/footer";
import Banner from "../../Layouts/Banner/Banner";
import CourseItems from "../../Components/courseItems/courseItems";
import Categories from "../../Layouts/Categories/Categories";
import NonStudents from "../../Layouts/NonStudents/NonStudents";
import Students from "../../Layouts/Students/Students";
import Carousel from "../../Components/Carousel/Carousel";
import CourseItem from '../../Components/CourseItem/CourseItem'
//import axios lấy dữ liệu nè
import axios from "react-redux";

// import CourseService nơi chứa cácc service liên quan đến tương tác server
import CourseService from "../../Services/coursesService";

// import action để gửi lên store
import reduxAction from "../../Redux/Action/action";

// import type của action
import { FETCH_COURSES } from "../../Redux/Action/type";

import convertJsonToArray from "../../Utils/convertJsonToArray";
import Pagination from "../../Components/Pagination/Pagination";
import { useSelector, useDispatch } from "react-redux";
import * as OrderActions from '../../Redux/Action/OrderAction'
import Spinner from '../../Components/Spinner/Spinner'

const Home = props => {
  const dispatch = useDispatch();
  const [categoryCourses, setCategoryCourses] = useState(null);
  const courseList = useSelector(state => state.courseList.availableCourses);
  const userCourses = useSelector(state => state.courseList.userCourses);
  const orderedCourses=useSelector(state=>state.order.orderedCoures);
  const [isLoading,setIsLoading]=useState(false);
  
  useEffect(() => {
    setIsLoading(true);
    CourseService.fetchCourses()
      .then(res => {
        setIsLoading(false)
        setCategoryCourses(convertJsonToArray(res.data));
        dispatch(reduxAction(FETCH_COURSES, convertJsonToArray(res.data)));
      })
      .catch(err => {
        console.log(err);
      });
      dispatch(OrderActions.fetchOrders()).then(res=> setIsLoading(false));
   
  }, []);

  const chooseCategory = category => {
    if (category === "ALL") {
      setCategoryCourses(courseList);
      return;
    }
    if (courseList !== null) {
      const newCategoryCourses = courseList.filter(
        course => course.category === category
      );
      setCategoryCourses(newCategoryCourses);
    }
  };

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

  const onInputChange = text => {
    // console.log(text)
    // if(text!==''){
    //   const newCategoryCourses = courseList.filter(
    //     course =>course.title.includes(text)
    //   );
    //   setCategoryCourses(newCategoryCourses);
    // }
  };

  if(isLoading){
    return <Spinner/>
  }

  return (
    <div>
      <Header history={props.history} onInputChange={onInputChange} />
      <Cover />
      <Intro />
      <h1 className="text-center display-4 text-success">Home</h1>
      <div style={{ width: "73%", margin: "0 auto" }}>
        <Pagination chooseCategory={chooseCategory} />
      </div>
      {/* <CourseItems courseList={categoryCourses} history={props.history} /> */}
      <div className="container">
        <div className="row">
        {categoryCourses!==null  && categoryCourses.map((item, index) => (  
             <div className="col-3 mt-4" key={index}>        
              <CourseItem  item={item} history={props.history} isOrdered={checkOdered(item,orderedCourses)} isMyCourse={checkIsMyCourse(item,userCourses)}/>       
              </div>   
          ))}
        </div>
      </div>

      <h1 className="text-center display-4 text-success mt-4">Your Courses</h1>
      <div className="container">
        {userCourses.length !== 0 && (
          <Carousel userCourses={userCourses} history={props.history} />
        )}
      </div>
      <Categories />
      <Banner />
      <NonStudents />
      <Footer />
    </div>
  );
};

export default Home;

// const mapStateToProps = state => {
//   return {
//     courseList: state.courseList,
//     user: state.auth.userId
//   };
// };

// export default connect(mapStateToProps)(Home);
