import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import CourseItem from "../../Components/CourseItem/CourseItem";


const MyCarousel = props => {
  console.log(props.userCourses)
  const count= props.userCourses.length;
  return (
    <OwlCarousel
      className="owl-theme owl-loading owl-drag owl-dot owl-loaded"
      loop
      margin={10}
      nav
      items={3}
    >
      {/* <div className="item">
        <CourseItem/>
      </div>
      <div className="item">
      <CourseItem/>
      </div>
      <div className="item">
      <CourseItem/>
      </div>
      <div className="item">
      <CourseItem/>
      </div>
      <div className="item">
      <CourseItem/>
      </div> */}
      {props.userCourses.map(course => {
        return (
          <div key={course.id} className="item">
            <CourseItem item={course} history={props.history} isMyCourse/>
          </div>
        );
      })}
    </OwlCarousel>
  );
};

export default MyCarousel;
