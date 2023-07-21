import Faqs from "@/components/FAQS/Faqs";
import RentalForm from "@/components/RentalForm/RentalForm";
import Spiner from "@/components/UI/spiner/Spiner";
import { AiFillCheckCircle } from "react-icons/ai";
import { AiFillTag } from "react-icons/ai";
import { MdPhoneIphone } from "react-icons/md";
import classes from '../../styles/rentals.module.css';


const RentalsPage = async () => {

  return (
    <main className={classes.main}>
      <section className={classes.rentalForm}>
        <RentalForm />
      </section>

      <section className={classes.iconContainer}>
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





