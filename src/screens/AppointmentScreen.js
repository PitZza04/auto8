import {Button, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import DatePicker from 'react-native-date-picker';
const AppointmentScreen = ({route}) => {
  const [date, setDate] = useState('');
  const [open, setOpen] = useState(false);
  const {services_name, id} = route?.params?.service;
  console.log('new date', date);
  return (
    <View>
      <Text>{services_name}</Text>
      <Button onPress={() => setOpen(true)} title="Date" />
      <DatePicker
        modal
        open={open}
        date={date ? date : new Date()}
        mode="date"
        minimumDate={new Date()}
        onConfirm={date => {
          setOpen(false);
          setDate(date);
        }}
        onCancel={() => {
          setOpen(false);
        }}
      />
      <Text>{[date]}</Text>
    </View>
  );
};

export default AppointmentScreen;

const styles = StyleSheet.create({});
