import { BsTelephoneFill } from "react-icons/bs";
import { ImPriceTag } from "react-icons/im";
import { MdVerifiedUser } from "react-icons/md";
import { MdLocationPin } from "react-icons/md";
import { MdFreeCancellation } from "react-icons/md";
import classes from './HomeListR.module.css';

const HomeListR = () => {
  return (
    <ul className={classes.list}>
      <li className={classes.item}>

        <div className={classes.contein}>
          <BsTelephoneFill className={classes.icon}/>
        </div>

        <div className={classes.text}>
          <h4>Customer Support</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dolor lorem, condimentum non tortor et.</p>
        </div>
      </li>

      <li className={classes.item}>
        <div className={classes.contein}>
          <ImPriceTag className={classes.icon}/>
        </div>
        <div className={classes.text}>
          <h4>Best Price</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dolor lorem, condimentum non tortor et.</p>
        </div>
      </li>

      <li className={classes.item}>
        <div className={classes.contein}>
          <MdVerifiedUser className={classes.icon}/>
        </div>
        <div className={classes.text}>
          <h4>Verified Car Brand</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dolor lorem, condimentum non tortor et..</p>
        </div>
      </li>

      <li className={classes.item}>
        <div className={classes.contein}>
          <MdLocationPin className={classes.icon}/>
        </div>
        <div className={classes.text}>
          <h4>Location</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dolor lorem, condimentum non tortor et.</p>
        </div>
      </li>

      <li className={classes.item}>
        <div className={classes.contein}>
          <MdFreeCancellation className={classes.icon}/>
        </div>
        <div className={classes.text}>
          <h4>Free Cancelation</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dolor lorem, condimentum non tortor et..</p>
        </div>
      </li>
    </ul>
  )
};

export default HomeListR;