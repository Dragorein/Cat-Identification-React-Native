import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import React from 'react';
import {Button, HorizontalLine} from '../../components';
import {colors} from '../../utilities';
import {useDispatch, useSelector} from 'react-redux';

const OutputScreen = ({navigation}) => {
  const stateGlobal = useSelector(state => state);
  const dispatch = useDispatch();
  let confidence = stateGlobal.catAccuracy;
  confidence = confidence.toFixed(2);
  let information = stateGlobal.catInfo;
  let characteristic = stateGlobal.catChara;

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.page}>
          <View>
            <View style={styles.padder}>
              <Text style={styles.title}>{stateGlobal.catBreed}</Text>
            </View>
            <HorizontalLine />
            <View style={styles.hrPadder} />
          </View>
          <Image
            style={styles.imageContainer}
            source={{uri: `data:image/jpg;base64,${stateGlobal.base64Image}`}}
          />
          <View style={styles.padder}>
            <View style={styles.card}>
              <Text style={styles.text}>Keyakinan model :</Text>
              <Text style={styles.text}>{confidence} %</Text>
              <Text style={styles.text}>Karakteristik</Text>
              {characteristic.map((item, key) => (
                <Text key={key} style={styles.textInfo}>
                  {'\u2022'} {item}{' '}
                </Text>
              ))}
              <Text style={styles.text}>Informasi Penting</Text>
              {information.map((item, key) => (
                <Text key={key} style={styles.textInfo}>
                  {'\u2022'} {item}{' '}
                </Text>
              ))}
            </View>
            {/* pindah ke molecule sebagai card / content */}
          </View>
          <Button
            label="Back"
            onPress={() => {
              dispatch({type: 'SET_HASPHOTO', value: false});
              dispatch({type: 'SET_BASE64', value: 'base64Code'});
              dispatch({type: 'SET_CATBREED', value: 'catBreed'});
              dispatch({type: 'SET_CATACC', value: 0});
              dispatch({type: 'SET_CATINFO', value: []});
              dispatch({type: 'SET_CATCHARA', value: []});
              navigation.replace('MainScreen');
            }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default OutputScreen;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    paddingHorizontal: 30,
    marginBottom: 40,
  },
  padder: {
    paddingVertical: 30,
  },
  title: {
    fontSize: 35,
    color: colors.black,
    textAlign: 'center',
  },
  card: {
    backgroundColor: colors.light,
    shadowColor: colors.dark,
    flex: 1,
    paddingHorizontal: 30,
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
  hrPadder: {
    paddingBottom: 50,
  },
  text: {
    fontSize: 30,
    color: colors.black,
    textAlign: 'center',
    paddingBottom: 5,
  },
  textInfo: {
    fontSize: 15,
    color: colors.black,
    textAlign: 'justify',
    paddingBottom: 5,
  },
});
