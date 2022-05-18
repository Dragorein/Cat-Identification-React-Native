import {PixelRatio} from 'react-native';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';

const wp = val => {
  return widthPercentageToDP(val);
};

const hp = val => {
  return heightPercentageToDP(val);
};

const fontNormalize = val => {
  return size / PixelRatio.getFontScale();
};

export {wp, hp, fontNormalize};
