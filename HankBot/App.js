import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button } from 'react-native';
import { Account, NetworkType } from 'nem2-sdk';


const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' + 'Shake or press menu button for dev menu',
});

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>
        <Button onPress={aggregate} title="Learn More" color="#841584" accessibilityLabel="Learn more about this purple button" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

function aggregate() {
  const acct = Account.generateNewAccount(NetworkType.MIJIN_TEST);
  alert(acct.publicKey);
}
/*
function checkvalidity(hashstring)
{
    const request = require('request');
    var url = node + '/transaction/' + hashstring + '/status';
    console.log(url);
    request(url, function (error, response, body) {
        const user = JSON.parse(body);
        if ( (response && response.statusCode) == 200 || user["status"] == "Success") {
            console.log("Transaction Success!");
        }
        else{
            console.log("Transaction failed");
        }
    });
}
*/