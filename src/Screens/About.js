import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const AboutScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>About Screen</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Contact')}>
        <Text style={styles.link}>Go to Contact Screen</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  link: {
    fontSize: 18,
    color: 'blue',
    marginTop: 20,
  },
});

export default AboutScreen;
