import {atom} from 'recoil';
import {IProduct} from '../../../types';

export const cartState = atom<IProduct[]>({
  key: 'cartState',
  default: [],
});
