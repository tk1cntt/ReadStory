import React from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';

export const TrackList = props => {
  const { thumbnail, song, numberOfSongs } = props;
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Image style={styles.imageView} source={{ uri: thumbnail }} />
      </TouchableOpacity>
      <TouchableOpacity
        style={{ width: '70%' }}
        onPress={() => console.log('Play song', song)}
      >
        <Text style={styles.titleText}>{song ? song.title : ''}</Text>
        <Text style={styles.artistText}>{song ? song.artist : ''}</Text>
        <Text style={styles.artistText}>
          {numberOfSongs ? `${numberOfSongs} songs` : ''}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.breadCumsLayout}
        onPress={() => console.log('Open song model', song)}
      >
        <View style={styles.breadCums} />
        <View style={styles.breadCums} />
        <View style={styles.breadCums} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 70,
    width: Dimensions.get('window').width,
    flexDirection: 'row',
    borderColor: '#D8D8D8',
    alignItems: 'center',
  },
  imageView: {
    resizeMode: 'contain',
    height: 50,
    width: 50,
    marginLeft: 15,
    marginRight: 10,
  },
  titleText: {
    fontSize: 16,
    color: '#252525',
    paddingBottom: 5,
    flexWrap: 'wrap',
  },
  artistText: {
    fontSize: 14,
    color: '#252525',
    opacity: 0.5,
    flexWrap: 'wrap',
  },
  breadCumsLayout: {
    flexDirection: 'row',
    height: 70,
    alignItems: 'center',
  },
  breadCums: {
    width: 5,
    height: 5,
    backgroundColor: '#D8D8D8',
    marginRight: 3,
    borderRadius: 5,
  },
});
