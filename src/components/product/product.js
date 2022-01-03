import counter from '../../hocs/counter';

import styles from './product.module.css';
import PropTypes from 'prop-types';

import { ReactComponent as Minus } from '../../icons/minus.svg';
import { ReactComponent as Plus } from '../../icons/plus.svg';

function Product({ product, amount, decrement, increment }) {
 console.log(typeof amount)
  return (
    <div className={styles.card} data-test = 'product'>
      <p>{product.name}</p>
      <p>{product.ingredients.join(', ')}</p>
      <p>{product.price} $</p>
      <button onClick={decrement} data-test="decrement">
        <Minus className={styles.icon} />
      </button>
      <div data-test="amount">
        {amount}
      </div>
      
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
    ingredients: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired

  }).isRequired
}

export default counter(Product);
