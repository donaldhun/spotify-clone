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
        
        <View style={{ flexDirection: 'row', marginLeft: 20 }}>
          {/* Add marginLeft to create space between icons */}
          <Icon name="bell" color="white" />
          <Icon name="history" color="white" style={{ marginLeft: 20 }} />
          <Icon name="gear" color="white" style={{ marginLeft: 20 }} />
        </View>
      </View>

      <View style={{flexDirection: 'row', height: 50, backgroundColor: 'blue'}}>

      </View>
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
