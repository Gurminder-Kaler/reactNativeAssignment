import {StyleSheet, Text, Linking, View} from 'react-native';

export const LabOne = () => {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.inputBox}>
          <Text
            style={styles.link}
            onPress={() =>
              Linking.openURL(
                'https://github.com/Gurminder-Kaler/reactNativeAssignment',
              )
            }>
            {' '}
            Github Repository{' '}
          </Text>
        </View>
      </View>
    </>
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
export default LabOne;
