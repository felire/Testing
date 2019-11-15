import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Reactotron from 'reactotron-react-native';
import SplashScreen from 'react-native-splash-screen';
import { apiSetup } from '@config/api';
import AppNavigator from '@components/AppNavigator';

const App = () => {
  const dispatch = useDispatch();
  
  useEffect(() => SplashScreen.hide(), []);
  useEffect(() => {
    apiSetup(dispatch);
  }, [dispatch]);

  return <AppNavigator />;
};

const MyAppWithOverlay = __DEV__ ? Reactotron.overlay(App) : App;

export default MyAppWithOverlay;
