"use client"
import classes from './RentalForm.module.css';
import { useRouter } from "next/navigation";
import Form from './Form';


const RentalForm = () => {

  const router = useRouter();

  const onSubmitHandler = (searchParams) => {

    router.push(`rentals/cars-available?pickupLocation=${searchParams.pickUp.location}&dropoffLocation=${searchParams.dropOff.location}&pickupDate=${searchParams.pickUp.date}&dropoffDate=${searchParams.dropOff.date}&pikcupTime=${searchParams.pickUp.time}&dropoffTime=${searchParams.dropOff.time}`)

  }


  return (
    <div className={classes.container}>
      <h1>The best prices with <strong>DriveWell: Car Rentals</strong></h1>

      <Form onSubmit={onSubmitHandler}/>
    </div>
  )
}

export default RentalForm;