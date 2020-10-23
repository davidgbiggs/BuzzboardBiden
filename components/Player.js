import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import BasicText from './BasicText';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import AdContainer from './AdContainer';

// might want to implement https://github.com/osdnk/react-native-reanimated-bottom-sheet

export default function Player(props) {
  const insets = useSafeAreaInsets();

  return (
    <>
      <TouchableOpacity
        activeOpacity={0.6}
        onPress={() => props.play(props.currentSound)}>
        <View
          style={{
            ...localStyles.playerContainer,
            paddingBottom: insets.bottom,
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingHorizontal: EStyleSheet.value('$screenWidth * 0.05'),
              backgroundColor: EStyleSheet.value('$activeColor'),
            }}>
            <BasicText numberOfLines={1} style={localStyles.playerText}>
              {props.currentSound.title}
            </BasicText>
            <TouchableOpacity
              activeOpacity={0.6}
              onPress={() => props.play(props.currentSound)}>
              <FontAwesome5Icon
                name={props.isPlaying ? 'pause' : 'play'}
                size={EStyleSheet.value('1.5rem')}
                style={localStyles.listItemPlayIcon}
              />
            </TouchableOpacity>
          </View>
          {/* <View
            style={{
              flexDirection: 'row',
              // paddingVertical: EStyleSheet.value('$vh * 1'),
            }}>
            <AdContainer
              testing={true}
              keywords={props.keywords}
              adID={props.adID}
            />
          </View> */}
        </View>
      </TouchableOpacity>
    </>
  );
}

const localStyles = EStyleSheet.create({
  playerContainer: {
    // height: '$screenHeight * 0.07635468',
    width: '$screenWidth + 20',
    backgroundColor: '$activeColor',
    // alignItems: 'center',
    // justifyContent: 'space-between',
    // paddingHorizontal: '$screenWidth * 0.05',
    borderWidth: '0.15rem',
    borderColor: '$secondaryColor',
    marginBottom: '-0.15rem',
  },
  playerText: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    maxWidth: '$vw * 80',
    marginVertical: '$vh * 2',
  },
});
