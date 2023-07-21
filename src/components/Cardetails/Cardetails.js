import { BsFillPersonFill } from "react-icons/bs";
import { MdLocalGasStation } from "react-icons/md";
import { MdOutlineElectricBolt } from "react-icons/md";
import { GiCarDoor } from "react-icons/gi";
import classes from './Cardetails.module.css';

const Cardetails = (props) => {

  let fuelType = <li>
    <MdLocalGasStation className={classes.icon}/>
    <span>Fuel type: Gas</span>
  </li>

  if (props.car['fuel-type'] === 'Electric') {
    fuelType = <li>
    <MdOutlineElectricBolt className={classes.icon}/>
    <span>Fuel type: Electric</span>
  </li>
  }


  return (
    <article className={classes.car}>

      <div className={classes.info}>

        <h3>{props.car.name}</h3>
        <h4>{`Type: ${props.car['car-type']}`}</h4>

        <ul className={classes.list}>
          <li>
            <BsFillPersonFill className={classes.icon}/>
            <span>{`${props.car['seating-capacity']} Passengers`}</span>
          </li>

          <li>
            <GiCarDoor className={classes.icon}/>
            <span>4 Doors</span>
          </li>

          {fuelType}

        </ul>

        <div className={classes.features}>
          <span>features: </span>
            <ul>
              {
                props.car.features.map((item,index) => <li key={index}>{item}</li>)
              }
            </ul>
        </div>

      </div>

      <div className={classes['img-container']}>
        <img src={props.car.image} alt={props.car.name}></img>
      </div>

    </article>
  )
};

export default Cardetails;