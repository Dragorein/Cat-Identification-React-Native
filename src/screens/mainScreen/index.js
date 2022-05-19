import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Alert,
  Image,
} from 'react-native';
import React from 'react';
import {Button, HorizontalLine} from '../../components';
import {colors} from '../../utilities';
import ImagePicker from 'react-native-image-picker';
import {catPlaceholder, dummyPicture} from '../../assets';

const getImageGallery = () => {
  ImagePicker.launchImageLibrary({}, imageGalleryData => {
    // console.log('response : ', imageGalleryData);
    Alert.alert('getImageGallery');
  });
};

const getImageCamera = () => {
  ImagePicker.launchCamera({}, imageCameraData => {
    // console.log('response : ', imageCameraData);
    Alert.alert('getImageCamera');
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
        <View>
          <Text style={styles.subtitle}>Masukkan Gambar Kucing</Text>
        </View>
        <View style={{paddingVertical: 30, justifyContent: 'center'}}>
          <View
            style={{
              backgroundColor: colors.placeholder,
              width: 300,
              height: 250,
              marginBottom: 20,
              marginLeft: 15,
              borderRadius: 10,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            {/* <Image
              source={catPlaceholder}
              style={{
                width: 300 / 3,
                height: 300 / 3,
              }}
            /> */}
            <Image
              source={dummyPicture}
              style={{
                backgroundColor: colors.placeholder,
                width: 300,
                height: 250,
                borderRadius: 10,
              }}
            />
          </View>
          <View
            style={{
              justifyContent: 'space-evenly',
              height: 100,
            }}>
            <Button label="Kamera" onPress={getImageCamera} />
            <Button label="galeri" onPress={getImageGallery} />
          </View>
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
  padder: {paddingVertical: 30},
  title: {fontSize: 35, color: colors.black, textAlign: 'center'},
  subtitle: {fontSize: 30, color: colors.black, textAlign: 'center'},
});
