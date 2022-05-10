import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {IlLogoAi} from '../../assets';
import {colors} from '../../utilities';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('IntroductionScreen');
    }, 3000);
  }, []);

  return (
    <View style={styles.page}>
      <IlLogoAi />
      <Text style={styles.text}>Cat Breed Identification</Text>
    </View>
  );
};

export default SplashScreen;
const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.white,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  text: {
    fontSize: 20,
    fontWeight: '600',
    color: colors.black,
    marginTop: 20,
  },
});
