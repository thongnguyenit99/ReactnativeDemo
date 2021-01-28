import React, { Component } from 'react';
import { Button, View, Text,Image,StyleSheet } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
// import { WebView } from 'react-native-webview';

export default class Aboutscreen extends Component {
  render() {
    const onPress=()=>{ alert('Test demo creen About!')};
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{color:"blue",fontSize:25}}>THONG BO CHON </Text>
        <Image source={require('../assets/caugay.jpg')} style={styles.textStyle} title="Cầu Gãy Phú Giáo"/>
      <Button onPress={onPress} title="click me"></Button>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  textStyle: {
    color:'#990000',
    fontSize:25,
    textAlign:'center',
    justifyContent:'center',
    margin:40,
    height:300,
    width:350
  }
});