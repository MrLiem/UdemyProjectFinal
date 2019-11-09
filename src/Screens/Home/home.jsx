import React, { Component } from 'react'
import Header from '../../Layouts/header/header'
import Cover from '../../Layouts/cover/cover'
import Intro from '../../Layouts/myIntro/myIntro'
import Footer from '../../Layouts/footer/footer'
import CourseItems from '../../Layouts/courseItems/courseItems'

//import axios lấy dữ liệu nè
import axios from 'react-redux';

// connect tới store
import {connect} from 'react-redux'

// import CourseService nơi chứa cácc service liên quan đến tương tác server
import CourseService from '../../Services/coursesService'

// import action để gửi lên store
import reduxAction from '../../Redux/Action/action'

// import type của action
import { FETCH_COURSES } from '../../Redux/Action/type'



class Home extends Component {

    // hàm tư động khởi chạy 1 lần duy nhất khi component khởi chạy 
    // sau render
    componentDidMount(){
        CourseService
        .fetchCourses()
        .then(res=>{
           this.props.dispatch(reduxAction(FETCH_COURSES,res.data))
        })
        .catch(err=>{
            console.log(err);
        })
    }

    render() {
       //console.log(this.props.courseList)
        return (
            <div>
                <Header/>
                <Cover/>
                <Intro/>
                <CourseItems courseList={this.props.courseList} history={this.props.history} />
                <Footer/>        
            </div>
        )
    }
}

const mapStateToProps=state=>{
    return{
        courseList: state.courseList
    };
};


export default connect(mapStateToProps)(Home)