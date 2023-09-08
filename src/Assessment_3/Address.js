import React, {useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {fetchAddress} from '../Redux/Action';
import {SafeAreaView} from 'react-native-safe-area-context';

const Address = () => {
  const dispatch = useDispatch();
  const addressData = useSelector(state => state.Address);

  useEffect(() => {
    dispatch(fetchAddress());
  }, [dispatch]);

  return (
    <SafeAreaView style={styles.container}>
      {addressData && (
        <>
          <Text style={styles.title}>Address Information</Text>
          <Text style={styles.label}>Full Address:</Text>
          <Text style={styles.text}>{addressData.full_address}</Text>
          <Text style={styles.label}>Street Name:</Text>
          <Text style={styles.text}>{addressData.street_name}</Text>
          <Text style={styles.label}>Street Address:</Text>
          <Text style={styles.text}>{addressData.street_address}</Text>
          <Text style={styles.label}>City:</Text>
          <Text style={styles.text}>{addressData.city}</Text>
          <Text style={styles.label}>State:</Text>
          <Text style={styles.text}>{addressData.state}</Text>
          <Text style={styles.label}>Country:</Text>
          <Text style={styles.text}>{addressData.country}</Text>
          <Text style={styles.label}>Zip Code:</Text>
          <Text style={styles.text}>{addressData.zip_code}</Text>
        </>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 8,
  },
  text: {
    fontSize: 16,
    marginBottom: 16,
  },
});

export default Address;
