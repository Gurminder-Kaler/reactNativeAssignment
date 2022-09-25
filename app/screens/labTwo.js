import React, {useState} from 'react';
import {StyleSheet, Text, Switch, View, TextInput} from 'react-native';

export const LabTwo = () => {
  const [data, setData] = useState('');
  const [blackBackground, setBlackBackground] = useState(true);
  return (
    <View style={[styles.body, blackBackground == true ? styles.blackBackground : styles.whiteBackground]}>
      <View style={styles.inputBox}>
        <Text style={styles.label}>Enter Something</Text>
      </View>
      <View style={styles.inputBox}>
        <TextInput
          style={styles.input}
          autoCapitalize="none"
          onChangeText={(value) => setData(value)}
          placeholder={'Enter data to display'}
        />
      </View>
      <View style={styles.inputBox}>
        <Switch
          style={[styles.input]}
          onChange={()=> setBlackBackground(!blackBackground)}
          placeholder={'Enter background to display'}
        />
      </View>
      <View style={styles.inputBox}>
        <Text style={styles.button}>Data you put in is : {data}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  whiteBackground: {
    backgroundColor: '#fff',
  },
  blackBackground: {
    backgroundColor: '#000'
  },
  input: {
    borderColor: '#000000',
    borderWidth: 1,
    textAlign: 'left',
    fontSize: 24,
    borderRadius: 5,
    padding: 5,
    margin: 5,
  },
  label: {
    fontSize: 24,
  },
  button: {
    padding: 10,
    fontSize: 24,
    backgroundColor: 'green',
    color: 'white',
    textAlign: 'center',
  },
  inputBox: {
    margin: 5,
    padding: 5,
  },
});
export default LabTwo;
