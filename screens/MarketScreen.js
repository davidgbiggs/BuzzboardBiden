import React from 'react';
import {ScrollView} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import StackScreenHeader from '../components/StackScreenHeader';
import {SafeAreaView} from 'react-native-safe-area-context';
import BuzzboardLink from '../components/BuzzboardLink';

export default function MarketScreen({navigation}) {
  return (
    <SafeAreaView style={localStyles.safeArea}>
      <StackScreenHeader navigation={navigation} title="Extras" />
      <ScrollView style={localStyles.scrollView}>
        <BuzzboardLink title="Trump Buzzboard" />
      </ScrollView>
    </SafeAreaView>
  );
}

const localStyles = EStyleSheet.create({
  safeArea: {},
  scrollView: {
    height: '$vh * 100',
  },
  constructionView: {
    height: '60%',
    justifyContent: 'center',
  },
  constructionText: {
    alignSelf: 'center',
  },
});
