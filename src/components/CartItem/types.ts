import {IProduct} from '../../types';

export interface ICartItemProps {
  product: IProduct;
  onRemoveItem: (id: string) => void;
}
