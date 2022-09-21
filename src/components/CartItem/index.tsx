import React from 'react';
import {Box, HStack, Image, Text, Spacer, VStack, Pressable} from 'native-base';
import {ICartItemProps} from './types';
import Icon from 'react-native-vector-icons/AntDesign';

const CartItem = ({product}: ICartItemProps) => {
  return (
    <Box
      backgroundColor="white"
      borderWidth="1"
      borderColor="muted.200"
      pl={['0', '4']}
      pr={['0', '5']}
      mb={2}
      py="2">
      <HStack space={[2, 3]} justifyContent="space-between">
        <Image source={product.image} alt="image" width="80px" height="80px" />
        <VStack>
          <Text color="violet.400" bold>
            {product.title}
          </Text>
          <Text color="violet.700" fontWeight={700}>
            {product.value}
          </Text>
        </VStack>
        <Spacer />
        <VStack alignItems="center" justifyContent="center" mr={4}>
          <Pressable alignSelf="flex-start">
            <VStack alignItems="center" justifyContent="center">
              <Icon name="close" size={24} color="#b82812" />
              <Text fontSize="sm" color="#b82812">
                Remover
              </Text>
            </VStack>
          </Pressable>
        </VStack>
      </HStack>
    </Box>
  );
};

export default CartItem;
