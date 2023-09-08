import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const MentorInfo = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to Meghna Malhotra's Info Screen!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default MentorInfo;
