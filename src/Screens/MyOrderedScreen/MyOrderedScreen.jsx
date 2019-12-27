import React, { useState, useEffect } from "react";
import Header from "../../Layouts/header/header";
import CourseItems from "../../Components/courseItems/courseItems";
import Footer from '../../Layouts/footer/footer'
import {useSelector,useDispatch} from 'react-redux'
import * as OrderActions from '../../Redux/Action/OrderAction'

const MyOrderedCourses = props => {
 
  const orderedList= useSelector(state=>state.order.orderedCoures);
  const dispatch=useDispatch();

  // console.log(orderedList)
  useEffect(()=>{
    dispatch(OrderActions.fetchOrders());
  })

  return (
    <div>
      <Header history={props.history}/>
      <h1 className="text-center text-success">My Ordered Screen</h1>
      <CourseItems courseList={orderedList} history={props.history} isOrdered/>
      <Footer/>
    </div>
  );
};

export default MyOrderedCourses;
