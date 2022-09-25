import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

import RequiredSign from '../utils/requiredSign';
import RNPickerSelect from 'react-native-picker-select';
import {Formik} from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object({
  firstName: Yup.string()
    .trim()
    .min(4, 'More than 3 characters only!')
    .required('First Name is required!'),
  lastName: Yup.string()
    .trim()
    .min(3, 'Invalid last name!')
    .required('Last Name is required!'),
  email: Yup.string().email('Invalid email!').required('Email is required!'),
  gender: Yup.string().required('Gender is required!'),
  password: Yup.string()
    .trim()
    .min(8, 'Password is too short!')
    .required('Password is required!'),
  confirmPassword: Yup.string()
    .trim()
    .required('Confirm password is required!')
    .equals([Yup.ref('password'), null], 'Passwords do not match eachother!'),
});

export const LabThree = () => {
  const formObject = {
    firstName: '',
    lastName: '',
    email: '',
    gender: '',
    password: '',
  };

  let performRegister = async values => {
    let payload = {
      firstName: values.firstName,
      lastName: values.lastName,
      gender: values.gender,
      email: values.email,
      password: values.password,
    };
    console.log('Payload being sent', payload);
  };

  return (
    <ScrollView contentContainerStyle={styles.body}>
      <View style={styles.inputBox}>
        <Text style={styles.headerText}>Register here</Text>
      </View>
      <Formik
        initialValues={formObject}
        validationSchema={validationSchema}
        onSubmit={(values, formikActions) => {
          performRegister(values);
        }}>
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          resetForm,
          setFieldValue,
        }) => {
          return (
            <>
              <View style={styles.inputBox}>
                <Text style={styles.label}>
                  Enter your first name
                  <RequiredSign />
                </Text>
                <TextInput
                  keyboardType="default"
                  style={styles.input}
                  onBlur={handleBlur('firstName')}
                  onChangeText={handleChange('firstName')}
                  value={values.firstName}
                  placeholder={'Enter your first name'}
                />
                {touched.firstName && errors.firstName ? (
                  <Text style={styles.error}>{errors.firstName}</Text>
                ) : (
                  ''
                )}
              </View>

              <View style={styles.inputBox}>
                <Text style={styles.label}>
                  Enter your last name
                  <RequiredSign />
                </Text>
                <TextInput
                  keyboardType="default"
                  style={styles.input}
                  onChangeText={handleChange('lastName')}
                  value={values.lastName}
                  onBlur={handleBlur('lastName')}
                  placeholder={'Enter your last name'}
                />
                {touched.lastName && errors.lastName ? (
                  <Text style={styles.error}>{errors.lastName}</Text>
                ) : (
                  ''
                )}
              </View>

              <View style={styles.inputBox}>
                <Text style={styles.label}>
                  Select your gender
                  <RequiredSign />
                </Text>
                <RNPickerSelect
                  style={styles.input}
                  value={values.gender}
                  onValueChange={value => {
                    console.log('value RNPickerSelect', value);
                    if (value !== null) {
                      setFieldValue('gender', value);
                      console.log('INNER INNDER qweqwewq');
                    }
                  }}
                  items={[
                    {label: 'Male', value: 'male'},
                    {label: 'Female', value: 'female'},
                    {label: 'Other', value: 'other'},
                  ]}
                />
                {touched.gender && errors.gender ? (
                  <Text style={styles.error}>{errors.gender}</Text>
                ) : (
                  ''
                )}
              </View>

              <View style={styles.inputBox}>
                <Text style={styles.label}>
                  Enter your email
                  <RequiredSign />
                </Text>
                <TextInput
                  keyboardType="default"
                  style={styles.input}
                  onChangeText={handleChange('email')}
                  value={values.email}
                  placeholder={'Enter your email'}
                  onBlur={handleBlur('email')}
                  autoCapitalize="none"
                />

                {touched.email && errors.email ? (
                  <Text style={styles.error}>{errors.email}</Text>
                ) : (
                  ''
                )}
              </View>

              <View style={styles.inputBox}>
                <Text style={styles.label}>
                  Create your password
                  <RequiredSign />
                </Text>
                <TextInput
                  keyboardType="default"
                  style={styles.input}
                  autoCapitalize="none"
                  onChangeText={handleChange('password')}
                  value={values.password}
                  onBlur={handleBlur('password')}
                  placeholder={'Create your password'}
                  secureTextEntry={true}
                />
                {touched.password && errors.password ? (
                  <Text style={styles.error}>{errors.password}</Text>
                ) : (
                  ''
                )}
              </View>

              <View style={styles.inputBox}>
                <Text style={styles.label}>
                  Confirm your password
                  <RequiredSign />
                </Text>
                <TextInput
                  keyboardType="default"
                  value={values.confirmPassword}
                  style={styles.input}
                  autoCapitalize="none"
                  onChangeText={handleChange('confirmPassword')}
                  value={values.confirmPassword}
                  onBlur={handleBlur('confirmPassword')}
                  placeholder={'Confirm your password'}
                  secureTextEntry={true}
                />
                {touched.confirmPassword && errors.confirmPassword ? (
                  <Text style={styles.error}>{errors.confirmPassword}</Text>
                ) : (
                  ''
                )}
              </View>

              <View style={styles.inputBox}>
                <TouchableOpacity onPress={handleSubmit}>
                  <Text style={styles.button}>Register</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.inputBox}>
                <TouchableOpacity
                  onPress={() => {
                    resetForm;
                    setFieldValue('firstName', '');
                    setFieldValue('lastName', '');
                    setFieldValue('gender', '');
                    setFieldValue('email', '');
                    setFieldValue('password', '');
                    setFieldValue('confirmPassword', '');
                  }}>
                  <Text style={styles.redButton}>Clear</Text>
                </TouchableOpacity>
              </View>
            </>
          );
        }}
      </Formik>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  required: {
    color: 'red',
  },
  label: {
    fontSize: 19,
  },
  headerText: {
    fontSize: 26,
    color: 'green',
    textAlign: 'center'
  },
  extraInputBox: {
    margin: 25,
  },
  inputBox: {
    margin: 5,
    padding: 5,
  },
  error: {
    color: 'red',
    fontSize: 15,
  },
  input: {
    borderColor: '#00000043',
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
  redButton: {
    padding: 10,
    fontSize: 24,
    backgroundColor: 'red',
    color: 'white',
    textAlign: 'center',
  },
});

export default LabThree;
