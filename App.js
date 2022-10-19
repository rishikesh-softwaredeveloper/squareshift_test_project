import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import Navigation from './src/navigations';
import { Provider } from 'react-redux';
import { store } from './src/state/store';


export default function App() {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}

