"use client"
import classes from './Modal.module.css';
import { AiOutlineClose} from "react-icons/ai";

const Modal = (props) => {
  return (
    <div className={classes.backdrop}>
      <div className={classes.modal}>
        <div className={classes.title}>
          <h3>{props.title}</h3>
          <AiOutlineClose className={classes.icon} onClick={props.onClick}/>
        </div>

        {props.children}
      </div>
    </div>
  )
};

export default Modal;
