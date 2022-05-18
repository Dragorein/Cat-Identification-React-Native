import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {Button, HorizontalLine} from '../../components';
import {colors} from '../../utilities';
import ImagePicker from 'react-native-image-picker';

const getImageGallery = () => {
  ImagePicker.launchImageLibrary({}, imageGalleryData => {
    console.log('response : ', imageGalleryData);
  });
};

const getImageCamera = () => {
  ImagePicker.launchCamera({}, imageCameraData => {
    console.log('response : ', imageCameraData);
  });
};

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
          <View
            style={{
              backgroundColor: colors.placeholder,
              width: 300,
              height: 300,
              marginBottom: 20,
            }}></View>
          <Button label="Kamera" onPress={getImageCamera} />
          <Button label="galeri" onPress={getImageGallery} />
        </View>
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
