import React, {useEffect, useState} from 'react';
import {
  TouchableOpacity,
  View,
  Text,
  Alert,
  ActivityIndicator,
} from 'react-native';
import BasicText from './BasicText';
import EStyleSheet from 'react-native-extended-stylesheet';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import AsyncStorage from '@react-native-async-storage/async-storage';

function diff_hours(dt2, dt1) {
  var diff = (dt2.getTime() - dt1.getTime()) / 1000;
  diff /= 60 * 60;
  return Math.abs(Math.round(diff));
}

const createAlert = (functionArg) =>
  Alert.alert(
    'Get Premium Sound',
    'View an advertisement to unlock this sound?',
    [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'OK', onPress: functionArg},
    ],
    {cancelable: false},
  );

function hoursRemainingAlert() {
  Alert.alert(
    'Remaining Sound Time',
    'This is the number of hours this sound will remain unlocked.',
    [{text: 'OK'}],
    {cancelable: false},
  );
}

function ListItem(props) {
  const [hoursRemaining, setHoursRemaining] = useState(null);
  const [loading, setLoading] = useState(true);

  const track = {
    id: props.id,
    sound: props.sound,
    title: props.title,
  };

  useEffect(() => {
    async function checkStorage() {
      try {
        const storedDate = await AsyncStorage.getItem(props.title);
        // console.log(`Stored Date for ${props.title}: `, storedDate);
        const date = new Date(JSON.parse(storedDate));
        // const date = new Date(2020, 11, 16, 21);
        if (date !== null) {
          const currentDate = new Date();
          setHoursRemaining(24 - diff_hours(currentDate, date));
        } else {
          setHoursRemaining(0);
        }
        setLoading(false);
      } catch (e) {
        console.error('error: ', e);
      }
    }

    if (props.premium) {
      checkStorage();
    } else {
      setLoading(false);
    }
  }, [props.premium, props.title, hoursRemaining]);

  useEffect(() => {
    props.premium
      ? console.log(props.title + ' hours remaining: ', hoursRemaining)
      : null;
  }, [hoursRemaining, props.title, props.premium]);

  // console.log(props.title);

  // async function skip() {
  //   props.setTrack(soundObject);
  // }

  async function rewardedResult() {
    setLoading(true);
    const result = await props.showRewarded(
      props.title,
      setHoursRemaining,
      setLoading,
    );
    console.log('result: ', result);
  }

  async function play() {
    if (props.premium && hoursRemaining < 1) {
      createAlert(async () => await rewardedResult());
    } else {
      await props.play(track);
    }
  }

  async function pause() {
    // await TrackPlayer.pause();
    // await TrackPlayer.seekTo(0);
  }

  function ListItemControls() {
    if (loading) {
      return <ActivityIndicator />;
    } else if (!props.premium) {
      return (
        <FontAwesome5Icon
          name={
            props.isPlaying && props.currentSound.id === props.id
              ? 'pause'
              : 'play'
          }
          style={localStyles.listItemPlayIcon}
        />
      );
    } else if (hoursRemaining < 1) {
      return (
        <FontAwesome5Icon name={'lock'} style={localStyles.listItemPlayIcon} />
      );
    } else {
      return (
        <>
          <TouchableOpacity onPress={hoursRemainingAlert} activeOpacity={0.6}>
            <Text style={localStyles.hoursRemaining}>{hoursRemaining}</Text>
          </TouchableOpacity>
          <FontAwesome5Icon
            name={
              props.isPlaying && props.currentSound.id === props.id
                ? 'pause'
                : 'play'
            }
            style={localStyles.listItemPlayIcon}
          />
        </>
      );
    }
  }

  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={false ? pause : play}
      style={{...localStyles.listItem}}>
      <View style={localStyles.listItemTextContainer}>
        <BasicText numberOfLines={1} style={localStyles.listItemText}>
          {props.title}
        </BasicText>
      </View>
      <View style={localStyles.listItemControlsContainer}>
        {<ListItemControls />}
      </View>
    </TouchableOpacity>
  );
}

export default React.memo(ListItem);
const localStyles = EStyleSheet.create({
  $height: '$screenHeight * 0.05788177',
  listItem: {
    width: '$screenWidth * 0.90933333', //same as BoardHeader
    height: '$screenHeight * 0.05788177',
    justifyContent: 'space-between',
    flexDirection: 'row',
    // paddingLeft: '$screenWidth * 0.06133333',
    paddingHorizontal: '$vw * 4',
    borderRadius: '$height * 0.3',
    backgroundColor: '$secondaryColor',
    borderColor: 'white',
    borderWidth: '0.15rem',
    marginTop: '$screenHeight * 0.019',
    // shadowColor: '#000',
    // shadowOffset: {
    //   width: 0,
    //   height: 1,
    // },
    // shadowOpacity: 0.22,
    // shadowRadius: 2.22,

    // elevation: 3,
  },
  hoursRemaining: {
    borderColor: 'black',
    borderWidth: '.1rem',
    paddingHorizontal: '.15rem',
    borderRadius: '.3rem',
    color: 'black',
    // backgroundColor: 'black',
    fontWeight: 'bold',
    marginRight: '$vw * 2',
    fontSize: '0.7rem',
  },
  listItemText: {
    fontSize: '1rem',
    fontWeight: 'bold',
    maxWidth: '$vw * 68',
  },
  listItemTextContainer: {
    alignSelf: 'center',
  },
  listItemControlsContainer: {
    alignItems: 'center',
    alignSelf: 'center',
    // marginRight: '$screenWidth * 0.10666667',
    flexDirection: 'row',
    justifyContent: 'space-between',
    // width: '$vw * 7',
  },
});
