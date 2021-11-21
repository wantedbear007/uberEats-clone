import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import colors from '../../assets/colors/Colors'

export default function BottomTabs() {
  return (
    <View
      style={{
        flexDirection: "row",
        // margin: 5,
        justifyContent: "space-between",
        backgroundColor: colors.grey,
        paddingHorizontal: 25,
        paddingVertical: 10,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        marginHorizontal: 0,
      }}
    >
      <Icons icon="home" text="Home" />
      <Icons icon="shopping-bag" text="Grocery" />
      <Icons icon="search" text="Browse " />
      <Icons icon="receipt" text="Orders" />
      <Icons icon="user-alt" text="Account" />
    </View>
  );
}

const Icons = (props) => {
  return (
    <TouchableOpacity>
      <FontAwesome5
        name={props.icon}
        text={props.text}
        size={25}
        style={{ marginBottom: 3, alignSelf: "center", color: colors.white }}
      />
      <Text style={{ color: colors.white }}>{props.text}</Text>
    </TouchableOpacity>
  );
};
