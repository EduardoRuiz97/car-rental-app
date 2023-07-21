import classes from './customInput.module.css';

const CustomInput = (props) => {
  return (
    <div className={props.invalid ? `${classes.container} ${classes.invalid}` : classes.container}>
      <label 
      htmlFor={props.name}
      >{props.label}</label>

      <input 
      type={props.type}
      name={props.name}
      id={props.id}
      onChange={props.onChange}
      onBlur={props.onBlur}
      value={props.value}
      placeholder={props.placeholder}
      min={props.min}
      max={props.max}
      style={{width: `${props.width}%`}}
      ></input>

      {props.invalid && <small style={{fontSize:'0.65em', color: 'var(--RedColor__CrimsonRed)', fontWeight: '600'}}>{props.warning}</small>}

    </div>
  )
};

export default CustomInput;