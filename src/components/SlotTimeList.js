import React, {useState} from 'react';
import {View, FlatList, TouchableOpacity, Text, StyleSheet} from 'react-native';
import dayjs from 'dayjs';
const SlotTimeList = ({slotTimes, selectedTime, onTimeSelection}) => {
  const ItemSeparator = () => <View style={styles.separator} />;
  const renderItem = ({item}) => {
    const isSelected = selectedTime === item;
    return (
      <TouchableOpacity
        style={[styles.slotItem, isSelected && styles.selectedSlotItem]}
        onPress={() => onTimeSelection(item)}>
        <Text style={isSelected ? styles.selectedSlotText : styles.slotText}>
          {dayjs().hour(item).minute(0).format('h:mm A')}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={slotTimes}
        renderItem={renderItem}
        keyExtractor={(item, i) => item + i}
        horizontal
        showsHorizontalScrollIndicator={false}
        ItemSeparatorComponent={ItemSeparator}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  slotItem: {
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    height: 50,
    justifyContent: 'center',
  },
  selectedSlotItem: {
    backgroundColor: '#b8312f',
  },
  slotText: {
    fontSize: 16,
    color: '#000',
  },
  selectedSlotText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  separator: {
    width: 16, // Adjust the width as per your requirement
  },
});

export default SlotTimeList;
