import React from 'react';
import { SafeAreaView, StyleSheet, Image } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Text, View } from '../../components/Themed';
import images from '../../components/AlbumThumbnails';
import { FlatList } from 'react-native-gesture-handler';

function Icon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}


function AlbumThumbnail(props: { name: string }) {
  const { name } = props;
  const imageSource = imageSources[name];

  return <Image source={imageSource} />;
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
      <FlatList 
      data = {images}
      renderItem={ ({item}) => <AlbumThumbnail thumbnail = {item} />}
      />
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
