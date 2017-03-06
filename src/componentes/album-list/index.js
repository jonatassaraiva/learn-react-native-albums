import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';

import Details from './details';
import Spinner from '../spinner';


// Class component, used for dynamic sources of data.
// Handles any data that might change (fetching data, user event ...)
// Knows when it gets rendered to the device (useful for data fetching)
// More code to write
class AlbumList extends Component {

  constructor(props) {
    super(props);

    this.state = { albums: [], loading: true };
  }

  componentWillMount() {
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
      .then(res => {
        this.setState({
          albums: res.data,
          loading: false
        });
      });
  }

  renderAlbums() {
    return this.state.albums.map((album, index) => {
      return <Details key={`album-${album.title}`} album={album} />;
    });
  }

  render() {
    if (this.state.loading)
      return <Spinner size="large" />;

    return (
      <ScrollView>
        {this.renderAlbums()}
      </ScrollView>
    );
  }
}

export default AlbumList;