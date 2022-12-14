import React, { useState } from 'react';
import {Box, FlatList} from 'native-base';
import ProductItem from '../../components/ProductItem';
import {styles} from './styles';
import {useFetch} from '../../hooks/useSWR';
import {IProduct} from '../../types';

const Home = () => {
  const {data: productsData} = useFetch<IProduct[]>('/shoes');

  return (
    <Box flex={1} padding={['2', '12']}>
      <FlatList
        data={productsData}
        numColumns={2}
        columnWrapperStyle={styles.row}
        keyExtractor={item => item.id}
        renderItem={({item}) => <ProductItem product={item} />}
      />
    </Box>
  );
};

export default Home;
