import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
  ToastAndroid,
  Platform,
  AlertIOS,
  TextInput,
  ScrollView,
  AsyncStorage,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Modal from 'react-native-modal';
let { width, height } = Dimensions.get('window');

class MyPlaylist extends Component {
  render() {
    const { closeModal, showPlaylists, playlistName } = this.props;
    return (
      <View style={{ height: 250 }}>
        <LinearGradient
          colors={['#7AFFA0', '#62D8FF']}
          style={{
            width: '60%',
            height: 40,
            alignItems: 'center',
            marginLeft: '20%',
            marginTop: 15,
            justifyContent: 'center',
            borderRadius: 10,
            backgroundColor: '#f4f4f4',
            marginBottom: 15,
          }}
        >
          <TouchableOpacity onPress={() => createPlaylist()}>
            <Text style={{ fontSize: 16, color: '#4A4A4A' }}>New Playlist</Text>
          </TouchableOpacity>
        </LinearGradient>
        <ScrollView>
          {playlistName &&
            playlistName.map((name, index) => {
              return (
                <TouchableOpacity
                  key={name + index}
                  style={styles.selectView}
                  onPress={() => addToPlaylist(name)}
                  style={{ marginLeft: 10 }}
                >
                  <Text style={styles.TextStylePlaylist}>{name}</Text>
                </TouchableOpacity>
              );
            })}
        </ScrollView>
      </View>
    );
  }
}

class CreatePlaylist extends Component {
  render() {
    const { closeModal, showPlaylists } = this.props;
    return (
      <View style={styles.addPlaylist}>
        <View
          style={{
            alignItems: 'center',
            height: 150,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Text style={styles.playlistHeading}>Create a new Playlist</Text>
          <Text style={styles.subheading}>
            Enter the name for this Playlist
          </Text>
          <TextInput
            style={styles.playlistInput}
            underlineColorAndroid={'transparent'}
            onChangeText={text => this.setState({ newPlaylistName: text })}
          />
        </View>
        <LinearGradient
          colors={['#7AFFA0', '#62D8FF']}
          style={{
            display: 'flex',
            flexDirection: 'row',
            backgroundColor: '#000',
            alignItems: 'center',
            height: 50,
            borderBottomLeftRadius: 8,
            borderBottomRightRadius: 8,
          }}
        >
          <TouchableOpacity
            style={styles.optionOverview}
            onPress={() => closeModal('addPlaylist')}
          >
            <Text style={styles.optionButton}>CANCEL</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.optionOverview2}
            onPress={() =>
              this.state.newPlaylistName
                ? addNewPlaylist(playlistName, this.state.newPlaylistName)
                : {}
            }
          >
            <Text style={styles.optionButton}>CREATE</Text>
          </TouchableOpacity>
        </LinearGradient>
      </View>
    );
  }
}

class PlaylistMenu extends Component {
  render() {
    const { closeModal, showPlaylists } = this.props;
    return (
      <View>
        <TouchableOpacity
          style={styles.selectView}
          onPress={() => showPlaylists()}
        >
          <Image
            source={require('../Images/add-to-playlist.png')}
            style={{
              resizeMode: 'contain',
              height: 20,
              width: 20,
              marginLeft: 15,
            }}
          />
          <Text style={styles.TextStyle}>Add to Playlist</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.selectView}>
          <Image
            source={require('../Images/wrong-song.png')}
            style={{
              resizeMode: 'contain',
              height: 20,
              width: 20,
              marginLeft: 15,
            }}
          />
          <Text style={styles.TextStyle}>Wrong song?</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.selectView}
          onPress={() => console.log('Go to search')}
        >
          <Image
            source={require('../Images/search.png')}
            style={{
              resizeMode: 'contain',
              height: 20,
              width: 20,
              marginLeft: 15,
            }}
          />
          <Text style={styles.TextStyle}>Search Artist</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.cancelView}
          onPress={() => closeModal()}
        >
          <Image
            source={require('../Images/cancel.png')}
            style={{
              resizeMode: 'contain',
              height: 10,
              width: 10,
              marginLeft: 20,
            }}
          />
          <Text style={styles.TextStyle}>Cancel</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

class PlaylistModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newPlaylistName: '',
    };
  }

  render() {
    const {
      active,
      playlistName,
      createPlaylist,
      addNewPlaylist,
      addToPlaylist,
      closeModal,
      viewPlaylists,
      addPlaylistModal,
      showPlaylists,
      name,
      songs,
    } = this.props;
    return (
      <View>
        <Modal
          isVisible={active}
          onBackButtonPress={() => closeModal()}
          onBackdropPress={() => closeModal()}
        >
          <View
            style={{
              flex: 1,
              justifyContent: addPlaylistModal ? 'center' : 'flex-end',
            }}
          >
            <View style={styles.modalView}>
              {viewPlaylists ? (
                <MyPlaylist
                  closeModal={closeModal}
                  showPlaylists={showPlaylists}
                  name={name}
                  playlistName={playlistName}
                />
              ) : addPlaylistModal ? (
                <CreatePlaylist closeModal={closeModal} />
              ) : (
                <PlaylistMenu
                  showPlaylists={showPlaylists}
                  closeModal={closeModal}
                />
              )}
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}
export default PlaylistModal;

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  modalView: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    height: 250,
  },
  selectView: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
  },
  cancelView: {
    height: 50,
    borderTopWidth: 1,
    borderColor: '#D8D8D8',
    flexDirection: 'row',
    alignItems: 'center',
  },
  TextStyle: {
    paddingLeft: 10,
    color: '#4B4B4B',
    fontSize: 14,
  },
  optionOverview: {
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    borderRightWidth: 1,
    borderColor: '#FFFFFF',
    height: 50,
    justifyContent: 'center',
  },
  optionOverview2: {
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    height: 50,
    justifyContent: 'center',
  },
  subheading: {
    fontSize: 16,
    marginBottom: 10,
    color: '#919191',
  },
  optionButton: {
    fontSize: 16,
    color: '#FFFFFF',
  },
  optionButtonCreate: {
    fontSize: 16,
    color: '#6DEAD3',
  },
  playlistInput: {
    width: 300,
    height: 40,
    backgroundColor: '#F7F7F7',
    borderColor: '#EBEBEB',
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 15,
  },
  playlistHeading: {
    fontSize: 18,
    marginBottom: 10,
    color: '#1C1C1C',
  },
  addPlaylist: {
    backgroundColor: 'white',
    height: 200,
    borderRadius: 8,
    display: 'flex',
    justifyContent: 'center',
  },
  closeIcon: {
    resizeMode: 'contain',
    height: 10,
    width: 10,
    marginLeft: 20,
    marginRight: 5,
  },
  icons: {
    resizeMode: 'contain',
    height: 20,
    width: 20,
    marginLeft: 15,
  },
  createPlaylist: {
    width: '50%',
    height: 35,
    alignItems: 'center',
    marginLeft: '25%',
    marginTop: 15,
    justifyContent: 'center',
    borderRadius: 10,
    backgroundColor: '#f4f4f4',
    marginBottom: 15,
  },
  modalView: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    maxHeight: 300,
  },
  selectView: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
  },
  cancelView: {
    height: 50,
    borderTopWidth: 1,
    borderColor: '#D8D8D8',
    flexDirection: 'row',
    alignItems: 'center',
  },
  TextStyle: {
    paddingLeft: 15,
    color: '#2B2B2B',
    fontSize: 15,
  },
  TextStylePlaylist: {
    paddingLeft: 15,
    color: '#2B2B2B',
    fontSize: 17,
    marginBottom: 7,
  },
  PlayTextStyle: {
    paddingLeft: 15,
    color: '#2B2B2B',
    fontSize: 15,
    margin: 5,
  },
});
