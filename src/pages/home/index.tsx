import React from 'react';
import {Box, FlatList} from 'native-base';
import ProductItem from '../../components/ProductItem';
import {productsData} from './products';
import {styles} from './styles';

const Home = () => {
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
