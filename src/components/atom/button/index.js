import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {colors} from '../../../utilities';

const Button = ({disable, label, labelSyle, containerStyle, onPress}) => {
  if (disable) {
    return (
      <View style={styles.disable}>
        <Text style={styles.label}>{label}</Text>
      </View>
    );
  }
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    paddingVertical: 10,
    borderRadius: 10,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
    color: colors.white,
  },
  disable: {
    backgroundColor: colors.placeholder,
    paddingVertical: 10,
    borderRadius: 10,
  },
});
