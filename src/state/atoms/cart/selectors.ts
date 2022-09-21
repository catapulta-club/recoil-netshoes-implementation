import {selector} from 'recoil';
import {cartState} from '.';

export const counterCartItems = selector({
  key: 'counterCartItems',
  get: ({get}) => {
    const cartItems = get(cartState);
    return cartItems.length;
  },
});
