import { useRouter } from "next/navigation";
import { BsFillPersonFill } from "react-icons/bs";
import { BsSpeedometer } from "react-icons/bs";
import {GiLever } from "react-icons/gi";
import { MdLuggage } from "react-icons/md";
import { MdLocationPin } from "react-icons/md";
import Button from "../UI/Button/Button";
import classes from './Car.module.css'
import { calculateCost } from "@/functions";

const Cars = (props) => {

  const router = useRouter();

  const cost = calculateCost(props.rentalDetails.pickupTime, props.rentalDetails.dropoffTime, props.rentalDetails.pickupDate, props.rentalDetails.dropoffDate, props.car.price);

  const reserveCarHandler = async() => {


    
    const updatedItem = {
      "rental info" : props.rentalDetails,
      "total cost": cost.totalCost,
      "total days": cost.timeDiff,
      ...props.car
    };

    const response = await fetch('/api/update-item', {
      method: 'POST',
      body: JSON.stringify(updatedItem),
    });

    router.push(`/car-details/${props.car.id}`)
  }


  return (
    <li className={classes.item}>

      <div className={classes.container}>

        <div className={classes.carImg}>
          <img src={props.car.image} alt={props.car.name}/>
        </div>

        <div className={classes.carInfo}>
          <h3>{props.car.location.type}</h3>
          <h4>{props.car.name}</h4>

          <div className={classes.features}>

            <span>
              <BsFillPersonFill className={classes.icon}/>
              {props.car['seating-capacity']}
            </span>

            <span>
              <GiLever className={classes.icon}/>
              {props.car.transmission}
            </span>

            <span>
              <MdLuggage className={classes.icon}/>
              {props.car['luggage-capacity']}
            </span>
          </div>

          <div className={classes.mileage}>
            <BsSpeedometer className={classes.icon}/>
            <div>
              <span>Mileage:</span>
              <span>{`City: ${props.car.mileage.city} MPG`}</span>
              <span>{`Highway: ${props.car.mileage.highway} MPG`}</span>
            </div>
          </div>

        </div>

        <div className={classes.checkout}>

          <span>
            <MdLocationPin className={classes.icon}/>
            selectedLocation
          </span>

          <span>{`${props.car.price} CAD Per day`}</span>

          <span>Total cost: <strong>{`${cost.totalCost.toFixed(2)} CAD`}</strong></span>

          <Button onClick={reserveCarHandler}>Reserve</Button>

        </div>

      </div>
    </li>
  )
};

export default Cars;