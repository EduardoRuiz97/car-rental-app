"use client"
const { default: Link } = require("next/link");
import { AiOutlineClose } from "react-icons/ai";
import { useEffect, useState } from "react";
import classes from './Navbar.module.css';


const Navbar = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {

    let storedIsLoggedIn = typeof window !== 'undefined' && localStorage.getItem("isLoggedIn");

    setIsLoggedIn(storedIsLoggedIn === "1");

  }, []);

  const logOutHandler = () => {
    const proceed = window.confirm('Are you sure you want to log out?'); 
    if (proceed) {

      if (typeof window !== 'undefined') {
        localStorage.removeItem("isLoggedIn");
      }
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

        {isLoggedIn ? 
          <button onClick={logOutHandler}>
            Log out
          </button>
          :
          <Link href='/Login'>
            <button>
              Log in
            </button>
          </Link>
        }
        
      </ul>

      <AiOutlineClose onClick={props.onClick} className={classes.close}/>
    </nav>
  )
};

export default Navbar;
