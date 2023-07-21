import React from 'react';
import { SafeAreaView, StyleSheet, Image } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Text, View } from '../../components/Themed';

function Icon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

const imageSources = {
  virus: require('../../assets/images/albums/virus.png'),
  nightmare: require('../../assets/images/albums/nightmare.png'),
  awaken: require('../../assets/images/albums/awaken.png'),
  the_mountain: require('../../assets/images/albums/the_mountain.png'),
  the_stage: require('../../assets/images/albums/the_stage.png'),
  vector: require('../../assets/images/albums/vector.png'),
};

function AlbumThumbnail(props: { name: string }) {
  const { name } = props;
  const imageSource = imageSources[name];

  return <Image source={imageSource} style={{ width: 75, height: 75, borderBottomLeftRadius:5,borderTopLeftRadius:5 }}/>;
}

export default function TabOneScreen() {
  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Text style={styles.header}>Good afternoon</Text>
        
        <View style={{ flexDirection: 'row', marginLeft: 20 }}>
          {/* Add marginLeft to create space between icons */}
          <Icon name="bell" color="white" />
          <Icon name="history" color="white" style={{ marginLeft: 20 }} />
          <Icon name="gear" color="white" style={{ marginLeft: 20 }} />
        </View>
      </View>

      {/* Header bubbles  */}
      <View style={{ flexDirection: 'row', height: 30, marginTop: 25, alignContent: 'center' }}>
        <View style={styles.headerBubble}>
          <Text style={{ color: 'white', padding: 7 }}>Music</Text>
        </View>
        <View style={styles.headerBubble}>
          <Text style={{ color: 'white', padding: 7}}>Podcasts & Shows</Text>
        </View>
        <View style={styles.headerBubble}>
          <Text style={{ color: 'white', padding: 7}}>Audiobooks</Text>
        </View>
      </View>

      {/* Suggested playlists/albums */}
      <View style = {{backgroundColor: 'rgb(54, 135, 54)', width: "100%", }}>

        <View style = {{ flexDirection:'row',justifyContent: 'space-between',marginBottom: 20}}>
          <View style={{backgroundColor: 'rgb(31, 31, 31)', borderRadius: 5, flexDirection: 'row', width: 175, alignItems: 'center'}}>
            <AlbumThumbnail name="the_stage"/>
            <Text style={{fontWeight:'bold', marginLeft: 8}}>A7x</Text>
          </View>

          <View style={{backgroundColor: 'rgb(31, 31, 31)', borderRadius: 5, flexDirection: 'row', width: 175, alignItems: 'center'}}>
            <AlbumThumbnail name="virus"/>
            <Text style={{fontWeight:'bold', marginLeft: 8}}>Virus</Text>
          </View>
        </View>

        <View style = {{ flexDirection:'row',justifyContent: 'space-between', marginBottom: 20}}>
          <View style={{backgroundColor: 'rgb(31, 31, 31)', borderRadius: 5, flexDirection: 'row', width: 175, alignItems: 'center'}}>
            <AlbumThumbnail name="the_stage"/>
            <Text style={{fontWeight:'bold', marginLeft: 8}}>A7x</Text>
          </View>

          <View style={{backgroundColor: 'rgb(31, 31, 31)', borderRadius: 5, flexDirection: 'row', width: 175, alignItems: 'center'}}>
            <AlbumThumbnail name="virus"/>
            <Text style={{fontWeight:'bold', marginLeft: 8}}>Virus</Text>
          </View>
        </View>

        

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 92,
    flex: 1,
    margin: 15,
  },
  header: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  headerBubble: {
    backgroundColor: 'rgb(31, 31, 31)',
    borderRadius: 20,
    paddingHorizontal: 10,
    marginRight: 7,
    height: 32,
  },
});
