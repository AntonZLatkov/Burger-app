import classes from './Burger.module.css';
// import PropTypes from 'prop-types';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
  let transformedIngredients = Object.keys(props.ingredients)
    .map(ingr => {
      return [...Array(props.ingredients[ingr])].map((_,i) => <BurgerIngredient key={ingr+i} type={ingr} />);
    })
    .reduce((arr, el) => {
      return arr.concat(el);
    },[]);
    
    if (transformedIngredients.length === 0) {
      transformedIngredients = <p>Please start adding ingredients!</p>
    }
  
  return (
    <div className={classes.Burger}>
      <BurgerIngredient type='bread-top' />
      {transformedIngredients}
      <BurgerIngredient type='bread-bottom' />
    </div>
  );
}


// burger.PropTypes = {
//   ingredients: PropTypes.object.isRequired
// }
 
export default burger;