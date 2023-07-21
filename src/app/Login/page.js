"use client"
import LoginForm from "@/components/UI/LoginForm/LoginForm";
import SignupForm from "@/components/UI/SignupForm/SignupForm";
import { useRouter } from "next/navigation";
import { useState } from "react";
import classes from '../../styles/logInPage.module.css';


export default function Login () {

  const [isSignUpFormActive, setIsSignUpFormActive] = useState(false);

  const router = useRouter ()

  const changeFormHandler = () => {
    setIsSignUpFormActive(true)
  }


  const onSubmitHandler = (userInfo) => {

    const proceed = window.confirm("You'll be redirected soon");
    
    if (proceed) {

      router.refresh();

      if (typeof window !== 'undefined') {
        localStorage.setItem("isLoggedIn", "1");
      }

      router.back();
    }
  }


  let content =  
    <div className={classes.formContainer}>

      <h1>Log in to start driving around</h1>

      <LoginForm onSubmit={onSubmitHandler}/>

      <small>Don't have an account? <strong onClick={changeFormHandler}>Sign in here</strong></small>
      
    </div>

  if (isSignUpFormActive) {
    content =  
      <div className={classes.formContainer}>

        <h1>Sign up to start driving around</h1>

        <SignupForm onSubmit={onSubmitHandler}/>

      </div>
  }




  return (
    <main className={classes.main}>

      <div className={classes.layout}>
        {content}
      </div>

    </main>
  )
};

