import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import BasicText from '../components/BasicText';
import EStyleSheet from 'react-native-extended-stylesheet';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import AppLink from 'react-native-app-link';

export default function BuzzboardLink(props) {
  function openApp(appName, appStoreId, appStoreLocale, playStoreId) {
    AppLink.openInStore({appName, appStoreId, appStoreLocale, playStoreId});
    // .then(() => {
    //   // do stuff
    // })
    // .catch((err) => {
    //   console.log("couldn't open app store link");
    // });
  }

  return (
    <TouchableOpacity
      activeOpacity={0.6}
      onPress={() =>
        openApp(
          'Trump Soundboard (Buzzboard)',
          '1522414144',
          'us',
          'app.buzzboard.trump',
        )
      }>
      <View style={localStyles.view}>
        <BasicText style={localStyles.title}>{props.title}</BasicText>
        <View style={localStyles.linkIconView}>
          <FontAwesomeIcon
            name="external-link-square"
            size={EStyleSheet.value('1.6rem')}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
}

const localStyles = EStyleSheet.create({
  view: {
    backgroundColor: '$activeColor',
    marginHorizontal: '$vw * 6',
    paddingLeft: '0.6rem',
    borderRadius: '0.4rem',
    marginVertical: '$vh * 1',

    flexDirection: 'row',
    justifyContent: 'space-between',

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  linkIconView: {
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '$secondaryColor',
    paddingVertical: '$vh * 1',
    paddingHorizontal: '$vw * 2.5',
    height: '100%',
    borderBottomRightRadius: '0.4rem',
    borderTopRightRadius: '0.4rem',
    // borderBottomLeftRadius: '0.2rem',
    // borderTopLeftRadius: '0.2rem',
    alignSelf: 'center',
    // borderColor: '$oppositeColor',
    // borderTopWidth: '0.15rem',
    // borderRightWidth: '0.15rem',
    // borderBottomWidth: '0.15rem',
    // borderLeftWidth: '0.15rem',
  },
  title: {
    marginVertical: '0.4rem',
    fontWeight: 'bold',
    fontSize: '1.1rem',
    alignSelf: 'center',
  },
});
