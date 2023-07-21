"use client"
import { BiCaretDown } from "react-icons/bi";
import { useState } from "react";
import classes from './Faqs.module.css';

let FAQS = [
  {
    question: 'How do I make a reservation?',
    answer: 'Making a reservation is easy! Simply visit our website, select your desired dates and location, choose a vehicle from our wide range of options, and follow the straightforward booking process.'
  },

  {
    question: 'What documents do I need to rent a car?',
    answer: `To rent a car, you'll need a valid driver's license, a major credit card in your name for payment and deposit purposes, and proof of age (usually 21 years or older, but requirements may vary).`
  },

  {
    question: 'Are there any additional fees or hidden charges?',
    answer: `We believe in transparency. The rental fees displayed during the booking process include the basic rental cost, taxes, and any mandatory fees. Optional extras and services may incur additional charges, which will be clearly outlined.`
  },

  {
    question: 'Is there a mileage limit for rentals?',
    answer: `Our rental agreements typically include unlimited mileage, allowing you to explore without restrictions. However, certain special offers or long-term rentals may have specific mileage restrictions. Please check the terms for each reservation.`
  },

  {
    question: 'Do you offer insurance coverage for the rented vehicles?',
    answer: `Yes, we offer various insurance options to provide peace of mind during your rental period. Our insurance packages cover different levels of protection, and you can choose the option that best suits your needs.`
  },

  {
    question: 'What happens if there is a breakdown or accident during my rental?',
    answer: `In the event of a breakdown or accident, our dedicated roadside assistance team is available to support you 24/7. We'll ensure that you receive the necessary assistance to get back on the road as quickly and smoothly as possible.`
  },
]

const Faqs = () => {

  const [isOpenFaqs, setIsOpenFaqs] = useState(false);

  const openFaqsHandler = () => {
    setIsOpenFaqs(!isOpenFaqs);
  }

  
  return (
    <section className={isOpenFaqs ? `${classes.open} ${classes.faqs}` : classes.faqs}>
      <h3 onClick={openFaqsHandler}>What you need to know about renting a car <BiCaretDown className={classes.arrow}/></h3>

      <div className={classes.container}>
        <ul>
          {FAQS.map((faq, index) => <li key={index} className={classes.question}>
            <h4>{faq.question}</h4>
            <div>
              <p>{faq.answer}</p>
            </div>
          </li> 
          )}
        </ul>
      </div>
    </ section>
  )
};

export default Faqs;