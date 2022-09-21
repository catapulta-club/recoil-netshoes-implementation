import React from 'react';
import {useRecoilState} from 'recoil';
import {Box, FlatList, Heading} from 'native-base';
import CartItem from '../../components/CartItem';
import {cartState} from '../../state/atoms/cart';

const Cart = () => {
  const [cart, setCart] = useRecoilState(cartState);

  const handleRemoveItemOnCart = (id: string) => {
    setCart(oldCart => oldCart.filter(item => item.id !== id));
  };

  return (
    <Box flex={1} padding={['3', '0']}>
      <Heading mb={8} mt={4} color="violet.700">
        Seu Carrinho
      </Heading>
      <FlatList
        data={cart}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <CartItem product={item} onRemoveItem={handleRemoveItemOnCart} />
        )}
      />
    </Box>
  );
};

export default Cart;
