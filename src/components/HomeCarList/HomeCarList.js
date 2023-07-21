import CarItem from "./CarItem";
import classes from './HomeCarList.module.css'

const HomeCarList = (props) => {

  return (
    <div className={classes.container}>
      <ul className={classes.list}>
        {props.cars.slice(0,6).map((car, index) => 
        <CarItem 
        car={car} 
        key={index}
        />)}
      </ul>
    </div>
  )
}

export default HomeCarList;