
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Button,
  View,
  Text
} from 'react-native';


export default class ButtonReactNative extends Component {

    constructor(props) {
      super(props);
      this.state = {
        buttonColor: 'red' // default button color goes here
      };
    }

    changeButtonColor = () => {
        if(this.state.buttonColor === 'red'){
            this.setState({buttonColor: 'green'})
        }
        else{
            this.setState({buttonColor: 'red'})
        }
      }

  render() {
    return (
      <Button
           onPress={this.changeButtonColor}
           title="Click me"
           color={this.state.buttonColor}
           accessibilityLabel="Accessibility label"
           style={{width:120, height: 50}}
           disabled={false}
           testID="button"
        >
        </Button>
    );
  }
}

AppRegistry.registerComponent('TestButtonProps', () => ButtonReactNative)
