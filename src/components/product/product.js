//import counter from '../../hocs/counter';

import styles from './product.module.css';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { ReactComponent as Minus } from '../../icons/minus.svg';
import { ReactComponent as Plus } from '../../icons/plus.svg';
import { increment, decrement } from '../../redux/actions';

function Product({ product, amount, decrement, increment }) {
  return (
    <div className={styles.card} data-test="product">
      <p>{product.name}</p>
      <p>{product.ingredients.join(', ')}</p>
      <p>{product.price} $</p>
      <button onClick={decrement} data-test="decrement">
        <Minus className={styles.icon} />
      </button>
      <div data-test="amount">{amount}</div>

      <button onClick={increment} data-test="increment">
        <Plus className={styles.icon} />
      </button>
    </div>
  );
}

Product.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string,
    price: PropTypes.number,
    ingredients: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  }).isRequired,
};

const mapStateToProps = (state, props) => ({
  amount: state.order[props.product.id] || 0,
});

// const mapDispatchToProps = {
//   increment: increment,
//   decrement: decrement,
// };
const mapDispatchToProps = (dispatch, props) => ({
  increment: () => dispatch(increment(props.product.id)),
  decrement: () => dispatch(decrement(props.product.id)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Product);
