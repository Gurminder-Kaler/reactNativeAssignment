/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView} from 'react-native';
// import {NavigationContainer} from '@react-navigation/native';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import Index from './app/screens';
// import { enableScreens } from 'react-native-screens';
// import AssignmentOne from './app/screens/assignmentOne';
// import LabOne from './app/screens/labOne';
// import LabTwo from './app/screens/labTwo';
import LabThree from './app/screens/labThree';

// enableScreens(true);

const App = () => {
  // let Stack = createNativeStackNavigator();
  return (
    <SafeAreaView>
      <>
      {/* <Index/> */}
      {/* <AssignmentOne/> */}
      {/* <LabOne/> */}
      {/* <LabTwo/> */}
      <LabThree/>
      </>
    </SafeAreaView>
  );
};

export default App;
