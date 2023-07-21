"use client"
import CarList from "../CarList/CarList";
import Sorter from "../UI/Sorter/Sorter";
import { useEffect, useState } from "react"
import classes from './CarListSection.module.css';

const CarListSection = (props) => {

  const [carsDisplayed, setCarsDisplayed] = useState([]);

  useEffect(()=> {
    setCarsDisplayed(props.cars)
  }, [props.cars])

  const sortedHandler = (sortedArray) => {
    setCarsDisplayed(sortedArray)
  }
  



  return (
    <section className={classes.section}>

      <Sorter cars={props.cars} onSorter={sortedHandler}/>
      <CarList cars={carsDisplayed} rentalDetails={props.rentalDetails}/>

    </section>
  )
}

export default CarListSection;