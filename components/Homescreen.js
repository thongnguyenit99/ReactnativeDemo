import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

export default class Homescreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>THONG NGUYEN</Text>
        <Button
          title="Go to About"
          onPress={() => this.props.navigation.navigate('About')}
        />
        <Button
          title="Go to Contact" color="#841584"
          onPress={() => this.props.navigation.navigate('Contact')}
        />
        <Button
          title="Channel Youtube" color="#FF9933"
          onPress={() => this.props.navigation.navigate('Channel')}
        />
      </View>
    )
  }
}