import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Text,
  Linking,
  View,
  FlatList,
} from 'react-native';

export const Index = () => {
  return (
    <FlatList
      contentContainerStyle={styles.item}
      data={[
        {key: 'Assignment #1'},
        {key: 'Lab #1'},
        {key: 'Lab #2'},
        {key: 'Lab #3'},
        {key: 'Lab #4'},
        {key: 'Lab #5'},
        {key: 'Lab #6'},
        {key: 'Lab #7'},
        {key: 'Lab #8'},
        {key: 'Lab #9'},
      ]}
      renderItem={({item}) => <Text >{item.key}</Text>}
    />
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#2a2a2a02',
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    padding: 25,
  },
  item: {
    margin: 5,
    backgroundColor: '#00000012',
    padding: 12,
  },
  bottomText: {
    fontSize: 18,
    textAlign: 'center',
  },
});

export default Index;
