import React, { Component } from "react";
import {footer_links,links,dropup,button,footer_contacts,footer_logo,hr_end,footer_lists} from './footerStyle.module.scss'


class Footer extends Component {
  render() {
    return (
      <footer>
        <div className={`container-fluid ${footer_links}`}>
          <div className="row">
            <div className="col-sm-9 ">
              <div className={`row ${links}`}>
                <ul className="col-sm-4">
                  <li className="font-weight-bold">Udemy for Business</li>
                  <li className="font-weight-bold">Teach on Udemy</li>
                  <li>Udemy App</li>
                  <li>About us</li>
                </ul>
                <ul className="col-sm-4">
                  <li>Careers</li>
                  <li>Blog</li>
                  <li>Help and Support</li>
                  <li>Affiliate</li>
                </ul>
                <ul className="col-sm-4">
                  <li>Sitemap</li>
                  <li>Popular courses</li>
                </ul>
              </div>
            </div>
            <div className="col-sm-3">
              <div className={dropup}>
                <button 
                  type="button"
                  className={`btn btn-primary dropdown-toggle ${button}`}
                  data-toggle="dropdown"
                >
                  <i className="fa fa-globe" />
                  <span> English </span>
                </button>
                <div className="dropdown-menu">
                  <a className="dropdown-item" href="#">
                    VietNamese
                  </a>
                  <a className="dropdown-item" href="#">
                    Vietlish
                  </a>
                  <a className="dropdown-item" href="#">
                    Chinese
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className={footer_contacts}>
          <div className="row">
            <div className="col-sm-6">
              <div className={footer_logo}>
                <img 
                  src="https://www.udemy.com/staticx/udemy/images/v6/logo-coral.svg"
                  
                />
                <span>Copyright © 2019 Udemy, Inc. </span>
              </div>
            </div>
            <div className="col-sm-6">
              <div className={footer_lists}>
                <span>Terms</span>
                <span>Privacy Policy and Cookie Policy</span>
              </div>
            </div>
          </div>
        </div>
        <hr className="hr_end" />
      </footer>
    );
  }
}

export default Footer;
