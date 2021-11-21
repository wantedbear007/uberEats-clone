import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import colors from '../../assets/colors/Colors';

export default function HeaderTabs(props) {
  return (
    <View style={{flexDirection: 'row', alignSelf: 'center'}}>
      {/* Header button */}
      <HeaderButtons
        text="Delivery"
        btnColor={colors.white}
        textColor={colors.black}
        activeTab={props.activeTab}
        setActiveTab={props.setActiveTab}
      />
      <HeaderButtons
        text="Pickup"
        btnColor={colors.black}
        textColor={colors.white}
        activeTab={props.activeTab}
        setActiveTab={props.setActiveTab}
      />
    </View>
  );
}

const HeaderButtons = props => {
  return (
    <View>
      <TouchableOpacity
        style={{
          backgroundColor:
            props.activeTab === props.text ? colors.white : colors.grey,
          paddingVertical: 6,
          paddingHorizontal: 16,
          borderRadius: 30,
        }}
        onPress={() => {
          props.setActiveTab(props.text);
        }}>
        <Text
          style={{
            color: props.activeTab === props.text ? colors.black : colors.white,
            fontSize: 15,
            fontWeight: 'bold',
          }}>
          {props.text}
        </Text>
      </TouchableOpacity>
    </View>
  );
};
