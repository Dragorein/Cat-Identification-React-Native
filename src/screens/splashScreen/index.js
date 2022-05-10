import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {IlLogoAi} from '../../assets';
import {colors} from '../../utilities';

const Splash = () => {
  return (
    <View style={styles.page}>
      <IlLogoAi />
      <Text style={styles.text}>Cat Breed Identification</Text>
    </View>
  );
};

export default Splash;
const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.light,
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
