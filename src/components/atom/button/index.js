import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors} from '../../../utilities';

const Button = ({label, labelSyle, containerStyle}) => {
  return (
    <View
      style={{
        backgroundColor: colors.primary,
        paddingVertical: 10,
        borderRadius: 10,
      }}>
      <Text
        style={{
          fontSize: 16,
          fontWeight: '600',
          textAlign: 'center',
          color: colors.white,
        }}>
        {label}
      </Text>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({});
