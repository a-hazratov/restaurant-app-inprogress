import { useState, useMemo } from 'react';
//import Menu from './menu';
import Restaurant from '../restaurant/Restaurant';
import Tabs from '../tabs/tabs';
import Basket from '../basket';
import styles from './restaurants.module.css';

export default function Restaurants({ restaurants }) {
  const [activeId, setActiveId] = useState(restaurants[0].id);

  const tabs = useMemo(
    () => restaurants.map(({ id, name }) => ({ id, label: name })),
    [restaurants]
  );

  const activeRestaurant = useMemo(
    () => restaurants.find((restaurant) => restaurant.id === activeId),
    [activeId, restaurants]
  );

  return (
    <div>
      <Tabs tabs={tabs} onChange={setActiveId} />
      <div className={styles.restaurants}>
        <Restaurant restaurant={activeRestaurant} />
        <Basket />
      </div>
    </div>
  );
}
