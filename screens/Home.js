import React, {useEffect, useState} from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import colors from '../assets/colors/Colors';
import BottomTabs from '../components/home/BottomTabs';
import Catagories from '../components/home/Catagories';
import HeaderTabs from '../components/home/HeaderTabs';
import RestaurantItems from '../components/home/RestaurantItems';
import SearchBar from '../components/home/SearchBar';
import {localRestaurants} from '../components/home/RestaurantItems';
import {Divider} from 'react-native-elements/dist/divider/Divider';

const YELP_API_KEY =
  'X92THGPcHr7rU1MTTD6fw2D0Y14w9Be2MqG-2-IPUF8qXdifx9RiRtwmPQfyGk0lioCyTelekTyKDmAlEaZrq2CyWiyyz3E7tsaHzIa2INppUIV3X2VI-GpTk5qTYXYx';

export default function Home() {
  const [restaurantData, setRestaurantData] = useState(localRestaurants);
  const [city, setCity] = useState('newyork');
  const [activeTab, setActiveTab] = useState('Delivery');

  // Fetching data from yelp
  const getRestaurantsFromYelp = () => {
    const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`;

    const apiOptions = {
      headers: {
        Authorization: `Bearer ${YELP_API_KEY}`,
      },
    };
    return fetch(yelpUrl, apiOptions)
      .then(res => res.json())
      .then(json =>
        setRestaurantData(
          json.businesses.filter(business =>
            business.transactions.includes(activeTab.toLowerCase()),
          ),
        ),
      );
  };

  useEffect(() => {
    getRestaurantsFromYelp();
  }, [city, activeTab]);

  return (
    <View style={styles.androidSafeArea}>
      <View
        style={{
          backgroundColor: colors.grey,
          padding: 15,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
        }}>
        <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        <SearchBar selectedCity={setCity} />
      </View>
      <Divider width={0.5} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Catagories />
        <RestaurantItems restaurantsData={restaurantData} />
      </ScrollView>
      <Divider width={0.5} />
      <BottomTabs />
    </View>
  );
}

const styles = StyleSheet.create({
  androidSafeArea: {
    flex: 1,
    backgroundColor: colors.black,
  },
});
