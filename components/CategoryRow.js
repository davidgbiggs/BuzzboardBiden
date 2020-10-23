import React, {useRef, useEffect, useState} from 'react';
import {ScrollView, FlatList, View} from 'react-native';
import CategoryChip from './CategoryChip';
import EStyleSheet from 'react-native-extended-stylesheet';
import {Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;

export default function CategoryRow(props) {
  const [activeIndex, setActiveIndex] = useState('0');
  const _categoryRow = useRef(null);

  useEffect(() => {
    const index = Math.round(props.scrollPosition / windowWidth);
    // console.log(index);
    if (index >= 0 && index <= props.soundList.length - 1) {
      setActiveIndex(`${index}`);
      _categoryRow.current.scrollToIndex({
        animated: true,
        index: index,
        viewOffset: 0,
        viewPosition: 0.5,
      });
    }
  }, [props.scrollPosition]);

  return (
    <View style={localStyles.viewContainer}>
      <FlatList
        ref={_categoryRow}
        contentContainerStyle={{justifyContent: 'center'}}
        horizontal={true}
        initialScrollIndex={activeIndex}
        showsHorizontalScrollIndicator={false}
        onScrollToIndexFailed={(info) => {
          const wait = new Promise((resolve) => setTimeout(resolve, 500));
          wait.then(() => {
            _categoryRow.current?.scrollToIndex({
              index: info.index,
              animated: true,
            });
          });
        }}
        renderItem={({item}) => (
          <CategoryChip
            title={item.title}
            index={item.id}
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
            categoryRowRef={_categoryRow}
            carouselRef={props.carouselRef}
          />
        )}
        data={props.soundList}
        keyExtractor={(category) => category.id}
        style={localStyles.categoryRow}
      />
    </View>
  );
}

const localStyles = EStyleSheet.create({
  categoryRow: {
    height: '$screenHeight * 0.0470936',
    // marginBottom: '$vh * -1',
    width: '$screenWidth * 0.80266667',
    flexDirection: 'row',
  },
  viewContainer: {height: '$screenHeight * 0.0470936', marginTop: '$vh * 1'},
});
