/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  Modal,
  SafeAreaView,
} from 'react-native';
import {Calendar} from 'react-native-calendars';

const Calender = () => {
  const [selected, setSelected] = useState('');
  const [Date, setDate] = useState('');
  const [modal, setModal] = useState(false);
  return (
    <SafeAreaView>
      <TouchableOpacity
        style={styles.touchableButton}
        onPress={() => setModal(!modal)}>
        <Text style={styles.buttonText}>Show Calender</Text>
      </TouchableOpacity>
      <Modal animationType="fade" visible={modal}>
        <Calendar
          style={{
            padding: 15,
            marginTop: 150,
            borderWidth: 5,
            borderColor: 'cyan',
            borderRadius: 20,
          }}
          onDayPress={day => {
            console.log(selected);
            if (day.dateString === '2023-09-01') {
              setDate(true);
              setSelected('');
            } else {
              setSelected(day.dateString);
              setDate(false);
            }
          }}
          markingType={'period'}
          markedDates={{
            [Date && '2023-09-01']: {
              marked: true,
              startingDay: true,
              endingDay: true,
              color: 'lightpink',
            },

            '2023-09-04': {
              startingDay: true,

              color: 'lightgreen',
            },
            '2023-09-05': {
              color: 'lightgreen',
            },
            '2023-09-06': {
              endingDay: true,

              color: 'lightgreen',
            },
            [selected]: {
              marked: true,
              startingDay: true,
              endingDay: true,
              color: 'orange',
              dotColor: 'transparent',
            },
          }}
          //   markedDates={{
          //     '2023-09-05': {marked: true, color: 'lightgreen'},
          //   }}
        />
        <TouchableOpacity
          style={styles.closeButton}
          onPress={() => setModal(!modal)}>
          <Text style={styles.closeButtonText}>Close Calendar</Text>
        </TouchableOpacity>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  touchableButton: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    width: '30%',
    alignSelf: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  closeButton: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    width: '40%',
    alignSelf: 'center',
  },
  closeButtonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Calender;
