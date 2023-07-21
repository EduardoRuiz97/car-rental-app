"use client"
import { useState } from "react";
import useDateInputForm from "@/Hooks/useDateInputForm";
import useTimeInputForm from "@/Hooks/useTimeInputForm";
import { MdLocationPin } from "react-icons/md";
import Button from "../UI/Button/Button";
import CustomSelect from "../UI/Select/Select";
import classes from './Form.module.css';


const locations = [
  {
    option: "airport 1",
    value: "airport1"
  },
  {
    option: "airport 2",
    value: "airport2"
  },
  {
    option: "airport 3",
    value: "airport3"
  },
  {
    option: "airport 4",
    value: "airport4"
  },
  {
    option: "location 1",
    value: "location1"
  },
  {
    option: "location 2",
    value: "location2"
  },
  {
    option: "location 3",
    value: "location3"
  }
]


const Form = (props) => {

  const [pickupLocation, setPickupLocation] = useState('');
  const [dropoffLocation, setDropOffLocation] = useState('');

  const pickUpLocationHandler = (option) => {
    setPickupLocation(option)
  }

  const dropOffLocationHandler = (option) => {
    setDropOffLocation(option)
  }

  const {
    inputValue: pickupDateValue,
    isInputValueValid: isPickupDateValueValid,
    inputChangeHandler: isPickupDateChangeHandler,
    resetInput: resetPickupDate,
    minValue: minPickUpDate
  } = useDateInputForm(input => input !== '')

  const {
    inputValue: dropOffDateValue,
    isInputValueValid: isDropOffDateValueValid,
    inputChangeHandler: isDropOffDateChangeHandler,
    resetInput: resetDropOffDate,
    minValue: minDropOffDate
  } = useDateInputForm(input => input !== '')

  const {
    inputValue: pickupTimeValue,
    isInputValueValid: isPickupTimeValueValid,
    inputChangeHandler: isPickupTimeChangeHandler,
    resetInput: resetPickupTime,
    minValue: minPickUpTime
  } = useTimeInputForm(input => input !== '')

  const {
    inputValue: dropOffTimeValue,
    isInputValueValid: isDropOffTimeValueValid,
    inputChangeHandler: isDropOffTimeChangeHandler,
    resetInput: resetDropOffTime,
    minValue: minDropOffTime
  } = useTimeInputForm(input => input !== '')


  let isFormInvalid = pickupLocation === '' && dropoffLocation === '';


  const submitFormHandler = (event) => {

    event.preventDefault();

    if (isFormInvalid) {
      return
    }

    let searchParams = {
      pickUp: {
        location:pickupLocation,
        date: pickupDateValue,
        time: pickupTimeValue
      },
      dropOff: {
        location: dropoffLocation,
        date: dropOffDateValue,
        time: dropOffTimeValue
      }
    } 

    props.onSubmit(searchParams)
  }



  return (
    <form className={classes.form} onSubmit={submitFormHandler}>

      <div className={`${classes.field} ${classes.large}`}>
        <MdLocationPin />
        <div className={classes['input-container']}>
          <label>Pick-up Location</label>
          <CustomSelect 
          options={locations}
          default={locations[0].option}
          onOption={pickUpLocationHandler}
          />
        </div>
      </div>

      <div className={`${classes.field} ${classes.large}`}>
        <MdLocationPin />
        <div className={classes['input-container']}>
          <label>Drop-off Location</label>
          <CustomSelect 
          options={locations}
          default={locations[4].option}
          onOption={dropOffLocationHandler}
          />
        </div>
      </div>

      <div className={`${classes.field} ${classes.medium}`}>
        <div className={classes['input-container']}>
          <label htmlFor="pickdate">Pick-up Date</label>
          <input 
            type='date' 
            id='pickdate' 
            name='pickdate'
            onChange={isPickupDateChangeHandler}
            value={pickupDateValue}
            min={minPickUpDate}
            max='18:00'
            ></input>
        </div>
      </div>

      <div className={`${classes.field} ${classes.medium}`}>
        <div className={classes['input-container']}>
          <label htmlFor="dropdate">Drop-off Date</label>
          <input 
          type='date' 
          id='dropdate' 
          name='dropdate'
          onChange={isDropOffDateChangeHandler}
          value={dropOffDateValue}
          max='18:00'
          ></input>
        </div>
      </div>

      <div className={`${classes.field} ${classes.medium}`}>
        <div className={classes['input-container']}>
          <label htmlFor="picktime">Pick-up time</label>
          <input 
          type='time' 
          id='picktime' 
          name='picktime' 
          step="60" 
          pattern="[0-9]{2}:[0-9]{2}" 
          onChange={isPickupTimeChangeHandler}            
          value={pickupTimeValue}
          min={minPickUpTime}
          ></input>
        </div>
      </div>

      <div className={`${classes.field} ${classes.medium}`}>
        <div className={classes['input-container']}>
          <label htmlFor="droptime">Drop-off time</label>
          <input 
          type='time' 
          id='droptime' 
          name='droptime'
          onChange={isDropOffTimeChangeHandler}
          value={dropOffTimeValue}
          ></input>
        </div>
      </div>


      <button className={classes.formbtn} disabled={isFormInvalid}>Search</button>

    </form>
  )
};

export default Form;