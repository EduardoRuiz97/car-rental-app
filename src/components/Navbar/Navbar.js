const { default: Link } = require("next/link");
import { AiOutlineClose } from "react-icons/ai";
import { useEffect, useState } from "react";
import classes from './Navbar.module.css';

const Navbar = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check if localStorage is available and get the isLoggedIn value
    const storedIsLoggedIn = typeof window !== 'undefined' && localStorage.getItem("isLoggedIn");
    setIsLoggedIn(storedIsLoggedIn === "1");
  }, []);

  const logOutHandler = () => {
    const proceed = window.confirm('Are you sure you want to log out?'); 
    if (proceed) {
      // Remove isLoggedIn from localStorage if running in the browser
      if (typeof window !== 'undefined') {
        localStorage.removeItem("isLoggedIn");
      }

      // Reload the page after logging out
      location.reload();
    }
  }

  return (
    <nav>
      <ul className={classes.list}>
        <li>
          <Link href='/'>Home</Link>
        </li>

        <li>
          <Link href='/rentals'>Find a car</Link>
        </li>

        <li>
          <Link href='/'>About us</Link>
        </li>

        <li>
          <Link href='/'>Contact</Link>
        </li>

        {!isLoggedIn ? 
          <button>
            <Link href='/Login'>Log in</Link>
          </button>
          :
          <button onClick={logOutHandler}>
            Log out
          </button>
        }
      </ul>

      <AiOutlineClose onClick={props.onClick} className={classes.close}/>
    </nav>
  )
};

export default Navbar;
