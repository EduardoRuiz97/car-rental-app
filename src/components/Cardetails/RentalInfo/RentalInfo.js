import classes from './RentalInfo.module.css';
import { BsFillCalendarCheckFill } from "react-icons/bs";
import { MdLocationPin } from "react-icons/md";
import { MdOutlineAvTimer } from "react-icons/md";

const RentalInfo = (props) => {

  function convertDateFormat(dateData) {
    // Input date string
      // Create a new Date object using the input string
    const dateObj = new Date(dateData);

    // Define an array of day names and month names
    const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    // Retrieve the day name, month name, and day of the month from the Date object
    const dayName = dayNames[dateObj.getDay()];
    const monthName = monthNames[dateObj.getMonth()];
    const day = dateObj.getDate();

    // Assemble the desired format
    const formattedDate = `${dayName}, ${monthName}/${day}`;

    // Output the formatted date
    return formattedDate
  }
  
  function separeteLocationString(string) {
    const separatedString = string.replace(/([a-zA-Z]+)(\d+)/, "$1 $2");
    return separatedString
  };

  return (
    <article className={classes['rental-info']}>

      <h3>Car rental Information</h3>

      <div className={classes.info}>

        <div>
          <h4>Pick-up & Drop-off Information</h4>
          <span>
            <BsFillCalendarCheckFill className={classes.icon}/>
            {`${convertDateFormat(props.car['rental info']['pickupDate'])} - ${convertDateFormat(props.car['rental info']['dropoffDate'])}`}
          </span>

          <span>
            <MdLocationPin className={classes.icon}/>
            {`From ${separeteLocationString(props.car['rental info']['pickupLocation'])} to ${separeteLocationString(props.car['rental info']['dropoffLocation'])}`}
          </span>

        </div>


        <span className={classes.hours}>

          <MdOutlineAvTimer className={classes.icon}/>
          <span>
            <strong>
              Operation Time:
            </strong>

            Mon-Fri: 8:30am -05:00pm
            <br></br>
            Sat: 09:00am -02:00pm
          </span>
          
        </span>

      </div>

    </article>
  )
};


export default RentalInfo;