import React from 'react';
import {View, Text, Image} from 'react-native';
import colors from '../../assets/colors/Colors';

const yelpRestaurantInfo = {
  name: 'Kitchen Thai',
  image: 'https://media-cdn.tripadvisor.com/media/photo-s/17/75/3f/d1/restaurant-in-valkenswaard.jpg',
  price: 'Rs ',
  reviews: '1500',
  rating: 4.4,
  catagories: [{title: 'Thai'}, {title: 'Comfort chicken'}],
};

const {name, image, price, reviews, rating, catagories} = yelpRestaurantInfo;

const formattedCatagories = catagories.map(cat => cat.title).join(' . ');

const description = `${formattedCatagories} ${
  price ? ' . ' + price : ''
} . lol . ${rating} star (${reviews}+)`;

// const image =
//   'https://media-cdn.tripadvisor.com/media/photo-s/17/75/3f/d1/restaurant-in-valkenswaard.jpg';

// const name = 'Modi-da-Dabha';
// const description = 'Option ky hai mitroon (2002+)';

export default function About() {
  return (
    <View
      style={{backgroundColor: colors.darkGray, borderRadius: 12, padding: 10}}>
      <RestaurantImage image={image} />
      <RestaurantName title={name} />
      <RestaurantDescription description={description} />
    </View>
  );
}

const RestaurantImage = props => {
  return (
    <View>
      <Image
        source={{uri: props.image}}
        style={{width: '100%', height: 180, borderRadius: 10}}
      />
    </View>
  );
};

const RestaurantName = props => {
  return (
    <View>
      <Text
        style={{
          color: colors.white,
          fontSize: 29,
          fontWeight: '700',
          marginTop: 10,
          marginHorizontal: 15,
        }}>
        {props.title}
      </Text>
    </View>
  );
};

const RestaurantDescription = props => {
  return (
    <Text
      style={{
        color: colors.white,
        marginHorizontal: 15,
        marginTop: 10,
        fontSize: 15.5,
        fontWeight: '400',
      }}>
      {props.description}
    </Text>
  );
};
