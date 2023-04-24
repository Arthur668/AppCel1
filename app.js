import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import Constants from 'expo-constants';
import myImage from './assets/expo.png'



export default function App() {
  return (
    <View style={styles.container}>
      <Image source={myImage} style={styles.expo1}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#0b0b0b',
  
  },
  expo1:{
  width:'80px',
  height:'80px',
  marginLeft:138
  }
});
