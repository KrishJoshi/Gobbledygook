import React from 'react';
import {Container, Heading, ContainerBackgroundStyles, Quote, RoundedBox} from './components/styled-components';
import {Font} from 'expo';
import {AnimatableCat} from './components/cat';
import background from './assets/background.png';
import {ImageBackground, StatusBar} from 'react-native';

export default class App extends React.Component {
  constructor() {
    super();
  }

  componentWillMount() {
    StatusBar.setBarStyle('light-content', true);
    this.setState({
      fontLoaded: false
    })
  }

  async componentDidMount() {
    await Font.loadAsync({
      'lobster': require('./assets/fonts/lobster.ttf')
    });
    this.setState({fontLoaded: true});
  }

  render() {
    return this.state.fontLoaded ? (
      <ImageBackground source={background} style={ContainerBackgroundStyles}>
        <Container>
          <Heading>Gobbledygook</Heading>
          <AnimatableCat animation="slideInDown" iterationCount={5} direction="alternate"/>
          <RoundedBox>
            <Quote>Shake your phone</Quote>
          </RoundedBox>
        </Container>
      </ImageBackground>
    ) : null;
  }
}
