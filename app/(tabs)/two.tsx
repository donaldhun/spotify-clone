import { StyleSheet, View, TextInput, Image } from 'react-native';
import React, { useState } from 'react';
import { Text } from '../../components/Themed';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { ScrollView } from 'react-native-gesture-handler';

function Icon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}


export default function TabTwoScreen() {
  const [text, setText] = useState('');

  const onChangeText = (inputText) => {
    setText(inputText);
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={{flexDirection:'row', justifyContent:'space-between'}}>
          <Text style={styles.header}>Search</Text>
          <Icon name="camera" color="white"></Icon>
        </View>

        <View style={[{borderRadius :8, backgroundColor: 'white',flexDirection :'row', justifyContent:'center', marginTop: 16,}]}>
          <Icon name="search" color="black" style={{paddingTop: 5, paddingLeft: 8}}></Icon>
          <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            value={text}
            placeholder="Type something..."
          />
        </View>
        <Text style={[styles.header,{ marginTop:40}]}>Explore your genres</Text>
        {/* images */}
      </View>
    </ScrollView>
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
  input: {
    height: 40,
    width: '90%',
    borderColor: 'white',
    borderWidth: 1,
    paddingHorizontal: 10,
    backgroundColor: 'white',
    borderRadius: 8,
    color: 'black',
  },
});
