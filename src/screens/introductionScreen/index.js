import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors} from '../../utilities';
import {Button, List} from '../../components';
import {IlLogoAi} from '../../assets/illustration';

const breed = [
  {id: 1, value: 'Abyssinian'},
  {id: 2, value: 'Bengal'},
  {id: 3, value: 'Birman'},
  {id: 4, value: 'Bombay'},
  {id: 5, value: 'British Shorthair'},
  {id: 6, value: 'Egyptian Mau'},
  {id: 7, value: 'Maine Coon'},
  {id: 8, value: 'Persian'},
  {id: 9, value: 'Ragdoll'},
  {id: 10, value: 'Russian Blue'},
  {id: 11, value: 'Siamese'},
  {id: 12, value: 'Sphynx'},
];

const IntroductionScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={{alignItems: 'center'}}>
        <IlLogoAi />
      </View>
      <View style={styles.padder}>
        <Text style={styles.text}>
          Aplikasi Ini merupakan aplikasi identifikasi ras kucing berdasarkan
          gambar atau foto, untuk saat ini aplikasi hanya bisa melakukan
          identifikasi 12 ras kucing domestik.
        </Text>
        <List data={breed} />
      </View>
      <View style={styles.padder}>
        <Button
          label="Mulai"
          onPress={() => navigation.replace('MainScreen')}
        />
      </View>
    </View>
  );
};

export default IntroductionScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1,
    justifyContent: 'space-evenly',
  },
  padder: {paddingHorizontal: 40},
  text: {color: colors.black, fontSize: 24},
});
