"use client"
import { useState } from "react";
import CarTableItem from "./CarTableItem";
import classes from './CarTable.module.css';

const CartTable = (props) => {

  const [selectedIndex, setSelectedIndex] = useState(0);

  const selectItemHandler = (event) => {
    setSelectedIndex(event.target.id);
  }



  return (
    <div className={classes.container}>

      <div className={classes.options}>
        
        <span>Our options for you</span>

        <ul className={classes.list}>
          {props.cars.slice(0,8).map((item, index) => 
          <li key={index} onClick={selectItemHandler} id={index}>{item.name}</li>)}
        </ul>
      </div>

      <div className={classes['car-info']}>
        <CarTableItem car={props.cars[selectedIndex]}/>
      </div>
    </div>
  )
};

export default CartTable;