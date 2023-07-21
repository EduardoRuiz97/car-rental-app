import useLoginForm from "@/Hooks/useLoginForm";
import Button from "../Button/Button";
import CustomInput from "../customInput/customInput";
import classes from './SignupForm.module.css';

const SignupForm = (props) => {


  const {
    inputValue : firstNameValue,
    isFormInputInvallid : firstNameInvalid,
    inputValueHandler : firstNameValueHandler,
    blurInputHandler : firstNameBlurHandler,
    resetInput: firstNameReset
  } = useLoginForm(value => value !== '');


  const {
    inputValue : lastNameValue,
    isFormInputInvallid : lastNameInvalid,
    inputValueHandler : lastNameValueHandler,
    blurInputHandler : lastNameBlurHandler,
    resetInput: lastNameReset
  } = useLoginForm(value => value.trim() !== '');

  const {
    inputValue : phoneValue,
    isFormInputInvallid : phoneInvalid,
    inputValueHandler : phoneValueHandler,
    blurInputHandler : phoneBlurHandler,
    resetInput: phoneReset
  } = useLoginForm(value => value.trim().length === 10);

  const {
    inputValue : ageValue,
    isFormInputInvallid : ageInvalid,
    inputValueHandler : ageValueHandler,
    blurInputHandler : ageBlurHandler,
    resetInput: ageReset
  } = useLoginForm(value => value > 17);

  const {
    inputValue : emailValue,
    isFormInputInvallid : emailInvalid,
    inputValueHandler : emailValueHandler,
    blurInputHandler : emailBlurHandler,
    resetInput: emailReset
  } = useLoginForm(value => value.includes('@') && value.includes("."));

  const {
    inputValue : passwordValue,
    isFormInputInvallid : passwordInvalid,
    inputValueHandler : passwordValueHandler,
    blurInputHandler : passwordBlurHandler,
    resetInput: passwordReset
  } = useLoginForm(value => value.trim().length > 9);


  let isFormValid = false;

  if (!firstNameInvalid && !lastNameInvalid && !phoneInvalid && !ageInvalid && !emailInvalid && !passwordInvalid) { 
    isFormValid = true;
  } else {
    isFormValid = false;
  }


  const submitHandler = (event) => {
    event.preventDefault();
    
    if (firstNameInvalid && lastNameInvalid && passwordInvalid && ageInvalid && emailInvalid && passwordInvalid) {
      return;
    }

    props.onSubmit({
      firstName: firstNameValue,
      lastName: lastNameValue,
      phone: phoneValue,
      age: ageValue,
      email: emailValue,
      password: passwordValue
    })


    firstNameReset();
    lastNameReset();
    phoneReset();
    ageReset();
    emailReset();
    passwordReset();

  }


  return (
    <form className={classes.form} onSubmit={submitHandler}>

      <div className={classes.userInfo}>
        <CustomInput 
          type='text'
          name='first-name'
          id='first-name'
          label='First Name'
          placeholder='e.g. Roberto'
          onChange={firstNameValueHandler}
          onBlur={firstNameBlurHandler}
          value={firstNameValue}
          invalid={firstNameInvalid}
          warning="Can't be blank"
        />

        <CustomInput 
          type='text'
          name='last-name'
          id='last-name'
          label='Last Name'
          placeholder='e.g. Mattews'
          onChange={lastNameValueHandler}
          onBlur={lastNameBlurHandler}
          value={lastNameValue}
          invalid={lastNameInvalid}
          warning="Can't be blank"
        />

      </div>

      <div className={classes.userInfo}>

        <CustomInput 
          type='tel'
          name='number'
          id='number'
          label='Phone Number'
          placeholder='e.g. 999 999 9999'
          onChange={phoneValueHandler}
          onBlur={phoneBlurHandler}
          value={phoneValue}
          invalid={phoneInvalid}
          warning="Must be 10 digits number"
        />

        <CustomInput 
          type='number'
          name='age'
          id='age'
          label='Age'
          placeholder='e.g. 18'
          min='16'
          width='40'
          onChange={ageValueHandler}
          onBlur={ageBlurHandler}
          value={ageValue}
          invalid={ageInvalid}
          warning="You must be over 18"
        />

      </div>

      <CustomInput 
        type='email'
        name='email'
        id='email'
        label='Email'
        placeholder='e.g. email@example.com'
        width='80'
        onChange={emailValueHandler}
        onBlur={emailBlurHandler}
        value={emailValue}
        invalid={emailInvalid}
        warning="Must be a valid email"
      />

      <CustomInput 
        type='password'
        name='password'
        id='password'
        label='Password'
        placeholder='Your password must contain at least 10 digits'
        width='80'
        onChange={passwordValueHandler}
        onBlur={passwordBlurHandler}
        value={passwordValue}
        invalid={passwordInvalid}
        warning="Must contain at least 10 digits"
      />

      <Button disabled={!isFormValid}>Sign up</Button>
    </form>
  )
};


export default SignupForm;