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

const Introduction = () => {
  return (
    <View
      style={{
        backgroundColor: colors.accent,
        flex: 1,
        justifyContent: 'space-evenly',
      }}>
      <View style={{alignItems: 'center'}}>
        <IlLogoAi />
      </View>
      <View style={{paddingHorizontal: 40}}>
        <Text style={{color: colors.black, fontSize: 24}}>
          Aplikasi Ini merupakan aplikasi identifikasi ras kucing berdasarkan
          gambar atau foto, untuk saat ini aplikasi hanya bisa melakukan
          identifikasi 12 ras kucing domestik.
        </Text>
        <List data={breed} />
      </View>
      <View style={{paddingHorizontal: 40}}>
        <Button label="Mulai" />
      </View>
    </View>
  );
};

export default Introduction;

const styles = StyleSheet.create({});
