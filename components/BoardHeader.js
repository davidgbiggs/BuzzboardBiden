import React from 'react';
import {View, Image} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import BasicText from './BasicText';

export default function BoardHeader(props) {
  return (
    <View style={localStyles.pictureRow}>
      <Image source={require('./biden.jpg')} style={localStyles.boardPerson} />
      <BasicText style={localStyles.boardTitle}>{props.boardTitle}</BasicText>
    </View>
  );
}

const localStyles = EStyleSheet.create({
  pictureRow: {
    marginTop: '-0.04618227 * $screenHeight',
    //marginLeft: '-0.05 * $screenWidth',
    width: '$screenWidth * 0.90933333',
    flexDirection: 'row',
    alignItems: 'center',
  },
  boardPerson: {
    $pictureHeight: '0.06896552 * $screenHeight',
    width: '$pictureHeight',
    height: '$pictureHeight',
    borderRadius: '$pictureHeight * 0.17',
  },
  boardTitle: {
    marginLeft: '$screenWidth * 0.02',
    fontWeight: 'bold',
    fontSize: '2.5rem',
  },
});
