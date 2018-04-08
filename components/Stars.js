import styled from 'styled-components'
import {Dimensions} from 'react-native';

import {Star} from './svg/Star';
import React from 'react'
import {View} from 'react-native';
import * as Animatable from 'react-native-animatable';


const STARS_DIMENSIONS = {width: 49, height: 26};
const SCREEN_DIMENSIONS = Dimensions.get('window');
const WIGGLE_ROOM = 50;

const Swinging = ({amplitude, rotation = 7, delay, duration = 700, children}) => (
  <Animatable.View
    animation={{
      0: {
        translateX: -amplitude,
        translateY: -amplitude * 0.8,
        rotate: `${rotation}deg`
      },
      0.5: {
        translateX: 0,
        translateY: 0,
        rotate: '0deg'
      },
      1: {
        translateX: amplitude,
        translateY: -amplitude * 0.8,
        rotate: `${-rotation}deg`
      }
    }}
    delay={delay}
    duration={duration}
    direction="alternate"
    easing="ease-in-out"
    iterationCount="infinite"
    useNativeDriver
  >
    {children}
  </Animatable.View>
);

const Falling = ({duration, delay, style, children}) => (
  <Animatable.View
    animation={{
      from: {translateY: -STARS_DIMENSIONS.height - WIGGLE_ROOM},
      to: {translateY: SCREEN_DIMENSIONS.height + WIGGLE_ROOM}
    }}
    duration={duration}
    delay={delay}
    easing={t => Math.pow(t, 1.7)}
    iterationCount="infinite"
    useNativeDriver
    style={style}
  >
    {children}
  </Animatable.View>
);


const Container = styled.View`
    position: absolute;
    top: 0;
`;

const randomize = max => Math.random() * max;

const range = count => {
  const array = [];
  for (let i = 0; i < count; i++) {
    array.push(i);
  }
  return array;
};

const Stars = ({count = 15, duration = 3000}) => (
  <Container>
    {range(count)
      .map(i => randomize(1000))
      .map((flipDelay, i) => (
        <Falling
          key={i}
          duration={duration}
          delay={i * (duration / count)}
          style={{
            position: 'absolute',
            paddingHorizontal: WIGGLE_ROOM,
            left: randomize(SCREEN_DIMENSIONS.width - STARS_DIMENSIONS.width) - WIGGLE_ROOM
          }}
        >
          <Swinging amplitude={STARS_DIMENSIONS.width / 5} delay={randomize(duration)}>
            <Star size={randomize(100)}/>
          </Swinging>
        </Falling>
      ))}
  </Container>
);


export default Stars;
