import React, { Component } from 'react';
import { View } from 'react-native';
import Header from './componentes/header';
import AlbumList from './componentes/album-list';

class App extends Component {

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header text="Albums" />
        <AlbumList />
      </View>
    );
  }
}

export default App;