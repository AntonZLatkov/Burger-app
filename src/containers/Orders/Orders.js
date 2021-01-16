import React, { Component } from 'react';
import Order from '../../components/Order/Order';
import classes from './Orders.module.css';
import axios from '../../axios-orders';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

class Orders extends Component {
  state = {
    orders: [],
    loading: true
  }

  componentDidMount() {
    axios.get('/orders.json')
      .then(res => {
        console.log('res:', res.data);
        let fetchedOrders = [];
        for (let key in res.data) {
          fetchedOrders.push({
            ...res.data[key],
            id: key
          })
        }
        this.setState({ loading: false, orders: fetchedOrders });
      })
      .catch(err => {
        this.setState({ loading: false });
      })
  }

  render() {
    let orders = <Spinner />;
    if (this.state.orders.length > 0) {
      orders = this.state.orders.map(order => (
        <Order
          key={order.id}
          ingredients={order.ingredients}
          price={+order.price}
        />
      ))
    }
    return (
      <div className={classes.Orders}>
        {orders}
      </div>
    );
  }
}

export default withErrorHandler(Orders, axios);