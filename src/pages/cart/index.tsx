import React from 'react';
import {Box, FlatList, Heading} from 'native-base';
import {cartProcucts} from './cartProcucts';
import CartItem from '../../components/CartItem';

const Cart = () => {
  return (
    <Box flex={1} padding={['3', '0']}>
      <Heading mb={8} mt={4} color="violet.700">
        Seu Carrinho
      </Heading>
      <FlatList
        data={cartProcucts}
        keyExtractor={item => item.id}
        renderItem={({item}) => <CartItem product={item} />}
      />
    </Box>
  );
};

export default Cart;
