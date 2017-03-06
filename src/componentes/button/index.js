import React from 'react';
import { StyleSheet, Platform } from 'react-native';
import Render from './render';

const Button = (props) => {
  return (<Render text={props.text}
    onPress={props.onPress}
    buttomStyle={styles.button}
    textStyle={styles.text} />);
};

Button.propTypes = {
  text: React.PropTypes.string.isRequired,
  onPress: React.PropTypes.func.isRequired
};

const styles = StyleSheet.create({
  button: {
    flex: 1,
    alignSelf: 'stretch',
    marginLeft: 5,
    marginRight: 5,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#007aff',

    ...Platform.select({
      ios: {
        backgroundColor: '#fff',
      },
      android: {
        backgroundColor: '#007aff',
      },
    })
  },
  text: {
    alignSelf: 'center',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10,

    ...Platform.select({
      ios: {
        color: '#007aff',
      },
      android: {
        color: '#fff',
      },
    })
  }
});

export default Button;
