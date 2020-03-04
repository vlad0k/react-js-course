import React from 'react';
import classes from './Preloader.module.css';
import loaderSVG from '../../../assets/images/loader.svg';

const Preloader = () => {
  return <img className={classes['loader']} src={loaderSVG} alt='loading...'></img>

}

export default Preloader;
