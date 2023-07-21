import { AiFillGoogleCircle } from "react-icons/ai";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import classes from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={classes.footer}>

      <div className={classes.options}>

        <h1>DriveWell</h1>

        <ul className={classes.list}>

          <li>
            <span>Create an account</span>

            <ul className={classes['second-list']}>
              <li>
                Sing in
              </li>

              <li>
                About Us
              </li>

              <li>
                Pricing
              </li>
            </ul>
          </li>

          <li>
            <span>Resources</span>
            <ul className={classes['second-list']}>
              <li>
                Community
              </li>

              <li>
                Become a partner
              </li>

              <li>
                Our technology
              </li>
            </ul>
          </li>

          <li>
            <span>Support</span>
            <ul className={classes['second-list']}>
              <li>
                Contact Us
              </li>

              <li>
                Terms of use
              </li>

              <li>
                Privacy and policy
              </li>
            </ul>
          </li>

        </ul>

      </div>

      <div className={classes.media}>

        <div className={classes['icon-container']}>
          <AiFillGoogleCircle className={classes.icon}/>
          <AiFillTwitterCircle className={classes.icon} />
          <FaFacebook className={classes.icon}/>
        </div>

        <span>
          2023. This is web site built by Jesus Ruiz. 
          <strong> This web site is just a fake web with the only purpose to practice</strong>
        </span>

      </div>


    </footer>
  )
};

export default Footer;