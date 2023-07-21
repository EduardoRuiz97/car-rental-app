"use client"
import useLoginForm from "@/Hooks/useLoginForm";
import Button from "../Button/Button";
import classes from './LoginForm.module.css';

const LoginForm = (props) => {


  const {
    inputValue : emailValue,
    isFormInputInvallid : isFormEmailInvalid,
    inputValueHandler : emailValueHandler,
    blurInputHandler : blurEmailHandler,
    resetInput : resetEmail,
  } = useLoginForm(value => value.includes('@'));

  const {
    inputValue : passwordValue,
    isFormInputInvallid : isFormPasswordInvalid,
    inputValueHandler : passwordValueHandler,
    blurInputHandler : blurPasswordHandler,
    resetInput : resetPassword,
  } = useLoginForm(value => value !== '');
  
  let formIsValid = false;

  if (!isFormEmailInvalid && !isFormPasswordInvalid) {
    formIsValid = true;
  } else {
    formIsValid = false;
  }


  const submitHandler = (event) => {
    event.preventDefault();

    if (isFormEmailInvalid && isFormPasswordInvalid) {
      return;
    }

    props.onSubmit({
      email: emailValue,
      password: passwordValue,
    })

    resetEmail();
    resetPassword();

  }




  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={isFormEmailInvalid ? `${classes.container} ${classes.warning}` : classes.container}>
        <input 
        type='email' 
        placeholder="Enter your email"
        onChange={emailValueHandler}
        onBlur={blurEmailHandler}
        value={emailValue}
        ></input>
        {isFormEmailInvalid && <small>Please enter a valid email</small>}
      </div>

      <div className={isFormPasswordInvalid ? `${classes.container} ${classes.warning}` : classes.container}>
        <input 
        type='password' 
        placeholder="Password"
        onChange={passwordValueHandler}
        onBlur={blurPasswordHandler}
        value={passwordValue}
        ></input>
        {isFormPasswordInvalid && <small>Please enter a valid password</small>}
      </div>

      <Button disabled={!formIsValid}>Log in</Button>
    </form>
  )
};

export default LoginForm;