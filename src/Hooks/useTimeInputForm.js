import { useState } from "react";


const useTimeInputForm = (validationFn) => {

  let now = new Date();
  let hours = String(now.getHours()).padStart(2, "0");
  let minutes = String(now.getMinutes()).padStart(2, "0");
  let currentTime = hours + ":" + minutes;

  const [inputValue, setInputValue] = useState(currentTime);

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
    minValue: currentTime
  }
}

export default useTimeInputForm;