import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Button, HorizontalLine} from '../../components';
import {colors} from '../../utilities';

const MainScreen = ({navigation}) => {
  return (
    <View style={styles.page}>
      <View>
        <View style={styles.padder}>
          <Text style={styles.title}>Indentifikasi</Text>
          <Text style={styles.title}>Ras Kucing Domestik</Text>
        </View>
        <HorizontalLine />
        <View style={styles.padder}>
          <Text style={styles.subtitle}>Masukkan Gambar Kucing</Text>
        </View>
      </View>
      <Button
        label="Proses"
        onPress={() => {
          navigation.navigate('OutputScreen');
        }}
      />
    </View>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
  page: {flex: 1, paddingHorizontal: 30},
  padder: {paddingVertical: 50},
  title: {fontSize: 35, color: colors.black, textAlign: 'center'},
  subtitle: {fontSize: 30, color: colors.black, textAlign: 'center'},
});
