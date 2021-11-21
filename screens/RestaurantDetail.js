import React from 'react';
import {View} from 'react-native';
import {Divider} from 'react-native-elements';
import colors from '../assets/colors/Colors';
import About from '../components/restaurantDetail/About';
import MenuItems from '../components/restaurantDetail/MenuItems';

export default function RestaurantDetail() {
  return (
    <View style={{backgroundColor: colors.black, flex: 1}}>
      <About />
      <Divider width={1.8} style={{marginTop: 20}} color={colors.grey} />
      <MenuItems />
    </View>
  );
}
