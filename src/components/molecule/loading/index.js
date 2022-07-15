import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors} from '../../../utilities';

const loading = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size={'large'} color={colors.primary} />
      <Text style={styles.text}>Loading...</Text>
    </View>
  );
};

export default loading;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%',
    backgroundColor: colors.loading,
  },
  text: {
    fontSize: 18,
    color: colors.primary,
    fontWeight: '600',
    marginTop: 16,
  },
});
