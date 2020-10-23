import React from 'react';
import {View, Platform} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import {BannerAd, TestIds, BannerAdSize} from '@react-native-firebase/admob';
import DeviceInfo from 'react-native-device-info';

function AdContainer(props) {
  console.log(DeviceInfo.getBrand());

  return (
    <>
      <View style={{...localStyles.bannerAd}}>
        {/* <View style={{height: 50, width: 320, backgroundColor: 'white'}} /> */}
        <BannerAd
          size="320x50"
          // size={
          //   DeviceInfo.getBrand() === 'Apple'
          //     ? BannerAdSize.SMART_BANNER
          //     : '320x50'
          // }
          requestOptions={{
            keywords: props.adKeywords,
          }}
          unitId={props.testing ? TestIds.BANNER : props.adID}
          onAdFailedToLoad={(error) => {
            console.log(`Failed Loading: ${error} \n\n\n\n\n\n\n`);
          }}
          onAdClosed={(error) => {
            console.log(`Closed: ${error} \n\n\n\n\n\n\n`);
          }}
          onAdOpened={(error) => {
            console.log(`Opened: ${error} \n\n\n\n\n\n\n`);
          }}
        />
      </View>
    </>
  );
}

export default React.memo(AdContainer);

const localStyles = EStyleSheet.create({
  bannerAd: {
    // height: '$screenHeight * 0.07142857',
    // padding: '$vh * 0.6',
    // borderColor: '$oppositeColor',
    // borderWidth: '0.2rem',
    // width: '$vh * 100',
    // marginBottom: '$screenHeight * 0.01169951',
    // marginTop: '$screenHeight * -0.01169951',
    // backgroundColor: 'white',
    // borderWidth: 1,
    // borderColor: 'black',
    // alignSelf: 'center',
    // maxHeight: '$vh * 5',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    width: '$vw * 100',
  },
});
