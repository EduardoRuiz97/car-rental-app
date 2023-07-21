"use client";
import Navbar from "../Navbar/Navbar";
import classes from './Layout.module.css';
import { AiFillCar } from "react-icons/ai";
import { useState } from "react";
import Footer from "../Footer/Footer";

const Layout = (props) => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openMenuHandler = () => {
    setIsMenuOpen(true);
  }

  const closeMenuHandler = () => {
    setIsMenuOpen(false);
  }


  return (
    <>
      <header className={classes.header}>
 
        <h1 className={classes.title}>DriveWell</h1>

        <div className={isMenuOpen? `${classes.slider} ${classes['slider-on']}` : classes.slider}>
          <h1>DriveWell: Car rentals</h1>
          <Navbar onClick={closeMenuHandler}/>
        </div>

        <AiFillCar onClick={openMenuHandler} className={classes.menu}/>

      </header>

      {props.children}


      <Footer />

    </>
  )
};

export default Layout