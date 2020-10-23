import React from 'react';
import BoardHeader from './BoardHeader.js';
import Carousel from './Carousel.js';
// import CategoryRow from './CategoryRow.js';
import FeedbackRow from './FeedbackRow.js';
import EStyleSheet from 'react-native-extended-stylesheet';
import {View} from 'react-native';

export default function Board(props) {
  return (
    <>
      <View style={localStyles.boardBackground}>
        <BoardHeader
          pictureLocation={props.data.pictureLocation}
          boardTitle={props.data.boardTitle}
        />
        <Carousel
          currentSound={props.currentSound}
          play={props.play}
          // pause={props.pause}
          // setTrack={props.setTrack}
          adKeywords={props.data.adKeywords}
          adID={props.data.bannerAdID}
          isPlaying={props.isPlaying}
          soundList={props.soundList}
        />
        <FeedbackRow toBoard={props.toBoard} toSound={props.toSound} />
      </View>
    </>
  );
}

const localStyles = EStyleSheet.create({
  boardBackground: {
    backgroundColor: '$primaryColor',
    width: '$screenWidth * .8773',
    // height: '$screenHeight * 0.63545813',
    justifyContent: 'space-between',
    borderRadius: '1rem',
    borderColor: '$secondaryColor',
    borderWidth: '0.15rem',
    alignItems: 'center',
  },
});
