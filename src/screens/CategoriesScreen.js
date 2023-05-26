import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {useQuery} from '@tanstack/react-query';

import {getCategories} from '../api/services';
import {getSubCategories} from '../utils/utils';

const Categories = ({item}) => {
  const {category_name, subCategories} = item;
  return (
    <TouchableOpacity>
      <Text>{category_name}</Text>
      {subCategories.length > 0
        ? subCategories.map(category => (
            <Categories key={category.id} item={category} />
          ))
        : null}
    </TouchableOpacity>
  );
};

const CategoriesScreen = () => {
  const {data, error, refetch, isFetching} = useQuery({
    queryKey: ['categories'],
    queryFn: getCategories,
  });
  let structuredData;
  if (data) {
    structuredData = getSubCategories(data, null);
  }

  console.log(JSON.stringify(structuredData, null, 2));

  return (
    <View style={styles.container}>
      <View>
        {structuredData?.map(category => (
          <Categories key={category.id} item={category} />
        ))}
      </View>
    </View>
  );
};

export default CategoriesScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
