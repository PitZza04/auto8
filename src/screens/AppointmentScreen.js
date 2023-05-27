import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  Pressable,
} from 'react-native';
import React, {useState} from 'react';
import dayjs from 'dayjs';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Controller, useForm} from 'react-hook-form';
import {TouchableOpacity} from 'react-native-gesture-handler';
import SlotTimeList from '../components/SlotTimeList';
import ConfirmButton from '../components/ConfirmButton';
import AddNotes from '../components/AddNotes';
import Summary from '../components/Summary';
import {getPriceText} from '../utils/get-price-text';
const AppointmentScreen = ({route}) => {
  const [date, setDate] = useState(new Date());
  const [datePickerVisibility, setDatePickerVisibility] = useState(false);
  const slotTimes = [9, 10, 11, 12, 13, 14, 15, 16, 17];
  const [selectedTime, setSelectedTime] = useState(slotTimes[0]);

  const service = route?.params?.service;
  console.log('new date', route?.params?.service);

  const handleTimeSelection = time => {
    setSelectedTime(time);
  };
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

  const renderDate = date => {
    let displayDate;

    if (dayjs(date).isSame(new Date(), 'day')) {
      displayDate = 'Today';
    } else {
      displayDate = dayjs(date).format('dddd, MMMM D');
    }
    return displayDate;
  };

  const handleSubmit = () => {
    console.log(dayjs(date).format('DD/MM/YYYY'));
    console.log(dayjs().hour(selectedTime).minute(0).format('h:mm:mm A'));
  };
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Select Date</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Select day"
          value={renderDate(date)}
          placeholderTextColor={'#2B3A55'}
          selectionColor={'transparent'}
          onPressIn={() => showDatePicker()}
        />
        <Pressable onPress={() => showDatePicker()}>
          <Icon name="snapchat" size={20} color="#888" style={styles.icon} />
        </Pressable>
      </View>
      <DateTimePickerModal
        mode="date"
        date={date}
        isVisible={datePickerVisibility}
        minimumDate={new Date()}
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />

      <Text style={styles.text}>Available timeslots:</Text>
      <SlotTimeList
        slotTimes={slotTimes}
        selectedTime={selectedTime}
        onTimeSelection={handleTimeSelection}
      />
      {/* <AddNotes /> */}
      {/* Pick Up or Drop Off */}
      {/* Summary */}
      <Summary service={service} />
      <ConfirmButton onPress={handleSubmit} title="Confirm Appointment" />
    </View>
  );
};

export default AppointmentScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
    marginTop: 20,
  },
  textInput: {
    flex: 1,
  },
  text: {
    fontSize: 18,
    color: '#000',

    paddingVertical: 5,
    letterSpacing: 1.5,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    backgroundColor: '#fff',
    width: '70%',
    paddingHorizontal: 10,
    height: 50,
  },
  icon: {
    marginLeft: 10,
  },
  input: {
    flex: 1,
  },
});
