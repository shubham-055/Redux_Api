import React, {useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {increase, decrease} from '../Redux/Action';

const Counter = () => {
  const dispatch = useDispatch();
  const {value} = useSelector(state => state.counter);
  //useEffect(() => console.log(counter), []);

  const decreaseTheValue = () => {
    dispatch(decrease());
  };

  const increaseTheValue = () => {
    dispatch(increase());
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text} onPress={decreaseTheValue}>
        -
      </Text>

      <Text style={styles.text}>{value}</Text>

      <Text style={styles.text} onPress={increaseTheValue}>
        +
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  text: {
    flex: 1,
    textAlign: 'center',
    fontSize: 60,
  },
});

export default Counter;
