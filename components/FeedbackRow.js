import React from 'react';
import {View} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import {Alert} from 'react-native';
import FeedbackButton from './FeedbackButton';
import {openSmsUrl} from '../utils/smsHelpers';

export default function FeedbackRow(props) {
  // props.toSound and props.toBoard

  const createAlert = (functionArg) =>
    Alert.alert(
      'Leaving App',
      'This will take you to your messages app. Is this okay?',
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

  return (
    <View style={localStyles.feedbackRow}>
      <FeedbackButton
        onPress={() =>
          createAlert(() =>
            openSmsUrl(
              '4053559436',
              "I'd like to suggest a sound! \nYoutube video link: \nTimestamp: \nComment: ",
            ),
          )
        }
        side="left">
        Suggest Sound
      </FeedbackButton>
      <FeedbackButton
        onPress={() =>
          createAlert(() =>
            openSmsUrl(
              '4053559436',
              "I'd like to request a Buzzboard! \nCelebrity Name: \nYoutube Page Link: \nTikTok Page Link: \nComment: ",
            ),
          )
        }
        side="right">
        Request Board
      </FeedbackButton>
    </View>
  );
}

const localStyles = EStyleSheet.create({
  feedbackRow: {
    flexDirection: 'row',
    marginTop: '$vh * -0.8',
    marginBottom: '$vh * -3',
  },
});
