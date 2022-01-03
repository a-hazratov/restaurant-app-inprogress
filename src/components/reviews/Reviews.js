import React, { Component } from 'react';
import styles from './Reviews.module.css';
import Rate from '../rate/Rate';

 class Reviews extends Component {

  render() {
    let {reviews} = this.props;

   return (
    <div className = {styles.reviewDiv}>
      {reviews.map((review, index) => {
        return  <div className = {styles.reviewCard} key = {index}>
                 <h4>{review.user}</h4>
                 <p>{review.text}</p>
                 <Rate value = {review.rating}/>
                </div>
        
      })}
    </div>
   )
  }
}

export default Reviews;
