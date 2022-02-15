import React, { PureComponent } from 'react';
import styles from './basket.module.css';
import { restaurants } from '../../fixtures';
import BasketItem from './basketItem';
import { connect } from 'react-redux';

class basket extends PureComponent {
  render() {
    console.log('component runs');
    console.log(restaurants[0].menu[0].id);
    console.log(this.props.order);
    return (
      <div className={styles.basketContainer}>
        <div className={styles.basket}>
          <div className={styles.basket_h}>
            <h3>Your order</h3>
          </div>
          <BasketItem name={'dish name delicious bla bla'} amount={'2'} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  order: state.order,
});

export default connect(mapStateToProps)(basket);
