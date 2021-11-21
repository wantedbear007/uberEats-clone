import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import colors from '../../assets/colors/Colors';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export const localRestaurants = [
  {
    name: 'Beachside Bar',
    image_url:
      'https://img.traveltriangle.com/blog/wp-content/uploads/2019/08/Indian-Restaurants-In-Japan.jpg',
    catagories: ['Cafe', 'Bar'],
    price: 'Rs 200',
    reviews: 1322,
    rating: '4.0',
  },
  {
    name: 'Wanted bar ',
    image_url:
      'https://www.welikela.com/wp-content/uploads/2015/06/nobu-malibu.jpg',
    catagories: ['Cafe', 'Bar'],
    price: 'Rs 200',
    reviews: 1322,
    rating: '4.0',
  },
  {
    name: 'Sideone Restaurant',
    image_url:
      'https://www.welikela.com/wp-content/uploads/2015/06/nobu-malibu.jpg',
    catagories: ['Cafe', 'Bar'],
    price: 'Rs 200',
    reviews: 1322,
    rating: '4.2',
  },
];

export default function RestaurantItems(props) {
  return (
    <TouchableOpacity activeOpacity={1} style={{marginBottom: 30}}>
      {props.restaurantsData.map((restaurant, index) => (
        <View
          key={index}
          style={{
            marginTop: 10,
            padding: 15,
            backgroundColor: colors.grey,
            borderRadius: 20,
          }}>
          <RestaurantImage image={restaurant.image_url} />
          <RestaurantInfo name={restaurant.name} rating={restaurant.rating} />
        </View>
      ))}
    </TouchableOpacity>
  );
}

const RestaurantImage = props => {
  return (
    <View>
      <Image
        source={{
          uri: props.image,
        }}
        style={{width: '100%', height: 180, borderRadius: 20}}
      />
      <TouchableOpacity style={{position: 'absolute', right: 20, top: 20}}>
        <MaterialCommunityIcons
          name="heart-outline"
          size={25}
          color={colors.white}
        />
      </TouchableOpacity>
    </View>
  );
};

const RestaurantInfo = props => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10,
      }}>
      <View>
        <Text style={{color: colors.white, fontSize: 15, fontWeight: 'bold'}}>
          {props.name}
        </Text>
        <Text
          style={{color: colors.white, fontSize: 13, color: colors.lightGray}}>
          10-15 - min
        </Text>
      </View>
      <View
        style={{
          backgroundColor: colors.grey,
          height: 30,
          width: 30,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 50,
        }}>
        <Text style={{color: colors.white}}>{props.rating}</Text>
      </View>
    </View>
  );
};
