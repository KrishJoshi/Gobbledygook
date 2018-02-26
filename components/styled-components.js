import {StyleSheet} from 'react-native';
import styled from 'styled-components/native';
import {hexToRGBA} from '../utils';

const colours = {
  dark: '#1A535C',
  light: '#4ECDC4',
  base: '#F7FFF7',
  bright: '#FF6B6B',
  plane: '#FFE66D'
};

const ContainerBackgroundStyles = {
  width: '100%',
  height: '100%'
};

const Heading = styled.Text`
    margin-bottom: 5%;
    fontFamily: 'lobster';
    font-size: 48;
    font-weight: bold;
    shadow-color: #4ECDC4;
    shadow-offset: 1px 3px;
    shadow-opacity: 0.3;
    shadow-radius: 0.5;
    color: ${colours.base}`;

const Container = styled.View`
    padding-top: 15%;
    flex: 1;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flexDirection: column;
`;

const RoundedBox = styled.View`
    margin-top: 25%;
    padding: 5%;
    background: ${hexToRGBA(colours.light, 0.8)};
    borderRadius: 10;
    width: 80%;
`;

const Quote = styled.Text`
    text-align: center;
    color: white;
`;

export {Heading, Container, Quote, RoundedBox, ContainerBackgroundStyles};
