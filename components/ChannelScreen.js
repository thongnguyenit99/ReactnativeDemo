import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { WebView } from 'react-native-webview';

export default class ChannelScreen extends Component {
    render() {
        return <WebView source={{ uri: 'https://www.youtube.com/mcjs99Official' }} />;
      }
}