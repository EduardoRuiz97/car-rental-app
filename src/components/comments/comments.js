"use client"
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import classes from './Comments.module.css';
import Item from "./Item";
import { useState } from "react";

const DUMMY_REVIEWS =[
  {
    name: 'Jessica R.',
    title: 'Highly Recommended!' ,
    comment: '"DriveWell Car Rentals exceeded my expectations. The process was seamless, and the customer service was top-notch. I highly recommend them!"',
    img: 'https://images.unsplash.com/photo-1544717305-2782549b5136?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80'
  },

  {
    name: 'Mark T.',
    title: 'Fantastic Selection and Service' ,
    comment: '"I rented a car from DriveWell and was impressed with their wide range of vehicles. The staff was friendly and professional, making my rental experience a breeze."',
    img: 'https://images.unsplash.com/photo-1522556189639-b150ed9c4330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80'
  },

  {
    name: 'Sarah M.',
    title: 'Excellent Value for Money' ,
    comment: `"I chose DriveWell Car Rentals for their competitive prices and was not disappointed. The quality of the vehicle and the overall service provided were exceptional. I'll definitely be a repeat customer."`,
    img: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80'
  },


]


const Comments = () => {

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextHandler = () => {

    setCurrentIndex(currentIndex + 1)

    if (currentIndex === DUMMY_REVIEWS.length - 1) {
      setCurrentIndex(0)
    }
  }

  const beforeHandler = () => {
    setCurrentIndex(currentIndex - 1) 
    if (currentIndex === 0) {
      setCurrentIndex( DUMMY_REVIEWS.length - 1);
    }
  }


  return (

    <div className={classes.container}>
        <div className={classes.actions}>
          <BsFillArrowLeftCircleFill className={classes.arrow} onClick={beforeHandler}/>
          <BsFillArrowRightCircleFill className={classes.arrow} onClick={nextHandler}/>
        </div>

      <div className={classes.listContainer}>

        <ul className={classes.list}>
          {DUMMY_REVIEWS.map((comment, index) => 
            <Item 
            key={index} 
            comment={comment}
            currentIndex={currentIndex}
            /> 
          )}
        </ul>

      </div>

    </div>


  )
}

export default Comments;