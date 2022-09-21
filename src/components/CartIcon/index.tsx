import {useNavigation} from '@react-navigation/native';
import {Badge, VStack, Pressable} from 'native-base';
import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';

const CartIcon = () => {
  const navigation = useNavigation();

  const hadleGoToCart = () => {
    navigation.navigate('Cart');
  };

  return (
    <Pressable onPress={hadleGoToCart}>
      <VStack>
        <Badge
          colorScheme="danger"
          rounded="full"
          mb={-3}
          mr={-3}
          zIndex={1}
          variant="solid"
          alignSelf="flex-end"
          _text={{
            fontSize: 10,
          }}>
          2
        </Badge>
        <Icon name="shoppingcart" size={28} color="#FFFFFF" />
      </VStack>
    </Pressable>
  );
};

export default CartIcon;
