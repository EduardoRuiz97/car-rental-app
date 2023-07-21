"use client"
import classes from './Filter.module.css';
import FilterItem from './FilterItem';
import { MdFilterAlt } from "react-icons/md";
import {useEffect, useState} from 'react'


let uniqueCarBrands = [];
let uniqueCarType = [];

const Filter = (props) => {

  const [isFilterMenuOpen, setIsFilterMenuOpen] = useState(false);
  const [arrayToFilter, setArrayToFilter] = useState([]);

/*--------extract uniques car brand -------------- */

  props.cars.forEach((car)=> {
    const carBrand = car.brand;
    const carBrandObject = {label: carBrand, value: carBrand};

    const exists = uniqueCarBrands.some((model) => model.value === carBrandObject.value);

    if (!exists) {
      uniqueCarBrands.push(carBrandObject);
    }
  });

 /*--------extract uniques car rental type -------------- */

  props.cars.forEach((car) => {
    const carTypeRental = car.location.type;
    const carTypeRentalObject = {label: carTypeRental, value: carTypeRental};

    const exist = uniqueCarType.some((model) => model.value === carTypeRentalObject.value);


    if (!exist) {
      uniqueCarType.push(carTypeRentalObject);
    }
  });
  
/*--------extract uniques car rental type -------------- */

  let uniqueSeatingCapacity = [
    {
    label: '0-5 passengers',
    value: 5
    },
    {
      label: '6 or more passengers',
      value: 6
  }]

/*--------extract uniques luggage size -------------- */

  let uniqueLuggage = [
    {
    label: 'Small',
    value: 'Small'
    },
    {
    label: 'Medium',
    value: 'Medium'
    },
    {
      label: 'Large',
      value: 'Large'
  }]

/*--------extract uniques fuel Type -------------- */
  let uniqueFuelType = [
    {
    label: 'Gasoline',
    value: 'Gasoline'
    },
    {
    label: 'Electric',
    value: 'Electric'
  }]

/*-------------------------------------------------------*/


  const openFilterMenu = () => {
    setIsFilterMenuOpen(!isFilterMenuOpen);
  }

/*-------------Filter functions ------------------- */

  const brandFilterHandler = (criteriaArray) => {
    const filteredArray = props.cars.filter((item) => {
      return criteriaArray.some((filter) => {
        return item.brand === filter
    })});

    setArrayToFilter(filteredArray);
  };

  const carTypeFilterHandler = (criteriaArray) => {
    const filteredArray = arrayToFilter.filter((item) => {
      return criteriaArray.some((filter) => {
        return item.location.type === filter
    })});

    setArrayToFilter(filteredArray);
  };

  const seatingCapFilterHandler = (criteriaArray) => {
    const filteredArray = arrayToFilter.filter((item) => {
      return criteriaArray.some((filter) => {
        if (filter === 5) {
          return item['seating-capacity'] === filter 
        } else {
          return item['seating-capacity'] > filter - 1
        }
    })});

    setArrayToFilter(filteredArray);
  };

  const luggageCapFilterHandler = (criteriaArray) => {

    const filteredArray = arrayToFilter.filter((item) => {
      return criteriaArray.some((filter) => {
        return item['luggage-capacity'] === filter
    })});

    setArrayToFilter(filteredArray);
  }

  const specificationFilterHandler = (criteriaArray) => {
    const filteredArray = arrayToFilter.filter((item) => {
      return criteriaArray.some((filter) => {
        return item['fuel-type'] === filter
    })});

    setArrayToFilter(filteredArray);
  }

  const resetHandler = () => {
    setArrayToFilter(props.cars);
  }


  useEffect(()=> {
    props.onFilterHandler(arrayToFilter);
  }, [arrayToFilter])

  return (

    <div className={classes.container}>
      
      <span 
      onClick={openFilterMenu} 
      className={classes.title}>Filter By <MdFilterAlt /></span>

      <form 
      className={isFilterMenuOpen ? `${classes.form} ${classes.open}`: classes.form}
      >

        <ul className={classes.filter}>

          <FilterItem 
            criteria='Car Brand'
            array={uniqueCarBrands}
            onFilter={brandFilterHandler}
          />

          <FilterItem 
            criteria='Rental Car Type'
            array={uniqueCarType}
            onFilter={carTypeFilterHandler}
          />

          <FilterItem 
            criteria='Seating Capacity'
            array={uniqueSeatingCapacity}
            onFilter={seatingCapFilterHandler}
          />

          <FilterItem 
            criteria='Luggage Capacity'
            array={uniqueLuggage}
            onFilter={luggageCapFilterHandler}
          />

          <FilterItem 
            criteria='Specification'
            array={uniqueFuelType}
            onFilter={specificationFilterHandler}
          />

        </ul>


        <button onClick={resetHandler} type='reset'>Reset filters</button>

      </form>

    </div>
  )
};


export default Filter;