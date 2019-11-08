import React, { Component } from "react";
import classes from "./coverStyle.module.scss";
export default class Cover extends Component {
  render() {
    return (
      
      <section className={ classes.myCover}>    
        <div className={classes.cover_content}>
          <h1>More than a course</h1>
          <p>
            With 40 million students, Udemy isn’t just a product — it’s a
            movement. Want to join?
          </p>
          <div className="input">
            <form>
              <div className="input-group ">
                <input
                  type="text"
                  className="form-control"
                  placeholder="What do you want to learn"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
                <div className="input-group-prepend">
                  <span className="input-group-text" id="basic-addon1">
                    <i className="fa fa-search" />
                  </span>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
     
    );
  }
}
