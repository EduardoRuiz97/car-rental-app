import classes from './Item.module.css';

const Item =(props) => {
  return (
    <li 
    className={classes.comment} 
    style={{transform: `translate(-${props.currentIndex * 100}%)`}}>
      <img 
      src={props.comment.img} 
      alt='client that is happy with our service'
      />
      <div className={classes.text}>
        <h3>{props.comment.title}</h3>
        <p>{props.comment.comment}</p>
        <h4>{props.comment.name}</h4>
      </div>
    </li>
  )
}

export default Item;