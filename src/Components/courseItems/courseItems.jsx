import React, { Component } from "react";
import CourseItem from '../CourseItem/CourseItem'
import CartItem from '../CartItem/CartItem'
export default class CourseItems extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          {this.props.courseList!==null && !this.props.isCartScreen && this.props.courseList.map((item, index) => (  
             <div className="col-3 mt-4" key={index}>        
              <CourseItem  item={item} history={this.props.history} isOrdered={this.props.isOrdered}/>       
              </div>   
          ))}
          {this.props.courseList!==null && this.props.isCartScreen && this.props.courseList.map((item, index) => (     
             <div className="col-3 mt-4"  key={index}>     
              <CartItem item={item} history={this.props.history} />          
              </div>
          ))}
        </div>
      </div>
    );
  }
}
