import React, { Component } from "react";
import CourseItem from '../../Components/courseItem/courseItem'

export default class CourseItems extends Component {
  render() {
    return (
      <div className="container">
        <h1 className="text-center display-4 text-success">Home</h1>
        <div className="row">
          {this.props.courseList.map((item, index) => (
            <CourseItem key={index} item={item} history={this.props.history}/>
          ))}
        </div>
      </div>
    );
  }
}
