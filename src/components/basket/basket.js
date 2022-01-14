import React, { PureComponent } from 'react';
import styles from './basket.module.css';
import { connect } from 'react-redux';
import { restaurants } from '../../fixtures';

export class basket extends PureComponent {
  displayOrder = (menu) => {
    if (!this.props.order) return null;
    const order = this.props.order;
    return menu.map((each) => {
      if (order[each.id]) {
        return (
          <li>
            {each.name} {order[each.id]} ${each.price}
          </li>
        );
      }
      return null;
    });
  };
  render() {
    const allMenu = restaurants.flatMap((each) => [...each.menu]);
    console.log(this.props.order);
    return (
      <div className={styles.basketContainer}>
        <div className={styles.basket}>
          <div className={styles.basket_h}>
            <h3>Your order</h3>
          </div>
          {Object.keys(this.props.order).length !== 0 ? (
            <ul className={styles.basket_ul}>{this.displayOrder(allMenu)}</ul>
          ) : (
            <p>No items.</p>
          )}
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  order: state.order,
});
export default connect(mapStateToProps)(basket);
