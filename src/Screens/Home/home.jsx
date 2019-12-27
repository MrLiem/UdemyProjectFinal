import React, { Component } from "react";
import Header from "../../Layouts/header/header";
import Cover from "../../Layouts/cover/cover";
import Intro from "../../Layouts/myIntro/myIntro";
import Footer from "../../Layouts/footer/footer";
import Banner from '../../Layouts/Banner/Banner'
import CourseItems from "../../Components/courseItems/courseItems";
import Categories from '../../Layouts/Categories/Categories'
import NonStudents from '../../Layouts/NonStudents/NonStudents'
import Students from '../../Layouts/Students/Students'

//import axios lấy dữ liệu nè
import axios from "react-redux";

// connect tới store
import { connect, useDispatch } from "react-redux";

// import CourseService nơi chứa cácc service liên quan đến tương tác server
import CourseService from "../../Services/coursesService";

// import action để gửi lên store
import reduxAction from "../../Redux/Action/action";

// import type của action
import { FETCH_COURSES } from "../../Redux/Action/type";


import convertJsonToArray from '../../Utils/convertJsonToArray'


class Home extends Component {

  // hàm tư động khởi chạy 1 lần duy nhất khi component khởi chạy
  // sau render
 
  componentDidMount() {
    CourseService.fetchCourses()
      .then(res => {
        this.props.dispatch(
          reduxAction(FETCH_COURSES, convertJsonToArray(res.data))
        );
      })
      .catch(err => {
        console.log(err);
      });
  }

  // thêm courses ban đầu
  addProducts = () => {
    CourseService.addCourses()
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    //    console.log(this.props.courseList)
    return (
      <div>
        <Header history={this.props.history}/>
        <Cover />
        <Intro />
        <h1 className="text-center display-4 text-success">Home</h1>
        <CourseItems
          courseList={this.props.courseList}
          history={this.props.history}
        />
        {/* <button className="btn btn-success" onClick={this.addProducts}>
          Them user
        </button> */}
        <Students/>
        <Categories/>
        <Banner/>
        <NonStudents/>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    courseList: state.courseList,
    user: state.auth.userId
  };
};

export default connect(mapStateToProps)(Home);
