import React from 'react';
import {View, Text, Image, StyleSheet, ScrollView} from 'react-native';
import { Divider } from 'react-native-elements/dist/divider/Divider';
import colors from '../../assets/colors/Colors';

const foods = [
  {
    title: 'Chicken kabab',
    description: '404 Error Yogi wants to know your location.',
    price: 'Rs 543',
    image: 'https://www.meatcircle.com/uploads/beef-with-bone-and-boneless.jpg',
  },
  {
    title: 'Beef kabab',
    description: '404 Error Yogi wants to know your location.',
    price: 'Rs 231.4',
    image: 'https://www.meatcircle.com/uploads/beef-with-bone-and-boneless.jpg',
  },
  {
    title: 'Chicken fry',
    description: '404 Error Yogi wants to know your location.',
    price: '$10.3',
    image: 'https://www.meatcircle.com/uploads/beef-with-bone-and-boneless.jpg',
  },
  {
    title: 'Chicken fry',
    description: '404 Error Yogi wants to know your location.',
    price: '$10.3',
    image: 'https://www.meatcircle.com/uploads/beef-with-bone-and-boneless.jpg',
  },
];

const styles = StyleSheet.create({
  menuItemStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10,
    paddingHorizontal: 20,
    paddingVertical: 25,
    backgroundColor: colors.darkGray,
    borderRadius: 10,
  },
  titleStyle: {
    fontSize: 19,
    fontWeight: '600',
    color: colors.white,
  },
});

export default function MenuItems() {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {foods.map((food, index) => (
        <View key={index}>
          <View style={styles.menuItemStyle}>
            <FoodDetails foods={food} />
            <FoodImage image={food} />
          </View>
          <Divider color={colors.grey} width={1} />
        </View>
      ))}
    </ScrollView>
  );
}

const FoodDetails = props => {
  return (
    <View style={{width: 240, justifyContent: 'space-evenly'}}>
      <Text style={styles.titleStyle}>{props.foods.title}</Text>
      <Text style={{color: colors.white, marginRight: 10}}>
        {props.foods.description}
      </Text>
      <Text style={{color: colors.white}}>{props.foods.price}</Text>
    </View>
  );
};

const FoodImage = props => {
  return (
    <View>
      <Image
        source={{uri: props.image.image}}
        style={{width: 100, height: 100, borderRadius: 10}}
      />
    </View>
  );
};
