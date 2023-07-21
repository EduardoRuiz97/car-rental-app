
"use client"
import classes from './FilterItem.module.css';
import { IoIosArrowDown } from "react-icons/io";
import { useState } from 'react';


let selectedArray = [];

const FilterItem = (props) => {

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const openMenuHandler = () => {
    setIsDropdownOpen(!isDropdownOpen);
  }

  const onChangeHandler = (event) => {

    if (event.target.checked) {
      selectedArray.push(event.target.value);
    } else {

      selectedArray = selectedArray.filter(item => item !== event.target.value);
    }

    props.onFilter(selectedArray)
  }

  return (
    <li className={classes.item}>

      <span onClick={openMenuHandler}>{props.criteria}
        <IoIosArrowDown className={classes.icon}/>
      </span>

      { <ul className={isDropdownOpen ? `${classes.options} ${classes.open}`: classes.options}>
        {props.array.map((item, index) => 
        <li key={index}>
          <input type='checkbox' id={item.value} value={item.value} name={item.value} onChange={onChangeHandler}></input>
          <label htmlFor={item.value}>{item.label}</label>
        </li>
        )}
      </ul>}
    </li>
  )
}

export default FilterItem;