import React, {useEffect} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {fetchProfile} from '../Redux/Action';

const Profile = () => {
  const dispatch = useDispatch();
  const profileData = useSelector(state => state.Profile);

  useEffect(() => {
    dispatch(fetchProfile());
  }, [dispatch]);

  return (
    <View style={styles.container}>
      {profileData && (
        <>
          <Image source={{uri: profileData.avatar}} style={styles.avatar} />
          <Text style={styles.fullName}>
            {`${profileData.first_name} ${profileData.last_name}`}
          </Text>
          <Text style={styles.email}>{profileData.email}</Text>
          <Text style={styles.gender}>Gender: {profileData.gender}</Text>
          <Text style={styles.phone}>Phone: {profileData.phone_number}</Text>
          <Text style={styles.dob}>
            Date of Birth: {profileData.date_of_birth}
          </Text>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  avatar: {
    width: '50%',
    height: '30%',
    borderRadius: 1000,
    marginBottom: 16,
    backgroundColor: '#cce6ff',
  },
  fullName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  email: {
    fontSize: 18,
    marginBottom: 8,
  },
  gender: {
    fontSize: 16,
    marginBottom: 8,
  },
  phone: {
    fontSize: 16,
    marginBottom: 8,
  },
  dob: {
    fontSize: 16,
    marginBottom: 8,
  },
});

export default Profile;
