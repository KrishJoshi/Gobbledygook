import React from 'react'
import { Ionicons } from '@expo/vector-icons'

class Star extends React.Component {
  render() {
    return (
      <Ionicons name="md-star" size={this.props.size} color="white" />
    );
  }
}

export {Star};
