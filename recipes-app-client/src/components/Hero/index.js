import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import './Hero.css';

const Hero = (props) => {
  const { title, subtitle, classes } = props;
  return (
    <header className={`hero ${classes}`}>
      <div className="hero__container">
        <Link className="hero__link" to="/">
          <h1 className="hero__title">{title}</h1>
        </Link>
        <p className="hero__subtitle">{subtitle}</p>
      </div>
    </header>
  )
}

Hero.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  classes: PropTypes.string
};

export default Hero;