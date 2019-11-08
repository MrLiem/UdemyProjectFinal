import React, { Component } from "react";
import classes from './headerStyle.module.scss'

export default class Header extends Component {
  render() {
    return (
      <header className={`container-fluid ${classes.myNavBar}`}>
        <nav className="navbar navbar-expand-md navbar-light">
          <div className="col-6 col-md-8  col-xl-6">
            <div className="row">
              <a className={`navbar-brand ${classes.navbar_brand}`} href="#">
                <img src="./img/logo-coral.svg" alt="logo" />
              </a>
              <div className={classes.categories}>
                <i className="fa fa-th" /> Categories
              </div>
              <div className={classes.input_search}>
                <form>
                  <div className="input-group">
                    <input
                      type="text"
                      className={`form-control ${classes.form_control}`}
                      placeholder="Search for anything"
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                    />
                    <div className={`input-group-prepend ${classes.input_group_prepend}`}>
                      <span className={`input-group-text ${classes.input_group_text}`} id="basic-addon1">
                        <i className="fa fa-search" />
                      </span>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="col-4 col-md-4  col-xl-6" style={{ marginBottom: 4 }}>
            <div className="collapse navbar-collapse" id="collapsibleNavId">
              <ul className={`navbar-nav mr-auto ${classes.navbar_nav}`}>
                <li className={`nav-item business ${classes.nav_item}`}>
                  <a className={`nav-link ${classes.nav_link}`} href="#">
                    Udemy for Bussiness
                  </a>
                </li>
                <li className={`nav-item instructor ${classes.nav_item}`}>
                  <a className={`nav-link ${classes.nav_link}`} href="#">
                    Become an Instructor
                  </a>
                </li>
                <li className={`nav-item ${classes.nav_item}`}>
                  <a className={`nav-link ${classes.nav_link}`} href="#">
                    <i className="fa fa-shopping-cart" />
                  </a>
                </li>
                <li className={classes.nav_item}>
                  <div className="button">
                    <button className="btn btn-white">Log In</button>
                    <button className="btn btn-red">Sign Up</button>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <button
            className="col-2 navbar-toggler d-lg-none"
            type="button"
            data-toggle="collapse"
            data-target="#collapsibleNavId"
            aria-controls="collapsibleNavId"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
        </nav>
      </header>
    );
  }
}
