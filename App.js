/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Text,
  Linking,
  View,
} from 'react-native';

import RNPickerSelect from 'react-native-picker-select';
const RequiredSign = () => {
  return <Text style={styles.required}>*</Text>;
};
const App = () => {
  const [weight, setWeight] = useState(0.0);
  const [height, setHeight] = useState(0.0);
  const [unit, setUnit] = useState('');
  const [output, setOutput] = useState(0.0);
  const [unitError, setUnitError] = useState('');
  const [weightError, setWeightError] = useState('');
  const [heightError, setHeightError] = useState('');

  const computeBmi = () => {
    console.log('UNITTT', unit);
    if (unit == '') {
      setUnitError('Unit is required!');
    } else {
      setUnitError('');
    }
    if (weight == '') {
      setWeightError('Weight is required!');
    } else {
      setWeightError('');
    }
    if (height == '') {
      setHeightError('Height is required!');
    } else {
      setHeightError('');
    }
    if (unit == 'SI') {
      let wKG = weight; // weight in kgs
      let hM = height / 100; // height in meters

      setOutput(Math.round(wKG / (hM * hM)));
    } else {
      let wP = weight; // weight in poungs
      let wKG = wP * 0.453592;
      let hI = height; // height in inches
      let hM = hI * 0.0254;

      setOutput(Math.round(wKG / (hM * hM)));
    }
  };

  return (
    <SafeAreaView>
      <>
        <View style={styles.body}>
          <View style={styles.inputBox}>
            <Text style={styles.label}>
              Select the unit - SI [kg, cm]/ Imperial[lb, in]
              <RequiredSign />
            </Text>
            <RNPickerSelect
              style={styles.input}
              onValueChange={value => {
                console.log('value RNPickerSelect', value);
                if (value !== null) {
                  setUnit(value);
                  console.log('INNER INNDER qweqwewq');
                }
              }}
              items={[
                {label: 'SI [kg, cm]', value: 'SI'},
                {label: 'Imperial[lb, in]', value: 'Imperial'},
              ]}
            />
            {unitError ? <Text style={styles.error}>{unitError}</Text> : ''}
          </View>
          <View style={styles.inputBox}>
            <Text style={styles.label}>
              Enter your weight in {unit == 'SI' ? 'kilograms' : 'pounds'}
              <RequiredSign />
            </Text>
            <TextInput
              style={styles.input}
              onChangeText={value => setWeight(value)}
              autoCapitalize="none"
            />
            {weightError ? <Text style={styles.error}>{weightError}</Text> : ''}
          </View>
          <View style={styles.inputBox}>
            <Text style={styles.label}>
              Enter your height in {unit == 'SI' ? 'centimeters' : 'inches'}
              <RequiredSign />
            </Text>
            <TextInput
              style={styles.input}
              autoCapitalize="none"
              onChangeText={value => setHeight(value)}
            />

            {heightError ? <Text style={styles.error}>{heightError}</Text> : ''}
          </View>
          <View style={styles.inputBox}>
            <TouchableOpacity onPress={computeBmi}>
              <Text style={styles.button}>&nbsp;Compute BMI</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.inputBox}>
            <Text style={styles.output}>&nbsp;The BMI is : {output}</Text>
          </View>
          <View style={styles.inputBox}>
            <Text
              style={styles.link}
              onPress={() =>
                Linking.openURL(
                  'https://www.whathealth.com/bmi/chart-feetkilos.html',
                )
              }>
              BMI CHART
            </Text>
          </View>
        </View>
      </>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  label: {
    fontSize: 19,
  },
  link: {
    fontSize: 25,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    color: 'black',
  },
  inputBox: {
    margin: 5,
    padding: 5,
  },
  required: {
    color: 'red',
  },
  error: {
    color: 'red',
    fontSize: 15,
  },
  input: {
    borderColor: '#000000',
    borderWidth: 1,
    textAlign: 'left',
    fontSize: 23,
    borderRadius: 5,
    padding: 5,
    margin: 5,
  },
  button: {
    padding: 10,
    fontSize: 24,
    backgroundColor: 'green',
    color: 'white',
    textAlign: 'center',
  },
  output: {
    padding: 10,
    fontSize: 24,
    backgroundColor: 'black',
    color: 'white',
    textAlign: 'center',
  },
});

export default App;
