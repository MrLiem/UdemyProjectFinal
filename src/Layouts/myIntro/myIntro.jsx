import React, { Component } from "react";
import classes from './myIntroStyle.module.scss'

export default class Intro extends Component {
  render() {
    return (
      <section className={`container-fluid ${classes.myIntro}`}>
        <div className= {classes.intro_content}>
          <div className="row">
            <div className="col-md-4">
              <div className={`d-flex ${classes.intro_item}`} >
                <div className={classes.icon}>
                  <i className="fa fa-bullseye" />
                </div>
                <div className={classes.icon_content}>
                  <p>100,000 online courses</p>
                  <p>Explore a variety of fresh topics</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className={`d-flex justify-content-center ${classes.intro_item}`} >
                <div className={classes.icon}>
                  <i className="fa fa-spinner" />
                </div>
                <div className={classes.icon_content}>
                  <p>Expert instruction</p>
                  <p>Find the right instructor for you</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className={` d-flex justify-content-end ${classes.intro_item}`}>
                <div className={classes.icon}>
                  <i className="fa fa-recycle" />
                </div>
                <div className={classes.icon_content}>
                  <p>Lifetime access</p>
                  <p>Learn on your schedule</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
