import {Button, StyleSheet, Text, View} from 'react-native';
import React, {useCallback, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
const ServiceOptions = ({options}) => {
  return (
    <>
      {options?.map((item, index) => (
        <View key={index}>
          <Button
            onPress={() => {
              console.log(item.services_options.id);
            }}
            title="add"
          />
          <Text>{item?.services_options.name}</Text>
        </View>
      ))}
    </>
  );
};

const ServicesCard = ({service}) => {
  const {services_options_link} = service;
  const [toggle, setToggle] = useState(false);
  const navigation = useNavigation();
  const toggleShow = useCallback(() => {
    setToggle(!toggle);
  }, [toggle, setToggle]);
  return (
    <View style={styles.container}>
      <Text>{service.services_name}</Text>
      <Button onPress={toggleShow} title="Toggle" />
      {toggle ? (
        <ServiceOptions options={services_options_link} />
      ) : (
        <Text>Nothing Happened</Text>
      )}
      <Button
        onPress={() => {
          navigation.navigate('Appointment', {service: service});
        }}
        title="Add"
      />
    </View>
  );
};

export default ServicesCard;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',

    width: '100%',
    borderWidth: 1,
    borderColor: 'red',
  },
});
