"use client"
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import classes from './Checkout.module.css';


let isLoggedIn;

const Checkout = (props) => {

  const [totalAmountToPay, setTotalAmountToPay] = useState(0);
  const [isExtraOn, setIsExtraOn] = useState(false);
  const router = useRouter()

  const totalDays = props.car['total days'].toFixed(3) * 100;

  const totalCost = props.car['total cost'].toFixed(2);

  const taxesAmount = (0.135 * totalCost).toFixed(2);

  let totalPlusTaxes = parseFloat(totalCost) + parseFloat(taxesAmount);

  useEffect(()=> {
    setTotalAmountToPay(totalPlusTaxes);
    isLoggedIn = localStorage.getItem("isLoggedIn");
  }, [])


  const addExtraHandler = (event) => {
    if (event.target.checked) {
      setTotalAmountToPay(totalAmountToPay + 9);
      setIsExtraOn(true)
    } else {
      setTotalAmountToPay(totalAmountToPay);
      setIsExtraOn(false);
    }
  }



  let pickupLocation = props.car['rental info']['pickupLocation'];

  const reserveCarHandler = async () => {
    console.log('reserv');
    props.car.availability[pickupLocation] = false;

    const response = await fetch('/api/update-item', {
      method: 'PUT',
      body: JSON.stringify(props.car),
    });


    const proceed = window.confirm('this page is not real, so yo will be redirected to home page')

    if (proceed) {
      router.push('/')
    }

  }

  const loginRoute = () => {
    router.push('/Login')
  }


  return (
    <article className={classes.checkout}>

      <div className={classes.price}>

        <span><strong>{`$${props.car.price}`}</strong> per day</span>

        {props.car['free-cancel'] && <span className={classes.free}>Free cancel</span>}

        <span>Pay at pickup</span>

      </div>

      <div className={classes.extra}>
        <h4>Extras</h4>
        <p>Requests cannot be guaranteed as they are subject to availability. Payment due at pick-up.</p>

        <div className={classes.checkbox}>
          <div className={classes.input}>
            <input type='checkbox' id='hns' name='hns' onChange={addExtraHandler}></input>
            <label htmlFor='hns'>Handheld Navigation System</label>
          </div>

          <span>
            <strong>$9 </strong>
            per day
          </span>
        </div>
      </div>

      <div className={classes.total}>
        <h3>Price details</h3>

        <div className={classes.info}>

          <span className={classes.amount}>
            <span>Car rental Fee (${props.car.price}) x {Math.floor(totalDays)} days</span>
            <span>${totalCost}</span>
          </span>

          <span className={classes.amount}>
            <span>Taxes and fees (13.5%)</span>
            <span>${taxesAmount}</span>
          </span>

          {isExtraOn && 
            <span className={classes.amount}>
              <span>Handheld Navigation System</span>
              <span>$9</span>
            </span>
          }

        </div>

        <hr/>

        <span className={classes['total-amount']}>
          <strong>Total:</strong>
          <strong>${totalAmountToPay.toFixed(2)}</strong>
        </span>

        {isLoggedIn ? <button onClick={reserveCarHandler}>Reserve</button>: <button onClick={loginRoute}>Log in to Reserve</button>}

      </div>
    </article>
  )
};

export default Checkout;