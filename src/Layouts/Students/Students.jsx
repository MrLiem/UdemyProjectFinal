import React from "react";
import classes from "./Students.module.scss";
import Carousel from '../../Components/Carousel/Carousel'

const Students = props => {
  return (
    <section className={classes.myStudent}>
      <div className={classes.student_content}>
        <h3>Students are viewing</h3>
        <Carousel/>
         
         
       
      </div>
    </section>
  );
};

export default Students;
