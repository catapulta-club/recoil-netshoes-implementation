import React from 'react';
import {Box, Button, Heading, HStack, Image, Stack} from 'native-base';
import {IProductItemProps} from './types';

const ProductItem = ({product}: IProductItemProps) => {
  return (
    <Box
      rounded="lg"
      m={2}
      backgroundColor="white"
      borderColor="gray.200"
      borderWidth="1"
      flex={1}>
      <Box borderBottomColor="gray.200" borderBottomWidth="1">
        <Image
          source={{uri: product.image}}
          alt="image"
          width="100%"
          height="140px"
        />
        <Box
          bg="violet.500"
          _dark={{
            bg: 'violet.400',
          }}
          _text={{
            color: 'warmGray.50',
            fontWeight: '700',
            fontSize: 'xs',
          }}
          position="absolute"
          bottom="0"
          px="3"
          py="1.5">
          {product.type.toLocaleUpperCase()}
        </Box>
      </Box>
      <Stack p="4" space={3}>
        <Stack space={2}>
          <Heading size="md" ml="-1" color="violet.700">
            {product.value}
          </Heading>
        </Stack>
        <HStack alignItems="center" space={4} justifyContent="space-between">
          <HStack alignItems="center">
            <Button backgroundColor="violet.700" size="sm">
              Adicionar ao carrinho
            </Button>
          </HStack>
        </HStack>
      </Stack>
    </Box>
  );
};

export default ProductItem;
