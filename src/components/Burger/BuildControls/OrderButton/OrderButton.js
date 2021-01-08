import classes from './OrderButton.module.css';

const orderButton = (props) => {
  return (
    <button
      onClick={props.ordered}
      disabled={!props.purchaseable} 
      className={classes.OrderButton}
    >Order Now</button>
  );
}
 
export default orderButton;