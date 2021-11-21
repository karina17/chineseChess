import * as React from 'react';
import { Dimensions, ImageBackground, StyleSheet, TouchableOpacity, View } from 'react-native';
import Grid from '../components/Grid';
import { RootTabScreenProps } from '../types';

const { width } = Dimensions.get("window");

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  return (
    <View style={styles.container}>
      <ImageBackground source={require('../assets/images/board.png')} resizeMode="stretch" style={styles.image}>
        <Grid/>
      </ImageBackground>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width,
    height: width,
  },
  image: {
    height: '100%',
    width: '100%'
  },
  text: {
    color: "white",
    fontSize: 42,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000c0"
  }, 
  topPieces: {
    top: 0
  }
  
});
