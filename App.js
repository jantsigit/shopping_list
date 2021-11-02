import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, FlatList, ScrollView } from 'react-native';


export default function App() {
  const [text, setText] = useState('');
  const [data, setData] = useState([]);

  const buttonPressed = () => {
    setData([...data, { key: text }]);
    setText('');
  }

 // const buttonPressed2 = () => {
  //  en löytänyt mitään toimivaa, miten saisi sivun refreshattua/reloadattua
  //  kaikki mitä netistä löytyi, tuntui vain antavan erroria ja sekoittavan kaiken
 // }

  
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} onChangeText={text => setText(text)} value={text} />
      <View style={styles.nappi}>
      <Button onPress={buttonPressed} title="Add" />
      <Text> </Text>
      
      <Button onPress={buttonPressed} title="Clear" />

      
      </View>
      <Text> </Text>

      <ScrollView>

      <Text style={styles.colorText}> Kauppalista: </Text>
      <FlatList style={styles.list}
        data={data}
        renderItem={({ item }) =>
          <Text>{item.key}</Text>
        }
      />
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  nappi: {
    flexDirection: 'row'
  },
  colorText: {
    color: 'blue'
  },
  input: {
    marginTop: 50,
    marginBottom: 5,
    width: 200,
    borderColor: 'gray',
    borderWidth: 1 
  }
});