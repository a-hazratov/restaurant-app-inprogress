import React, { PureComponent } from 'react';
//import { restaurants } from '../fixtures';
import Menu from '../menu/menu';
import Reviews from '../reviews/Reviews';
import Rate from '../rate/Rate'

class Restaurant extends PureComponent {
  render() {
    let activeRestaurant = this.props.restaurant;
    let revs = activeRestaurant.reviews;
    const total = revs.reduce((acc, { rating })=> acc + rating, 0)
    let value = Math.round(total / revs.length);
    
  
    return (
      <div>
        <h3>{activeRestaurant.name} daily menu  {<Rate value = {value}/>}</h3>
        
        <Menu menu = {activeRestaurant.menu}/>
        <Reviews  reviews = {activeRestaurant.reviews}/>    
      </div>
    )
  }
}

export default Restaurant
