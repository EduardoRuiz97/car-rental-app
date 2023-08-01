"use client"
import classes from './Item.module.css';
import { useState } from 'react';
import { IoIosArrowDown } from "react-icons/io";

const Item = props => {

  const [isOpen, setIsOpen] = useState(false);


  const openContentHandler = () => {
    setIsOpen(!isOpen);
  }


  return (
    <div className={classes.container} key={props.item.small}>
      <div className={classes.content}>
        <span onClick={openContentHandler}>{props.item.span}<IoIosArrowDown className={isOpen ?`${classes.iconOpen} ${classes.icon}` : classes.icon}/></span>
        <small>{props.item.small}</small>

        <div className={isOpen ? classes.open : classes.close}>{props.item.div}</div>
      </div>

    </div>
  )
};

export default Item;