import React, {Component} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  
  SafeAreaView,
  Dimensions,
  FlatList,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';
import { Appearance } from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import nav from '../images/nav.png';
import search from '../images/search.png';
import shuffle from '../images/shuffle.png';

// const {width, height} = Dimensions.get('window');

const songs = [
  {
    title: 'Death Bed',
    artist: 'Powfu',
    artwork: 'https://samplesongs.netlify.app/album-arts/death-bed.jpg',
    url: 'https://samplesongs.netlify.app/Death%20Bed.mp3',
    id: '1',
  },
  {
    title: 'Bad Liar',
    artist: 'Imagine Dragons',
    artwork: 'https://samplesongs.netlify.app/album-arts/bad-liar.jpg',
    url: 'https://samplesongs.netlify.app/Bad%20Liar.mp3',
    id: '2',
  },
  {
    title: 'Faded',
    artist: 'Alan Walker',
    artwork: 'https://samplesongs.netlify.app/album-arts/faded.jpg',
    url: 'https://samplesongs.netlify.app/Faded.mp3',
    id: '3',
  },
  {
    title: 'Hate Me',
    artist: 'Ellie Goulding',
    artwork: 'https://samplesongs.netlify.app/album-arts/hate-me.jpg',
    url: 'https://samplesongs.netlify.app/Hate%20Me.mp3',
    id: '4',
  },
  {
    title: 'Solo',
    artist: 'Clean Bandit',
    artwork: 'https://samplesongs.netlify.app/album-arts/solo.jpg',
    url: 'https://samplesongs.netlify.app/Solo.mp3',
    id: '5',
  },
  {
    title: 'Without Me',
    artist: 'Halsey',
    artwork: 'https://samplesongs.netlify.app/album-arts/without-me.jpg',
    url: 'https://samplesongs.netlify.app/Without%20Me.mp3',
    id: '6',
  },
  {
    title: 'Death Bed',
    artist: 'Powfu',
    artwork: 'https://samplesongs.netlify.app/album-arts/death-bed.jpg',
    url: 'https://samplesongs.netlify.app/Death%20Bed.mp3',
    id: '7',
  },
  {
    title: 'Bad Liar',
    artist: 'Imagine Dragons',
    artwork: 'https://samplesongs.netlify.app/album-arts/bad-liar.jpg',
    url: 'https://samplesongs.netlify.app/Bad%20Liar.mp3',
    id: '8',
  },
  {
    title: 'Faded',
    artist: 'Alan Walker',
    artwork: 'https://samplesongs.netlify.app/album-arts/faded.jpg',
    url: 'https://samplesongs.netlify.app/Faded.mp3',
    id: '9',
  },
  {
    title: 'Hate Me',
    artist: 'Ellie Goulding',
    artwork: 'https://samplesongs.netlify.app/album-arts/hate-me.jpg',
    url: 'https://samplesongs.netlify.app/Hate%20Me.mp3',
    id: '10',
  },
  {
    title: 'Solo',
    artist: 'Clean Bandit',
    artwork: 'https://samplesongs.netlify.app/album-arts/solo.jpg',
    url: 'https://samplesongs.netlify.app/Solo.mp3',
    id: '11',
  },
  {
    title: 'Without Me',
    artist: 'Halsey',
    artwork: 'https://samplesongs.netlify.app/album-arts/without-me.jpg',
    url: 'https://samplesongs.netlify.app/Without%20Me.mp3',
    id: '12',
  },
];

interface Iprops {
  navigation?: any;
}

export class Music extends Component<Iprops> {
  state = {apperMode: Appearance.getColorScheme() === 'dark'};
  obj = {
    backgroundColor: this.state.apperMode ? Colors.darker : Colors.lighter,
  };

  render() {
    console.log(this.props.navigation);
    return (
      <SafeAreaView style={this.obj}>
        <View style={{padding: 10}}>
          <View style={style.container}>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                width: 160,
                justifyContent: 'space-between',
              }}>
              <Image source={nav} />
              <Text style={{fontSize: 20, fontWeight: '700', color: 'black'}}>
                Music player
              </Text>
            </View>
            <Image source={search} />
          </View>
          <View style={style.list}>
            <Text style={{color: 'black'}}>songs</Text>
            <Text style={{color: 'black'}}>Aritist</Text>
            <Text style={{color: 'black'}}>Playlist</Text>
            <Text style={{color: 'black'}}>Alubum</Text>
            <Text style={{color: 'black'}}>Floder</Text>
            <Image source={shuffle} />
            <Image source={nav} />
          </View>

          <FlatList
            data={songs}
            renderItem={({item}: {item: any}) => (
              <TouchableOpacity
                onPress={() => {
                  this.props.navigation.navigate('Music1', {...item});
                }}>
                <View style={style.songsList}>
                  <Image
                    style={{
                      width: 60,
                      height: 60,
                      borderRadius: 10,
                      marginRight: 15,
                    }}
                    source={{uri: `${item.artwork}`}}
                  />
                  <View>
                    <Text
                      style={{
                        fontSize: 20,
                        fontWeight: 'bold',
                        marginBottom: 10,
                        color: 'black',
                      }}>
                      {item.title}
                    </Text>
                    <Text style={{color: 'black'}}>{item.artist}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            )}
          />
        </View>
      </SafeAreaView>
    );
  }
}
const style = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  list: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 40,
  },
  songsList: {
    display: 'flex',
    flexDirection: 'row',
    margin: 10,
  },
});

export default Music;
