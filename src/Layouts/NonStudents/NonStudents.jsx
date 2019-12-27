import React from "react";
import classes from './NonStudents.module.scss'

const NonStudents = props => {
  return (
    <section className={`${classes.non_students} d-flex`}>
      <div className={classes.teachers}>
        <h5>Teach on Udemy</h5>
        <p>
          Teach what you love. Udemy gives you the
          <br /> tools to create an online course.
        </p>
        <button className="btn btn-danger">Start teaching</button>
      </div>
      <div className={classes.businesses}>
        <h5>Udemy for Business</h5>
        <p>
          Get unlimited access to 3,500+ of Udemy’s
          <br /> top courses for your team.
        </p>
        <button className="btn btn-danger">Get Udemy for Business</button>
      </div>
    </section>
  );
};

export default NonStudents;
