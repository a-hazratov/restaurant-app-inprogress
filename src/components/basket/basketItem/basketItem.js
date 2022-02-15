import styles from './basketItem.module.css';

export default function basketItem({ name, amount }) {
  return (
    <div className={styles.order_item}>
      <div>
        <p>{name}</p>
      </div>

      <div>
        <p>{amount}</p>
      </div>

      <div>
        <span>X</span>
      </div>
    </div>
  );
}
