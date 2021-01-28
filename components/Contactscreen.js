import React, { Component } from 'react';
import { Button, View, Text,Image,StyleSheet } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
// import { WebView } from 'react-native-webview';

export default class ContactScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{color:"red",fontSize:25}}>Thủ đô An Thái</Text>
        <Image source={require('../assets/anthai.jpg')} style={styles.textStyle} title="Thủ đô An Thái"/>
        <Button onPress={() => this.props.navigation.navigate('Home')} title="Return Home" color="green"></Button>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  textStyle: {
    textAlign:'center',
    justifyContent:'center',
    margin:40,
    height:300,
    width:350
  }
});