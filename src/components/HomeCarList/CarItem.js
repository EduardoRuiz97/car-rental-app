"use client"
import Button from "../UI/Button/Button";
import classes from './CarItem.module.css';
import { useState } from "react";
import { useRouter } from "next/navigation";
import Form from "../RentalForm/Form";
import Modal from "../UI/Modal/Modal";
import { calculateCost } from "@/functions";
import { IoMdClose } from "react-icons/io";

const CarItem = (props) => {

  const [isModalOpenHandler, setIsModalOpenHandler] = useState(false);
  const [availabilityData, setAvailabilityData] = useState(false);


  const checkAvailabilityHandler = () => {
    setAvailabilityData(true);
  }

  const bookCarHandler = () => {
    setAvailabilityData(false);
    setIsModalOpenHandler(true)
  }

  const closeAvailibilityData = () => {
    setAvailabilityData(false);
  }

  const filteredAvailability = Object.entries(props.car.availability)
  .filter(([key, value]) => value === true);

  /*-------------Modal Handler -----------------*/

  const router = useRouter()


  const closeModalHandler = () => {
    setIsModalOpenHandler(false);
  }

  const onSubmitHandler = async (searchParams) => {

    const params = {
      pickupLocation: searchParams.pickUp.location,
      dropoffLocation : searchParams.dropOff.location,
      pickupDate: searchParams.pickUp.date, 
      dropoffDate : searchParams.dropOff.date,
      pickupTime: searchParams.pickUp.time,
      dropoffTime : searchParams.dropOff.time
    }

    const cost = calculateCost(params.pickupTime, params.dropoffTime, params.pickupDate, params.dropoffDate, props.car.price);

    
    const updatedItem = {
      "rental info" : params,
      "total cost": cost.totalCost,
      "total days": cost.timeDiff,
      ...props.car
    };

    const response = await fetch('/api/update-item', {
      method: 'POST',
      body: JSON.stringify(updatedItem),
    });

    router.push(`/car-details/${props.car.id}`)
    
    setIsModalOpenHandler(false);

  }


  return (
    <>
      <li className={classes.car}>

        <div className={classes.content}>
          <img
          src={props.car.image}
          alt={props.car.name}
          />
          <h3>{props.car.name}</h3>
          <div className={classes.features}>
            {props.car.features?.map((feature, index) => 
            <span 
            key={index}>{feature}</span>
            )}
          </div>
          <Button onClick={checkAvailabilityHandler}>Check location availability</Button>
        </div>

        <div className={availabilityData ? `${classes.availability} ${classes.open}` : classes.availability}>

          <h4 className={classes.title}>Location Availability
            <IoMdClose className={classes.icon} onClick={closeAvailibilityData}/>
          </h4>

          <ul>
              {
              filteredAvailability.map(item => <li key={item}>{item}</li>)
              }
          </ul>

          <div>
            <span>Operation Hours:</span>
            <span>Mon-Fri: 08:00 - 18:00</span>
            <span>Sat: 09:00 - 12:00</span>
          </div>

          <Button onClick={bookCarHandler}>Book now</Button>

        </div>

      </li>

      {isModalOpenHandler && 
        <Modal onClick={closeModalHandler } title='Book now'>
          <Form onSubmit={onSubmitHandler}/>
        </Modal>
      }
    </>
  )
};

export default CarItem;