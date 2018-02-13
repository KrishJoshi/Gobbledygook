import React from 'react';
import {Container, Heading, Quote, AnimatableRoundedBox} from './components';
import {Font} from 'expo';
import {StatusBar} from 'react-native';

export default class App extends React.Component {
  constructor() {
    super();
    StatusBar.setBarStyle('light-content', true);
    this.state = {
      fontLoaded: false
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      'lobster': require('./assets/fonts/lobster.ttf')
    });
    this.setState({fontLoaded: true});
  }

  render() {
    return this.state.fontLoaded ? (
      <Container>
        <Heading>Cookies</Heading>
        <AnimatableRoundedBox animation="bounce" easing="ease-in-out" iterationCount="infinite">
          <Quote>Shake phone for a quote</Quote>
        </AnimatableRoundedBox>
      </Container>
    ) : null;
  }
}
