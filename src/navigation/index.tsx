import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Cart from '../pages/cart';
import Home from '../pages/home';
import LogoTitle from '../components/LogoTitle';
import CartIcon from '../components/CartIcon';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTintColor: '#FFFFFF',
          headerStyle: {
            backgroundColor: '#5A2D82',
          },
          headerTitle: () => <LogoTitle />,
          headerTitleAlign: 'center',
          headerRight: () => <CartIcon />,
        }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Cart" component={Cart} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
