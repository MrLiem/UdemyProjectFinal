import React, { Component } from "react";
//import connect để kết nối vs store
import { connect } from "react-redux";

// import courseService để gọi API
import CourseService from "../../Services/coursesService";

// import action để chọn action gửi lên store
import reduxAction, { fetchCourseDetail } from "../../Redux/Action/action";
// import thẻ component card
import Card from "../../Components/card/card";
// import paper
import PaperSheet from "../../Components/paper/paper";
// import ExpandPanel
import ExpandPanel from '../../Components/expandPanel/expandPanel'

//
import Header from "../../Layouts/header/header";
import Cover from "../../Layouts/cover/cover";
import Footer from '../../Layouts/footer/footer';
// import scss
import classes from "./courseDetailStyle.module.scss";

class CourseDetail extends Component {
  //chạy 1 lần duy nhất sau khi render dc chạy lần đầu
  componentDidMount() {
    let maKhoaHoc= this.props.match.params.maKh;
    //console.log(maKhoaHoc);
    this.props.dispatch(fetchCourseDetail(maKhoaHoc));
  }
  render() {
    //console.log(this.props.courseDetail);
    const item= this.props.courseDetail;
    return (
      <div className={classes.myCourseDetail}>
        <Header />
        <div className={classes.myCover}>
          <Cover />
          <div className={classes.myPaper}>
            <PaperSheet />
          </div>
          <div className={classes.myPanel}>
            <ExpandPanel/>
          </div>
          <div className={classes.myCard}>
            <Card item={item}/>
          </div>
        </div>
        <Footer/>
      </div>
      
    );
  }
}

// lấy dự liệu từ trên store về
const mapStateToProps = state => ({
  courseDetail: state.courseDetail
});

export default connect(mapStateToProps)(CourseDetail);
