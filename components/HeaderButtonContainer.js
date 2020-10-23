import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import EntypoIcon from 'react-native-vector-icons/Entypo';

export default function HeaderButtonContainer(props) {
  const iconColor = EStyleSheet.value('black');

  return (
    <View style={localStyles.headerButtonContainer}>
      <TouchableOpacity activeOpacity={0.6} onPress={props.toMarket}>
        <EntypoIcon
          size={EStyleSheet.value('$screenHeight * 0.03825123')}
          name="shop"
          style={localStyles.icon}
          color={iconColor}
        />
      </TouchableOpacity>
      {/* <TouchableOpacity activeOpacity={0.6} onPress={() => {}}>
        <MaterialIcon
          size={EStyleSheet.value('$screenHeight * 0.03825123')}
          name="settings"
          style={localStyles.icon}
          color={iconColor}
        />
      </TouchableOpacity> */}
    </View>
  );
}

const localStyles = EStyleSheet.create({
  headerButtonContainer: {
    flexDirection: 'row',
    backgroundColor: '$activeColor',
    justifyContent: 'space-around',
    padding: '$screenWidth * 0.014',
    borderTopLeftRadius: '0.5rem',
    borderBottomLeftRadius: '0.5rem',
    borderColor: '$secondaryColor',
    borderWidth: '0.15rem',
    borderRightWidth: 0,
  },
  icon: {borderColor: 'black', paddingHorizontal: '$screenWidth * 0.008'},
});
