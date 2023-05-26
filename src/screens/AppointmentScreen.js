import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import dayjs from 'dayjs';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import {Controller, useForm} from 'react-hook-form';
const AppointmentScreen = ({route}) => {
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(null);
  const [datePickerVisibility, setDatePickerVisibility] = useState(false);
  const [timePickerVisibility, setTimePickerVisibility] = useState(false);
  const {services_name, id} = route?.params?.service;
  console.log('new date', date);
  const handleConfirm = date => {
    setDate(date);
    hideDatePicker();
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };
  const showTimePicker = () => {
    setTimePickerVisibility(true);
  };
  const handleTimeConfirm = time => {
    const format = dayjs(time, 'HH:mm').format('h:mm A').replace(':00', ':00');
    setTime(format);
    hideTimePicker();
  };
  const hideTimePicker = () => {
    setTimePickerVisibility(false);
  };
  const defaultAppointment = {
    date: dayjs().format('MM/DD/YYYY'),
    time: dayjs().hour(12),
  };

  console.log('default', defaultAppointment);
  return (
    <View>
      <Text>{services_name}</Text>
      <TextInput
        onPressIn={() => showDatePicker()}
        placeholder="Select day"
        value={`${dayjs(date).format('MM/DD/YYYY')}`}
      />
      <DateTimePickerModal
        mode="date"
        date={date}
        isVisible={datePickerVisibility}
        minimumDate={new Date()}
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />

      <TextInput
        onPressIn={() => showTimePicker()}
        placeholder="Select day"
        value={`${dayjs(date).format('HH')}`}
      />
      <DateTimePickerModal
        mode="time"
        isVisible={timePickerVisibility}
        onConfirm={handleTimeConfirm}
        onCancel={hideTimePicker}
        minimumDate={new Date().setHours(8, 0, 0, 0)} // Set minimum time to 8 AM
        // maximumDate={new Date().setHours(17, 0, 0, 0)}
      />

      <Text>{dayjs(date).format('MM/DD/YYYY')}</Text>
    </View>
  );
};

export default AppointmentScreen;

const styles = StyleSheet.create({});
