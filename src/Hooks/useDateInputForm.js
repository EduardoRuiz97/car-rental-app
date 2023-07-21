import { useState } from "react";


const useDateInputForm = (validationFn) => {

  let today = new Date().toISOString().split("T")[0];
  
  const [inputValue, setInputValue] = useState(today);

  const isInputValueValid = validationFn(inputValue);

  const inputChangeHandler = (event) => {
    setInputValue(event.target.value);
  }

  const resetInput = () => {
    setInputValue('')
  }


  return {
    inputValue,
    isInputValueValid,
    inputChangeHandler,
    resetInput,
    minValue: today
  }
}

export default useDateInputForm;