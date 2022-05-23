import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Alert,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import {Button, HorizontalLine} from '../../components';
import {colors} from '../../utilities';
import ImagePicker from 'react-native-image-picker';
import {catPlaceholder} from '../../assets';
import axios from 'axios';

const MainScreen = ({navigation}) => {
  const [HasPhoto, setHasPhoto] = useState(false);
  const [Photo, setPhoto] = useState(catPlaceholder);
  const [PhotoData, setPhotoData] = useState();
  // console.log('---------------------------------------------');
  // console.log('initial hasPhoto: ', HasPhoto);
  // console.log('initial photo : ', Photo);
  // console.log('initial PhotoData : ', PhotoData);

  const getImageLocal = async () => {
    ImagePicker.launchImageLibrary({}, response => {
      const source = {uri: response.uri};
      if (source.uri === undefined) {
        Alert.alert('Oops', 'Sepertinya anda belum memilih foto');
      } else {
        setHasPhoto(true);
        setPhoto(source);
        setPhotoData(response.data);
      }
    });
  };

  const upload = async () => {
    return new Promise((resolve, reject) => {
      if (HasPhoto) {
        const dataUpload = new FormData();
        // console.log('PhotoData', PhotoData);
        dataUpload.append('images', PhotoData);
        console.log('dataUpload', dataUpload);
        const data = {
          image: PhotoData,
        };
        // dataUpload.append('image', {
        //   uri: response.uri,
        //   type: response.type,
        //   name: response.fileName,
        // });
        // console.log(dataUpload);
        const config = {
          method: 'POST',
          url: 'http://192.168.100.155:3000/upload',
          data,
        };
        // console.log(config);
        axios(config)
          .then(async feed => {
            console.log('feed ', feed.data);
            // Alert.alert('Success', feed.data);
            resolve(feed.data);
          })
          .catch(err => {
            console.log('err ', err);
            // Alert.alert('Failed', err);
            reject(err);
          });
      }
    });
  };

  const testConnection = async () => {
    return new Promise((resolve, reject) => {
      const config = {
        method: 'GET',
        url: 'http://192.168.100.155:3000/',
      };

      axios(config)
        .then(async feed => {
          console.log(feed.data);
          resolve(feed.data);
        })
        .catch(err => {
          console.log(err);
          reject(err);
        });
    });
  };

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
        <View style={{paddingVertical: 30, justifyContent: 'center'}}>
          {!HasPhoto && (
            <TouchableOpacity
              style={styles.imageContainer}
              onPress={getImageLocal}>
              <Image source={Photo} style={styles.imagePlaceholder} />
            </TouchableOpacity>
          )}
          {HasPhoto && (
            <TouchableOpacity
              style={styles.imageContainer}
              onPress={getImageLocal}>
              <Image source={Photo} style={styles.image} />
            </TouchableOpacity>
          )}
        </View>
      </View>
      {!HasPhoto && (
        <Button
          disable
          label="Proses"
          onPress={() => {
            navigation.navigate('OutputScreen');
          }}
        />
      )}
      {HasPhoto && (
        // <Button label="Proses" onPress={testConnection} />
        <Button label="Proses" onPress={upload} />
        // <Button
        //   label="Proses"
        //   onPress={() => {
        //     navigation.navigate('OutputScreen');
        //   }}
        // />
      )}
    </View>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
  page: {flex: 1, paddingHorizontal: 30},
  padder: {paddingVertical: 30},
  title: {fontSize: 35, color: colors.black, textAlign: 'center'},
  subtitle: {fontSize: 30, color: colors.black, textAlign: 'center'},
  imagePlaceholder: {
    width: 300 / 3,
    height: 300 / 3,
    borderRadius: 10,
  },
  imageContainer: {
    backgroundColor: colors.placeholder,
    width: 300,
    height: 300,
    marginBottom: 20,
    marginLeft: 15,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 300,
    height: 300,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
