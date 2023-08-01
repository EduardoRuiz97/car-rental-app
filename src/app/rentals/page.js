import Faqs from "@/components/FAQS/Faqs";
import RentalForm from "@/components/RentalForm/RentalForm";
import { AiFillCheckCircle } from "react-icons/ai";
import { AiFillTag } from "react-icons/ai";
import { MdPhoneIphone } from "react-icons/md";
import classes from '../../styles/rentals.module.css';


let destination = [
  {
    image: 'https://images.unsplash.com/photo-1507992781348-310259076fe0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    place :'Toronto'
  },

  {
    image: 'https://images.unsplash.com/photo-1483653364400-eedcfb9f1f88?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    place :'New York'
  },

  {
    image: 'https://images.unsplash.com/photo-1603306557434-284b08b2e0c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1176&q=80',
    place :'Quebec'
  },

  {
    image: 'https://images.unsplash.com/photo-1605979421023-8964ff1920f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80',
    place :'Montreal'
  },

  {
    image: 'https://images.unsplash.com/photo-1514214246283-d427a95c5d2f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80',
    place :'Miami'
  },

  {
    image: 'https://images.unsplash.com/photo-1627949669843-9ccd9f5830fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    place :'Niagara Falls'
  },
]


const RentalsPage = async () => {


  return (
    <main className={classes.main}>
      <section className={classes.rentalForm}>
        <RentalForm />
      </section>

      <section className={classes.destination}>

        <div className={classes.title}>
          <span>Drive to Dream Destinations: Your Ultimate Car Rental Adventure</span>
          <h2>Top destinations</h2>
        </div>

        <ul className={classes.list}>
          {destination.map((item, index) => 
            <li key={index}>
              <div className={classes.item}>
                <img src={item.image} alt={item.place}></img>
                <span>{item.place}</span>
              </div>
            </li>
          )}
        </ul>
      </section>

      <section className={classes.iconContainer}>

        <h2>Choose Us for Seamless Car Rentals: Quality Cars, Easy Booking, and Top-notch Service.</h2>


        <ul>
          <li className={classes.iconItem}>
            <div>
              <AiFillCheckCircle className={classes.icon}/>
              <span>A Trusted Brand</span>
            </div>
          </li>

          <li className={classes.iconItem}>
            <div>
              <AiFillTag className={classes.icon}/>
              <span>Book the best car according to your needs</span>
            </div>
          </li>

          <li className={classes.iconItem}>
            <div>
              <MdPhoneIphone className={classes.icon}/>
              <span>Find great deals</span>
            </div>
          </li>
        </ul>
      </section>

      <Faqs />
    </main>
  )
}

export default RentalsPage;





