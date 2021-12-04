import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native';
import PetSaleScreen from './PetSaleScreen';
import PetStyling from './PetStyling';



export default class App extends Component {
  render() {
    return (
      <View style ={styles.container}>
        <PetSaleScreen/>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    marginTop:100,
  },
});
