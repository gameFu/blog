import React, { Component } from 'react'
import classes from "./logo-readium.scss";
import fontClasses from 'font-awesome/scss/font-awesome.scss'

class LogoReadium extends Component {
  render() {
    return (
      <a href = "#" className={classes['logo-readium']}>
        <i className="fa fa-home">
        </i>
      </a>
    );
  }
}

export default LogoReadium;
