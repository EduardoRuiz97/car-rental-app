import classes from './Policies.module.css';
import Item from './Item';

let policies = [
  {
    span: 'Cancellation and no-show policy',
    small: 'Free cancellation up to pick-up',
    div: 'You will not be charged anything for the rental since the booking was risk-free.'
  },

  {
    span: 'Age surcharge',
    small: 'Applicable for drivers under 25 and above 70 years',
    div: 'Drivers under 25 or over 70 years of age may need to pay an extra fee.'
  }
];

const Policies = () => {




  return (
    <div className={classes.policies}>
      <h2>Rental policies</h2>

      {policies.map(item => <Item item={item} />)}

    </div>
  )
};

export default Policies;