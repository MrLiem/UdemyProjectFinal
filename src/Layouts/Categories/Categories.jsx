import React from "react";
import classes from './Categories.module.scss'

const Categories = props => {
  return (
    <section className={classes.myCategories}>
      <h2>Top categories</h2>
      <div className={`row ${classes.row}`}>
        <div className="col-xl-3 col-lg-4 col-md-6">
          <div className={classes.categories_items}>
            <i className="fab fa-linux" />
            <span>Development</span>
          </div>
        </div>
        <div className="col-xl-3 col-lg-4 col-md-6">
          <div className={classes.categories_items}>
            <i className="fab fa-linux" />
            <span>Development</span>
          </div>
        </div>
        <div className="col-xl-3 col-lg-4 col-md-6">
          <div className={classes.categories_items}>
            <i className="fab fa-linux" />
            <span>Development</span>
          </div>
        </div>
        <div className="col-xl-3 col-lg-4 col-md-6">
          <div className={classes.categories_items}>
            <i className="fab fa-linux" />
            <span>Development</span>
          </div>
        </div>
        <div className="col-xl-3 col-lg-4 col-md-6">
          <div className={classes.categories_items}>
            <i className="fab fa-linux" />
            <span>Development</span>
          </div>
        </div>
        <div className="col-xl-3 col-lg-4 col-md-6">
          <div className={classes.categories_items}>
            <i className="fab fa-linux" />
            <span>Development</span>
          </div>
        </div>
        <div className="col-xl-3 col-lg-4 col-md-6">
          <div className={classes.categories_items}>
            <i className="fab fa-linux" />
            <span>Development</span>
          </div>
        </div>
        <div className="col-xl-3 col-lg-4 col-md-6">
          <div className={classes.categories_items}>
            <i className="fab fa-linux" />
            <span>Development</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Categories;
