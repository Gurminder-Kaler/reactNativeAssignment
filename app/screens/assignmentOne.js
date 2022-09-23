/**
 * Name: Gurminder Singh
 * Student Id: 301294300
 * Assignment 1 
 * Course - 22F -- Web Techs - Mobile Platforms (SEC. 001)
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
import {Formik} from 'formik';
import * as Yup from 'yup';
import RNPickerSelect from 'react-native-picker-select';

let validationSchema = Yup.object({
  weight: Yup.number().required('Weight is required.'),
  height: Yup.number().required('Height is required.'),
  unit: Yup.string().required('Unit is required.'),
});

const RequiredSign = () => {
  return <Text style={styles.required}>*</Text>;
};

const AssignmentOne = () => {
  const [result, setResult] = useState('');
  const [output, setOutput] = useState(0.0);
  const formObject = {
    weight: '',
    height: '',
    unit: '',
  };
  const showResult = output => {
    if (output > 1.1 && output < 18.5) {
      setResult('Under Weight');
    } else if (output >= 18.5 && output <= 24.9) {
      setResult('Fit');
    } else if (output >= 25 && output <= 29.9) {
      setResult('OverWeight');
    } else if (output >= 30) {
      setResult('Obese');
    }
  };
  const computeBmi = ({unit, weight, height}) => {
    if (unit == 'SI') {
      let wKG = weight; // weight in kgs
      let hM = height / 100; // height in meters
      let o = Math.round(wKG / (hM * hM));
      setOutput(o);
      showResult(o);
    } else {
      let wP = weight; // weight in pounds
      let wKG = wP * 0.453592;
      let hI = height; // height in inches
      let hM = hI * 0.0254;
      let o = Math.round(wKG / (hM * hM));
      setOutput(o);
      showResult(o);
    }
  };

  return (
    <SafeAreaView>
      <>
        <Formik
          initialValues={formObject}
          validationSchema={validationSchema}
          onSubmit={(values, formikActions) => {
            computeBmi(values);
          }}>
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            setFieldValue,
            onValueChange,
            handleSubmit,
          }) => {
            return (
              <>
                <View style={styles.body}>
                  <View style={styles.brandView}>
                    <Text style={styles.link}>BMI CALCULATOR</Text>
                  </View>
                  <View style={styles.inputBox}>
                    <Text style={styles.label}>
                      Select the unit - SI [kg, cm] / Imperial [lb, in]
                      <RequiredSign />
                    </Text>
                    <RNPickerSelect
                      style={styles.input}
                      onValueChange={value => {
                        if (value !== null) {
                          setFieldValue('unit', value);
                        }
                      }}
                      items={[
                        {label: 'SI [kg, cm]', value: 'SI'},
                        {label: 'Imperial[lb, in]', value: 'Imperial'},
                      ]}
                    />
                    {touched.unit && errors.unit ? (
                      <Text style={styles.error}>{errors.unit}</Text>
                    ) : (
                      ''
                    )}
                  </View>
                  <View style={styles.inputBox}>
                    <TextInput
                      style={styles.input}
                      autoCapitalize="none"
                      onChangeText={handleChange('weight')}
                      onBlur={handleBlur('weight')}
                      placeholder={
                        values.unit == 'SI'
                          ? 'Enter weight in kilograms'
                          : 'Enter weight in pounds'
                      }
                    />
                    {touched.weight && errors.weight ? (
                      <Text style={styles.error}>{errors.weight}</Text>
                    ) : (
                      ''
                    )}
                  </View>
                  <View style={styles.inputBox}>
                    <TextInput
                      style={styles.input}
                      autoCapitalize="none"
                      onChangeText={handleChange('height')}
                      onBlur={handleBlur('height')}
                      placeholder={
                        values.unit == 'SI'
                          ? 'Enter height in centimeters'
                          : 'Enter height in inches'
                      }
                    />
                    {touched.height && errors.height ? (
                      <Text style={styles.error}>{errors.height}</Text>
                    ) : (
                      ''
                    )}
                  </View>
                  <View style={styles.inputBox}>
                    <TouchableOpacity onPress={handleSubmit}>
                      <Text style={styles.button}>Compute BMI</Text>
                    </TouchableOpacity>
                  </View>
                  <View style={styles.inputBox}>
                    <Text style={styles.output}>
                      &nbsp;{output != null ? 'The BMI is : '+ output : '' }
                    </Text>
                  </View>
                  <View style={styles.inputBox}>
                    <Text
                      style={styles.link}
                      onPress={() =>
                        Linking.openURL(
                          'https://www.whathealth.com/bmi/chart-feetkilos.html',
                        )
                      }> BMI CHART </Text>
                    <Text style={styles.bottomText}>  {result !== '' ? 'You are : ' + result : ''}</Text>
                  </View>
                </View>
              </>
            );
          }}
        </Formik>
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
    fontSize: 24,
  },
  link: {
    fontSize: 24,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    color: 'blue',
  },
  bottomText: {
    fontSize: 24,
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
    fontSize: 24,
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
  reset: {
    padding: 10,
    fontSize: 24,
    backgroundColor: 'red',
    color: 'white',
    textAlign: 'center',
  },
});

export default AssignmentOne;
