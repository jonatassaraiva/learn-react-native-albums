import React from 'react';
import { View, StyleSheet } from 'react-native';

const Section = (props) => {
  return (
    <View style={styles.view}>
      {props.children}
    </View>
  );
};

Section.propTypes = {
  children: React.PropTypes.any.isRequired
};

const styles = StyleSheet.create({
  view: {
    borderColor: '#ddd',
    borderBottomWidth: 1,

    padding: 5,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    position: 'relative'
  }
});

export default Section;