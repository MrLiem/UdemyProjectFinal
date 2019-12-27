import React from "react";
import classes from './Banner.module.scss'
const Banner = props => {
  return (
    <section className={classes.banner}>
      <div className={classes.banner_content}>
        <div className={classes.banner_item1}>
          <div>
            <i className="fa fa-pray" />
          </div>
          <div>
            <i className="fa fa-pray" />
          </div>
          <div>
            <i className="fa fa-pray" />
          </div>
          <div>
            <i className="fa fa-pray" />
          </div>
          <div>
            <i className="fa fa-pray" />
          </div>
        </div>
        <div className={classes.banner_item2}>
          <div>
            <i className="fa fa-pray" />
          </div>
          <div className={classes.banner_title}>
            <h3 >Get personalized recommendations</h3>
            <p>Answer a few questions for your top picks</p>
            <button className={classes.btn_banner}>Get Started</button>
          </div>
          <div>
            <i className="fa fa-pray" />
          </div>
        </div>
        <div className="banner_item3">
          <div>
            <i className="fa fa-pray" />
          </div>
          <div>
            <i className="fa fa-pray" />
          </div>
          <div>
            <i className="fa fa-pray" />
          </div>
          <div>
            <i className="fa fa-pray" />
          </div>
          <div>
            <i className="fa fa-pray" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
