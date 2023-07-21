"use client"
import CarListSection from "../CarListSection/CarListSection";
import Filter from "../UI/Filter/Filter";
import classes from './CarRentalMain.module.css';
import { useEffect, useState } from "react";

const CarRentalMain = (props) => {

  const [displayedArray, setDisplayedArray] = useState([])

  useEffect(()=> {
    setDisplayedArray(props.cars)
  }, [])


  const onFilterChangesHandler = (filterArray) => {
    setDisplayedArray(filterArray)
  }

  return (
    <main className={classes.main}>
      <section className={classes.section}>
        <Filter 
        cars={props.cars}
        onFilterHandler={onFilterChangesHandler}
        />
      </section>

      <CarListSection 
      cars={displayedArray} 
      rentalDetails={props.rentalDetails}/>
    
    </main>
  )
};

export default CarRentalMain;