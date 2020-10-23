import Platform from 'react-native';

let Sound = require('react-native-sound');
Sound.setCategory('Playback');

function setSound(soundString) {
  // if (Platform.OS !== 'ios') {
  //   return new Sound(
  //     soundString,
  //     encodeURIComponent(Sound.MAIN_BUNDLE),
  //     (error) => {
  //       if (error) {
  //         console.log(`failed to load ${soundString}`, error);
  //         return;
  //       }
  //     },
  //   );
  // } else {
  return new Sound(soundString, Sound.MAIN_BUNDLE, (error) => {
    if (error) {
      console.log(`failed to load ${soundString}`, error);
      return;
    }
  });
  // }
}

// singular ios: ca-app-pub-5686363028654312/8412091929
// singular android: ca-app-pub-5686363028654312/3792521763
// interstitial ios: ca-app-pub-5686363028654312/8518412448
// interstitial android: ca-app-pub-5686363028654312/6418685105

let fn1 = setSound('bangemgetemrusty.mp3');
let fn2 = setSound('basement.mp3');
let fn3 = setSound('bigstick.mp3');
let fn4 = setSound('closetherazor.mp3');

let fn5 = setSound('comehereman.mp3');
let fn6 = setSound('comeonman.mp3');
let fn7 = setSound('confusing.mp3');
let fn8 = setSound('cornpop.mp3');

let fn9 = setSound('dontcomeback.mp3');
let fn10 = setSound('goodevening.mp3');
let fn11 = setSound('hairylegs.mp3');
let fn12 = setSound('iapologize.mp3');
let fn13 = setSound('imreallysorry.mp3');
let fn14 = setSound('iwassmart.mp3');
let fn15 = setSound('kiddingme.mp3');
let fn16 = setSound('lap.mp3');

let fn17 = setSound('lookfat.mp3');
let fn18 = setSound('lookingforward.mp3');
let fn19 = setSound('notgoingnuts.mp3');
let fn20 = setSound('ponysoldier.mp3');
let fn21 = setSound('poorkids.mp3');
let fn22 = setSound('pushups.mp3');
let fn23 = setSound('rubmyleg.mp3');
let fn24 = setSound('selfevident.mp3');
let fn25 = setSound('totallylegitimate.mp3');
let fn26 = setSound('truthoverfacts.mp3');
let fn27 = setSound('willyoushutup.mp3');
let fn28 = setSound('wordsstraight.mp3');
let fn29 = setSound('wrapthischain.mp3');
let fn30 = setSound('youknowthething.mp3');

const tracks1 = [
  {
    id: '0',
    sound: fn1,
    title: 'Bang em on the curb',
  },
  {
    id: '1',
    sound: fn2,
    title: 'Come to the basement',
  },
  {id: '2', sound: fn3, title: 'A big stick'},
  {
    id: '3',
    sound: fn4,
    title: 'Okaaayy, close the straight razor',
  },
  {id: '5', sound: fn5, title: 'Come here, man'},
  {id: '6', sound: fn6, title: 'Come on, man'},
];

const tracks2 = [
  {id: '7', sound: fn7, title: 'A little bit confusing'},
  {id: '8', sound: fn8, title: 'Corn pop was a bad dude'},
  {id: '10', sound: fn9, title: "Don't come back"},
  {id: '11', sound: fn10, title: 'Good evening'},
  {id: '12', sound: fn11, title: 'I got hairy legs'},
  {id: '13', sound: fn12, title: 'I apologize for that'},
];

const tracks3 = [
  {id: '14', sound: fn13, title: "I'm really sorry"},
  {id: '15', sound: fn14, title: 'I was smart... then'},
  {id: '16', sound: fn15, title: "You're kiddin' me"},
  {id: '17', sound: fn16, title: "Kids jumpin' on my lap"},
  {id: '18', sound: fn17, title: 'Look, fat, look...'},
  {id: '19', sound: fn18, title: "I'm lookin' forward to this"},
];

const tracks4 = [
  {id: '20', sound: fn19, title: "I'm not going nuts"},
  {id: '21', sound: fn20, title: 'Dog-faced pony soldier'},
  {id: '22', sound: fn21, title: 'Poor vs. white'},
  {id: '23', sound: fn22, title: "Let's do pushups"},
  {id: '24', sound: fn23, title: 'Rub my leg down'},
  {id: '25', sound: fn24, title: 'Self evident'},
];

const tracks5 = [
  {id: '26', sound: fn25, title: 'Totally legitimate'},
  {id: '27', sound: fn26, title: 'Truth over facts'},
  {id: '28', sound: fn27, title: 'Will you shut up, man'},
  {id: '29', sound: fn28, title: 'Get your words straight, jack'},
  {id: '30', sound: fn29, title: 'Wrap this chain around your head'},
  {id: '31', sound: fn30, title: 'You know the thing'},
];

const banners =
  Platform.OS === 'ios'
    ? ['', 'ca-app-pub-5686363028654312/9422977183']
    : ['', 'ca-app-pub-5686363028654312/8588230053'];

export const mock = {
  boardTitle: 'Biden',
  pictureLocation:
    'https://spectator.us/wp-content/uploads/2020/08/GettyImages-1227830570.jpg',
  adKeywords: [
    'senate judiciary committee members',
    'sylvia allen',
    'flavier',
    'sara gideon',
    'senators up for reelection in 2020',
  ],
  bannerAdID:
    Platform.OS === 'ios'
      ? 'ca-app-pub-5686363028654312/8412091929'
      : 'ca-app-pub-5686363028654312/3792521763',
  unlockSoundAdID:
    Platform.OS === 'ios'
      ? 'ca-app-pub-5686363028654312/8518412448'
      : 'ca-app-pub-5686363028654312/6418685105',
  soundCategories: [
    {
      id: '0',
      title: 'Page 1',
      sounds: tracks1,
      adID:
        Platform.OS === 'ios'
          ? 'ca-app-pub-5686363028654312/4728876092'
          : 'ca-app-pub-5686363028654312/3224222733',
    },
    {
      id: '1',
      title: 'Page 2',
      sounds: tracks2,
      adID:
        Platform.OS === 'ios'
          ? 'ca-app-pub-5686363028654312/9789631082'
          : 'ca-app-pub-5686363028654312/5457819620',
    },
    {
      id: '2',
      title: 'Page 3',
      sounds: tracks3,
      adID:
        Platform.OS === 'ios'
          ? 'ca-app-pub-5686363028654312/8476549419'
          : 'ca-app-pub-5686363028654312/8109895510',
    },
    {
      id: '3',
      title: 'Page 4',
      sounds: tracks4,
      adID:
        Platform.OS === 'ios'
          ? 'ca-app-pub-5686363028654312/7163467743'
          : 'ca-app-pub-5686363028654312/2214393398',
    },
    {
      id: '4',
      title: 'Page 5',
      sounds: tracks5,
      adID:
        Platform.OS === 'ios'
          ? 'ca-app-pub-5686363028654312/4537304403'
          : 'ca-app-pub-5686363028654312/9901311728',
    },
    // {
    //   id: '5',
    //   title: 'Fight',
    //   sounds: tracks5,
    //   adID:
    //     Platform.OS === 'ios'
    //       ? 'ca-app-pub-5686363028654312/4537304403'
    //       : 'ca-app-pub-5686363028654312/9901311728',
    // },
    // {
    //   id: '6',
    //   title: 'Classics',
    //   sounds: tracks5,
    //   adID:
    //     Platform.OS === 'ios'
    //       ? 'ca-app-pub-5686363028654312/4903285854'
    //       : 'ca-app-pub-5686363028654312/9901311728',
    // },
    // {
    //   id: '0',
    //   title: 'Hello',
    //   sounds: [sound, sound, sound, sound, sound, sound, sound, sound],
    // },
    // {
    //   id: '1',
    //   title: 'Statement',
    //   sounds: [sound, sound, sound, sound, sound, sound, sound, sound],
    // },
    // {
    //   id: '2',
    //   title: 'Agree',
    //   sounds: [sound, sound, sound, sound, sound, sound, sound, sound],
    // },
    // {
    //   id: '3',
    //   title: 'Disagree',
    //   sounds: [sound, sound, sound, sound, sound, sound, sound, sound],
    // },
    // {
    //   id: '4',
    //   title: 'Goodbye',
    //   sounds: [sound, sound, sound, sound, sound, sound, sound, sound],
    // },
    // {
    //   id: '5',
    //   title: 'Goodbye',
    //   sounds: [sound, sound, sound, sound, sound, sound, sound, sound],
    // },
    // {
    //   id: '6',
    //   title: 'Goodbye',
    //   sounds: [sound, sound, sound, sound, sound, sound, sound, sound],
    // },
  ],
};
