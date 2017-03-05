import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

// Functional component, used for presenting static data, can't 
// handle fetching data and is easy to write
const Header = (props) => {
  return (
    <View style={styles.view}>
      <Text style={styles.text}>
        {props.text}
      </Text>
    </View>
  );
};

Header.propTypes = {
  text: React.PropTypes.string
};

const styles = StyleSheet.create({
  view: {
    backgroundColor: '#F8F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative'
  },
  text: {
    fontSize: 20
  },
});

export default Header;