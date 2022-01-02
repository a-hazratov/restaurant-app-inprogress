import Product from '../product/product';
import styles from './menu.module.css';

export default function Menu({menu}) {
 
  console.log(menu)
  return (
    <div className = {styles.maindiv}>
      {menu.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
}
