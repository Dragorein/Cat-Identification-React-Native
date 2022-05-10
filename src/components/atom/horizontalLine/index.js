import {StyleSheet, View} from 'react-native';
import React from 'react';
import {colors} from '../../../utilities';

const HorizontalLine = () => {
  return (
    <View
      style={{
        borderBottomColor: colors.placeholder,
        borderBottomWidth: 1,
      }}
    />
  );
};

export default HorizontalLine;

const styles = StyleSheet.create({});
