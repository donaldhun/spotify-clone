import React from 'react';
import { StyleSheet, Image } from 'react-native';
import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';
import FontAwesome from '@expo/vector-icons/FontAwesome';

function Icon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Text style={styles.header}>Good afternoon</Text>
        
        <View style={{flexDirection: 'row'}}>
          
          <Icon name="bell" color="white"></Icon>
          <Icon name="gear" color="white"></Icon>
          <Icon name="time" color="white"></Icon>

        </View>
      </View>
      <EditScreenInfo path="app/(tabs)/index.tsx" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 15,
    // justifyContent: 'flex-start',
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
});
