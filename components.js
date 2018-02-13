import {StyleSheet} from 'react-native';
import styled from 'styled-components/native';
import {hexToRGBA} from './utils';
import * as Animatable from 'react-native-animatable';

const colours = {
  dark: '#1A535C',
  light: '#4ECDC4',
  base: '#F7FFF7',
  bright: '#FF6B6B',
  plane: '#FFE66D'
};

const Heading = styled.Text`
    padding-top: 10%;
    fontFamily: 'lobster';
    font-size: 48;
    font-weight: bold;
    shadow-color: #4ECDC4;
    shadow-offset: 1px 3px;
    shadow-opacity: 0.3;
    shadow-radius: 0.5;
    color: ${colours.base}`;

const Container = styled.View`
    flex: 1;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flexDirection: column;
    background-color: ${colours.dark};`;

const RoundedBox = styled.View`
    margin-top: 15%;
    padding: 20px;
    background: ${hexToRGBA(colours.light, 0.8)};
    borderRadius: 10;
    width: 80%;
    height: 60%;
`;

const AnimatableRoundedBox = Animatable.createAnimatableComponent(RoundedBox);


const Quote = styled.Text`
    text-align: center;
    color: white;
`;

export {Heading, Container, Quote, RoundedBox, AnimatableRoundedBox};
