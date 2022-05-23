import {StyleSheet, View, Image} from 'react-native';
import React from 'react';
import {colors} from '../../../utilities';
import {catPlaceholder} from '../../../assets';

const ImagePlaceholder = () => {
  return (
    <View style={styles.container}>
      <Image source={catPlaceholder} style={styles.image} />
    </View>
  );
};

export default ImagePlaceholder;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.placeholder,
    width: 300,
    height: 250,
    marginBottom: 20,
    marginLeft: 15,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    backgroundColor: colors.placeholder,
    width: 300 / 3,
    height: 300 / 3,
    borderRadius: 10,
  },
});
