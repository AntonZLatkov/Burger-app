import { Component } from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

const INGR_PRICES = {
  salad: 0.5,
  bacon: 0.7,
  cheese: 0.4,
  meat: 1.3
}

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    },
    totalPrice: 5
  }

  addIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount + 1;
    const updatedIngredients = {
      ...this.state.ingredients
    }
    updatedIngredients[type] = updatedCount;

    const priceAddition = INGR_PRICES[type]
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + priceAddition;
    
    this.setState({totalPrice: newPrice, ingredients: updatedIngredients});
  }

  removeIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    if (oldCount <= 0) return;

    const updatedCount = oldCount - 1;
    const updatedIngredients = {
      ...this.state.ingredients
    }
    updatedIngredients[type] = updatedCount;

    const priceDeduction = INGR_PRICES[type]
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice - priceDeduction;
    
    this.setState({totalPrice: newPrice, ingredients: updatedIngredients});
  }

  render() {
    const disabledInfo = {
      ...this.state.ingredients
    }
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }
    return (
      <Aux>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          price={this.state.totalPrice}
          disabled={disabledInfo}
          ingredientAdded={this.addIngredientHandler}
          ingredientRemoved={this.removeIngredientHandler}
        />
      </Aux>
    );
  }
}

export default BurgerBuilder;