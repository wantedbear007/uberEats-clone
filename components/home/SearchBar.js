import React from "react";
import { View, Text } from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import colors from "../../assets/Colors";
import Ionicons from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";

export default function SearchBar(props) {
  return (
    <View style={{ marginTop: 15, flexDirection: "row" }}>
      <GooglePlacesAutocomplete
        query={{ key: "AIzaSyDo44L53qbAOo9E1133Uuyr6AxU9H8NqWg" }}
        onPress={(data, details = null) => {
          console.log(data.description);
          props.selectedCity(data.description.split(",")[0]);
        }}
        placeholder="Search"
        styles={{
          textInput: {
            backgroundColor: colors.lightGray,
            borderRadius: 20,
            fontWeight: "700",
            marginTop: 7,
          },
          textInputContainer: {
            backgroundColor: colors.lightGray,
            borderRadius: 50,
            flexDirection: "row",
            alignItems: "center",
            marginRight: 10,
          },
        }}
        renderLeftButton={() => {
          return (
            <View style={{ marginLeft: 10 }}>
              <Ionicons name="location-sharp" size={24} color={colors.black} />
            </View>
          );
        }}
        renderRightButton={() => {
          return (
            <View
              style={{
                flexDirection: "row",
                marginRight: 8,
                backgroundColor: colors.grey,
                padding: 9,
                borderRadius: 30,
                alignItems: "center",
                color: colors.white,
              }}
            >
              <AntDesign
                name="clockcircle"
                size={11}
                style={{ marginRight: 6 }}
                color={colors.white}
              />
              <Text style={{ color: colors.white }}>Search</Text>
            </View>
          );
        }}
      />
    </View>
  );
}
