import { mount } from 'enzyme';

import Product from './product'
import {restaurants} from '../../fixtures';


const product = restaurants[0].menu[0];

const selectors = {
  product: '[data-test="product"]',
  amount: '[data-test="amount"]',
  increment: '[data-test="increment"]',
  decrement: '[data-test="decrement"]'
};

function render(props) {
  const wrapper = mount(<Product product = {product} {...props}/>);

  return {
    getProductsCount: ()=> wrapper.find(selectors.product).length,
    getAmount: ()=> wrapper.find(selectors.amount).text(),
    increase: ()=> wrapper.find(selectors.increment).simulate('click'),
    decrease: ()=> wrapper.find(selectors.decrement).simulate('click'),
  }
}

describe('Product', ()=> {

  it('should render', ()=> { 
    const testKit = render()
    expect(testKit.getProductsCount()).toBe(1);
  });

  it('should start with value 0', ()=> {
   const testKit = render()
    expect(testKit.getAmount()).toBe('0')
  })

  it('should increment count', ()=> {
   const testKit = render();
   testKit.increase()
   expect(testKit.getAmount()).toBe('1')
  })

  it('should init with amount = 2', ()=> {
    const testKit = render({initialAmount: 2});
    expect(testKit.getAmount()).toBe('2')

  })

  it('should decrement the count', ()=> {
    const testKit = render({initialAmount: 4});
    testKit.decrease();
    expect(testKit.getAmount()).toBe('3')
  })
});