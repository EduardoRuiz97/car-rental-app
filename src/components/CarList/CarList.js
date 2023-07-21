import Cars from "./Car";
import classes from './CarList.module.css';

const CarList = (props) => {


  return (
    <ul className={classes.list}>
      {props.cars.map((car, index) => 
        <Cars 
        car={car} 
        key={index} 
        rentalDetails={props.rentalDetails}/>
      )}
    </ul>
  )
}

export default CarList;