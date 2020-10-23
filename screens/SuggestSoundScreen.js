import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import StackScreenHeader from '../components/StackScreenHeader';
import BasicText from '../components/BasicText';
import {SafeAreaView} from 'react-native-safe-area-context';
import {openSmsUrl} from '../utils/smsHelpers';

export default function SuggestSoundScreen({navigation}) {
  return (
    <SafeAreaView style={localStyles.safeArea}>
      <StackScreenHeader navigation={navigation} title="Suggest a Sound" />
      <View style={localStyles.constructionView}>
        <Text>
          <TouchableOpacity
            onPress={() =>
              openSmsUrl(
                '4053559436',
                "I'd like to suggest a sound! \nYoutube link: \nTimestamp: \nComment: ",
              )
            }
            style={localStyles.touchable}
            activeOpacity={0.6}>
            <BasicText style={localStyles.constructionText}>
              Tap to suggest a sound!
            </BasicText>
          </TouchableOpacity>
        </Text>
      </View>
    </SafeAreaView>
  );
}

const localStyles = EStyleSheet.create({
  safeArea: {},
  constructionView: {
    height: '60%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  touchable: {
    backgroundColor: '$secondaryColor',
    borderColor: '$oppositeColor',
    borderWidth: '0.1rem',
    borderRadius: '0.5rem',
    // marginHorizontal: '$vw * 10',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: '0.7rem',
    paddingHorizontal: '0.6rem',
  },
  constructionText: {
    alignSelf: 'center',
    fontSize: '1.3rem',
    color: 'black',
  },
});
