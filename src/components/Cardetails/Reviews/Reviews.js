"use client"
import { AiFillStar } from "react-icons/ai";
import classes from './Reviews.module.css';
import { useState } from "react";

const Reviews = (props) => {
  const [isRevOpen, setIsRevOpen] = useState(false);

  const openreviewsHandler = () => {
    setIsRevOpen(!isRevOpen);
  }


  return (
    <article className={isRevOpen ? `${classes.reviews} ${classes.open}` : classes.reviews}>

      <h3 onClick={openreviewsHandler}>What our custommers has to say?</h3>

      <div className={classes.container}>
        <ul>
          {props.reviews.map((rev,index) => 
          <li key={index} className={classes.item}>
            <h4>{rev.title}</h4>
            <h5>{rev.usser}</h5>

            <div>
              <span>{rev.rating} <AiFillStar className={classes.icon}/></span>
              <span>{rev.date}</span>
            </div>

            <p>{rev.text}</p>
          </li>
          )}
        </ul>
      </div>

    </article>
  )
};

export default Reviews