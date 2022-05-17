import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Button, HorizontalLine} from '../../components';
import {colors} from '../../utilities';

const OutputScreen = ({navigation}) => {
  return (
    <View style={styles.page}>
      <View>
        <View style={styles.padder}>
          <Text style={styles.title}>[Ras Kucing Domestik]</Text>
        </View>
        <HorizontalLine />
      </View>
      {/* pindah ke molecule sebagai card / content */}
      <View style={styles.padder}>
        <View style={{backgroundColor: colors.light, shadowColor: colors.dark}}>
          <Text
            style={{fontSize: 30, color: colors.black, textAlign: 'center'}}>
            Informasi Perawatan
          </Text>
        </View>
        {/* pindah ke molecule sebagai card / content */}
      </View>
      <Button
        label="Back"
        onPress={() => {
          navigation.replace('MainScreen');
        }}
      />
    </View>
  );
};

export default OutputScreen;

const styles = StyleSheet.create({
  page: {flex: 1, paddingHorizontal: 30},
  padder: {paddingVertical: 50},
  title: {fontSize: 35, color: colors.black, textAlign: 'center'},
});
