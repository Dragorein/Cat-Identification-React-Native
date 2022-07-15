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
import Services from '../../services';
import {useDispatch, useSelector} from 'react-redux';

const MainScreen = ({navigation}) => {
  const [Photo, setPhoto] = useState(catPlaceholder);
  const [PhotoData, setPhotoData] = useState();
  const stateGlobal = useSelector(state => state);
  const dispatch = useDispatch();

  const getImageLocal = async () => {
    ImagePicker.launchImageLibrary({}, response => {
      const source = {uri: response.uri};
      if (source.uri === undefined) {
        Alert.alert('Oops', 'Sepertinya anda belum memilih foto');
      } else {
        dispatch({type: 'SET_HASPHOTO', value: true});
        setPhoto(source);
        setPhotoData(response.data);
      }
    });
  };

  const upload = async () => {
    if (stateGlobal.HasPhoto) {
      const data = {
        image: PhotoData,
      };
      dispatch({type: 'SET_LOADING', value: true});
      await Services.Post('predict', data)
        .then(resultData => {
          dispatch({type: 'SET_LOADING', value: false});
          dispatch({type: 'SET_BASE64', value: resultData.imageBase64});
          dispatch({type: 'SET_CATBREED', value: resultData.predictionBreed});
          dispatch({type: 'SET_CATACC', value: resultData.predictionAccuracy});
          dispatch({type: 'SET_CATINFO', value: resultData.information});
          dispatch({type: 'SET_CATCHARA', value: resultData.characteristic});
          navigation.navigate('OutputScreen');
        })
        .catch(err => {
          dispatch({type: 'SET_LOADING', value: false});
          Alert.alert(err.message);
        });
    }
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
        <View style={styles.imageContainer}>
          {!stateGlobal.HasPhoto && (
            <TouchableOpacity
              style={styles.imageContent}
              onPress={getImageLocal}>
              <Image source={Photo} style={styles.imagePlaceholder} />
            </TouchableOpacity>
          )}
          {stateGlobal.HasPhoto && (
            <TouchableOpacity
              style={styles.imageContent}
              onPress={getImageLocal}>
              <Image source={Photo} style={styles.image} />
            </TouchableOpacity>
          )}
        </View>
      </View>
      {!stateGlobal.HasPhoto && (
        <Button
          disable
          label="Proses"
          onPress={() => {
            navigation.navigate('OutputScreen');
          }}
        />
      )}
      {stateGlobal.HasPhoto && <Button label="Proses" onPress={upload} />}
    </View>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    paddingHorizontal: 30,
  },
  padder: {
    paddingVertical: 30,
  },
  title: {
    fontSize: 35,
    color: colors.black,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 30,
    color: colors.black,
    textAlign: 'center',
  },
  imagePlaceholder: {
    width: 300 / 3,
    height: 300 / 3,
    borderRadius: 10,
  },
  imageContainer: {
    paddingVertical: 30,
    justifyContent: 'center',
  },
  imageContent: {
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
