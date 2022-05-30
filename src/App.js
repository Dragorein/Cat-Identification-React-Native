import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Introduction, Splash} from './screens';
import {NavigationContainer} from '@react-navigation/native';
import Router from './router';
import {Provider, useSelector} from 'react-redux';
import store from './redux/store/reducers/main';

const MainApp = () => {
  const stateGlobal = useSelector(state => state);
  return (
    <NavigationContainer>
      <Router />
    </NavigationContainer>
  );
};

const App = () => {
  return (
    <Provider store={store}>
      <MainApp />
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({});
