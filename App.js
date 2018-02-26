import React from 'react';
import {Container, Heading, ContainerBackgroundStyles, Quote, RoundedBox} from './components/styled-components';
import {Font} from 'expo';
import {AnimatableCat} from './components/cat';
import background from './assets/background.png';
import {ImageBackground, StatusBar, TouchableHighlight} from 'react-native';
import RNShakeEvent from 'react-native-shake-event';

export default class App extends React.Component {
  constructor() {
    super();
  }

  componentWillMount() {
    StatusBar.setBarStyle('light-content', true);
    this.setState({
      fontLoaded: false,
      shakeText: 'Shake your phone'
    });

    RNShakeEvent.addEventListener('shake', () => {
      this.setState({
        shakeText: 'Done!'
      })
    });
  }

  async componentDidMount() {
    await Font.loadAsync({
      'lobster': require('./assets/fonts/lobster.ttf')
    });
    this.setState({fontLoaded: true});
  }

  _onClick = () =>
    this.setState({
      shakeText: 'Done!'
    });


  render() {
    return this.state.fontLoaded ? (
      <ImageBackground source={background} style={ContainerBackgroundStyles}>
        <Container>
          <Heading>Gobbledygook</Heading>
          <AnimatableCat animation="slideInDown" iterationCount={5} direction="alternate"/>
          <TouchableHighlight onPress={this._onClick}>
            <RoundedBox>
              <Quote onClick={this._onClick}>{this.state.shakeText}</Quote>
            </RoundedBox>
          </TouchableHighlight>
        </Container>
      </ImageBackground>
    ) : null;
  }
}
