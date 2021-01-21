import * as actionTypes from './actions';

const initialState = {
  ingredients: {
    salad: 0,
    bacon: 0,
    cheese: 0,
    meat: 0
  },
  totalPrice: 5,
}

const INGR_PRICES = {
  salad: 0.5,
  bacon: 0.7,
  cheese: 0.4,
  meat: 1.3
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_INGREDIENT:
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          [action.ingredientName]: state.ingredients[action.ingredientName] + 1
        },
        totalPrice: state.totalPrice + INGR_PRICES[action.ingredientName]
      }
    case actionTypes.REMOVE_INGREDIENT:
      const ingName = action.ingredientName;
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          [ingName]: state.ingredients[ingName] - 1
        },
        totalPrice: state.totalPrice - INGR_PRICES[action.ingredientName]
      }
    default:
      return state;
  }
}

export default reducer;