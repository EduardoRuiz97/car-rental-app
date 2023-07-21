import Button from "../Button/Button";
import classes from './NewsletterForm.module.css';

const NewsletterForm = () => {
  return (
    <div className={classes.container}>
      <h1><strong>Be the first</strong> to hear our news</h1>
      <p>Join our newsletter for exclusive deals, car rental tips, and the latest updates</p>
      <form className={classes.form}>
        <input 
        type='email'
        placeholder="Email here"
        name="email"
        />
        <Button>Join us</Button>
      </form>
    </div>
  )
};

export default NewsletterForm;