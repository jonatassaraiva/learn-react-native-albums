import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

const Render = (props) => {
  return (
    <TouchableOpacity style={props.buttomStyle} onPress={props.onPress}>
      <Text style={props.textStyle}>
        {props.text}
      </Text>
    </TouchableOpacity>
  );
};

export default Render;
