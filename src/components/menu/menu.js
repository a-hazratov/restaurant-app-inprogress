import Product from '../product/product';
import styles from './menu.module.css';
import PropTypes from 'prop-types';

export default function Menu({menu}) {
 
 
  return (
    <div className = {styles.maindiv}>
      {menu.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
}

Menu.propTypes = {
  menu: PropTypes.array.isRequired
}