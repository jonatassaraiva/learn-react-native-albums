import React from 'react';
import { View, Image, Text, Linking, StyleSheet } from 'react-native';

import Card from '../card';
import Section from '../section';
import Button from '../button';

const Datails = ({ album }) => {
  const { title, artist, thumbnail_image, image, url } = album;

  const handerButtonBuy = (url) => {
    return Linking.openURL(url);
  };

  return (
    <View>
      <Card>
        <Section>
          <View style={styles.thumbnailContainer}>
            <Image style={styles.thumbnail} source={{ uri: thumbnail_image }} />
          </View>
          <View style={styles.contentContainer}>
            <Text style={styles.contentHighlight}>{title}</Text>
            <Text>{artist}</Text>
          </View>
        </Section>

        <Section>
          <View style={styles.imageContainer}>
            <Image style={styles.image} source={{ uri: image }} />
          </View>
        </Section>

        <Section>
          <Button text="Buy" onPress={handerButtonBuy.bind(this, url)} />
        </Section>
      </Card>
    </View>
  );
};

Datails.propTypes = {
  album: React.PropTypes.object.isRequired
};

const styles = StyleSheet.create({
  thumbnailContainer: {
    marginLeft: 10,
    marginRight: 10,

    justifyContent: 'center',
    alignItems: 'center'
  },
  thumbnail: {
    height: 50,
    width: 50
  },
  contentContainer: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  contentHighlight: {
    fontSize: 18
  },

  imageContainer: {
    flex: 1
  },
  image: {
    height: 300
  }
});


export default Datails;