import { mount } from 'enzyme';


import Reviews from './Reviews';
import {restaurants} from '../../fixtures';

const reviews = restaurants[0].reviews;

describe('Reviews', ()=> {
  it('should render Reviews', ()=> {
    const numOfReviews = reviews.length;
    const wrapper = mount(<Reviews reviews = {reviews}/>);
    expect(wrapper.find('[data-test="reviews"]').length).toBe(numOfReviews);
  })
})