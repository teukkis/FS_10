import React from "react";
import { StyleSheet, View } from "react-native";
import RNPickerSelect from 'react-native-picker-select';
import { Searchbar } from 'react-native-paper';

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#cccccc',
    padding: 10,
  },
  picker: {
    color: '#222222'
  }
});


const OrderBar = ({ orderOptions, searchQuery, selectedValue, setValue, setSearchQuery}) => {
  const onChangeSearch = query => setSearchQuery(query);
  return (
    <View style={styles.header}>
      <Searchbar
        placeholder="Search"
        value={searchQuery}
        style={styles.searchBar}
        onChangeText={onChangeSearch}
      />
      <RNPickerSelect
        value={selectedValue}
        style={styles.picker}
        items={orderOptions}
        key={selectedValue}
        onValueChange={setValue}
      />
    </View>
  );
};

export default OrderBar;