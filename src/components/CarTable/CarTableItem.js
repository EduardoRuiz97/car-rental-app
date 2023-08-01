"use client"
import Button from "../UI/Button/Button";
import classes from './CarTableItem.module.css';
import { useRouter } from "next/navigation";


const CarTableItem = (props) => {

  const router = useRouter()

  const buttonHandler = () => {
    router.push('/rentals')
  }

  return (
    <div className={classes.car}>

      <div className={classes.image}>
        <img 
        src={props.car.image}
        alt={props.car.name}
        />
      </div>

      <div className={classes.info}>
        <span>{props.car.name}</span>

        <table className={classes.table}>

          <tr>
            <td>Model</td>
            <td>{props.car['car-model']}</td>
          </tr>

          <tr>
            <td>Car type</td>
            <td>{props.car['car-type']}</td>
          </tr>

          <tr>
            <td>Transmission</td>
            <td>{props.car.transmission}</td>
          </tr>

          <tr>
            <td>Seating capacity</td>
            <td>{props.car['seating-capacity']}</td>
          </tr>

          <tr>
            <td>Mileage (MPG) </td>
            <td>{props.car.mileage.city}</td>
          </tr>

          <tr>
            <td>Price ($/per day)</td>
            <td>{props.car.price}</td>
          </tr>

        </table>

        <Button onClick={buttonHandler}>Reserve Now</Button>


      </div>
    </div>
  )
};

export default CarTableItem;