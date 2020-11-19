import React, {useState, useRef, useEffect} from 'react';
import {
  View,
  ScrollView,
  FlatList,
  Animated,
  Platform,
  StatusBar,
} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import AdContainer from './AdContainer';
import CategoryRow from './CategoryRow';
import SoundList from './SoundList';
import ListItem from './ListItem';
import {
  RewardedAd,
  RewardedAdEventType,
  TestIds,
} from '@react-native-firebase/admob';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Carousel(props) {
  const [scrollPosition, setScrollPosition] = useState(0);
  const _carousel = useRef(null);

  // const rewarded = RewardedAd.createForAdRequest(adUnitId, {
  //   requestNonPersonalizedAdsOnly: true,
  //   keywords: ['fashion', 'clothing'],
  // });

  const adID = __DEV__ ? TestIds.REWARDED : props.rewardedAdID;

  const showRewarded = async (title, setHoursRemaining, setLoading) => {
    const rewarded = RewardedAd.createForAdRequest(adID, {
      requestNonPersonalizedAdsOnly: false,
    });
    const unsubscribe = rewarded.onAdEvent((type, error, reward) => {
      if (type === 'opened') {
        console.log('opened');
        StatusBar.setHidden(true);
      }
      if (type === 'closed') {
        console.log('closed');
        StatusBar.setHidden(false);
        setLoading(false);
      }
      if (type === RewardedAdEventType.LOADED) {
        console.log('loaded');
        rewarded.show();
        loaded = true;
      }
      if (type === RewardedAdEventType.EARNED_REWARD) {
        StatusBar.setHidden(false);
        console.log('earned reward');
        gotReward = true;
        AsyncStorage.setItem(title, JSON.stringify(new Date()));
        console.log(
          `set async storage for ${title} to:`,
          JSON.stringify(new Date()),
        );
        setHoursRemaining(24);
        setLoading(false);
        unsubscribe();
        return gotReward;
      }
      if (error) {
        console.warn('error: ', error);
        setLoading(false);
        unsubscribe();
        return gotReward;
      }
    });
    let loaded = false;
    let gotReward = false;
    rewarded.load();
    while (!loaded) {
      await new Promise((resolve, reject) => setTimeout(resolve, 1000));
    }
  };

  const renderItem = ({item}) => {
    return (
      <>
        <ListItem
          // scrollPosition={scrollPosition}
          track={item}
          title={item.title}
          id={item.id}
          sound={item.sound}
          play={props.play}
          pause={props.pause}
          setTrack={props.setTrack}
          currentSound={props.currentSound}
          isPlaying={props.isPlaying}
          premium={item.premium}
          showRewarded={showRewarded}
        />
      </>
    );
  };

  function handleScroll(event) {
    setScrollPosition(event.nativeEvent.contentOffset.x);
  }

  return (
    <>
      <View style={localStyles.scrollContainer}>
        <FlatList
          horizontal={true}
          contentContainerStyle={localStyles.scrollViewStyle}
          pagingEnabled
          ref={_carousel}
          showsHorizontalScrollIndicator={false}
          onScroll={handleScroll}
          scrollEventThrottle={1}
          keyExtractor={(keyItem) => keyItem.id}
          data={props.soundList}
          renderItem={({item}) => {
            return (
              <>
                <View style={localStyles.carouselInner}>
                  <FlatList
                    style={localStyles.soundList}
                    contentContainerStyle={localStyles.boardList}
                    data={item.sounds}
                    renderItem={renderItem}
                    scrollEnabled={false}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(keyItem) => keyItem.id.toString()}
                  />
                  {/* <AdContainer
                    testing={false}
                    adID={item.adID}
                    style={localStyles.bannerAd}
                  /> */}
                </View>
              </>
            );
          }}
        />
      </View>
      <AdContainer
        testing={false}
        adID={__DEV__ ? TestIds.BANNER : props.bannerAdID}
        style={localStyles.bannerAd}
        adKeywords={props.adKeywords}
      />
      <CategoryRow
        carouselRef={_carousel}
        soundList={props.soundList}
        scrollPosition={scrollPosition}
      />
    </>
  );
}

const localStyles = EStyleSheet.create({
  scrollContainer: {
    height: '$screenHeight * 0.46514285',
    width: '$screenWidth',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '$vh * 1',
  },
  carouselInner: {
    flexWrap: 'nowrap',
  },
  boardList: {
    alignSelf: 'center',
    alignItems: 'center',
    width: '$screenWidth',
    paddingBottom: '$screenHeight * 0.02',
  },
});
