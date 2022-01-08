import React, { useState } from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import RepositoryItem from './repositoryItem';
import OrderBar from './OrderBar';
import { useHistory } from "react-router-native";

const styles = StyleSheet.create({
  separator: {
    marginTop: 20,
    height: 10,
    backgroundColor: '#cccccc'
  },
  container: {
    backgroundColor: '#cccccc',
    marginBottom: 70,
  },

  searchBar: {
    shadowOpacity: 5,
    borderColor: 'gray',
  }
});

const orderOptions = [
  { label: 'Latest repositories', value: 'latest' },
  { label: 'Highest rated repositories', value: 'highest' },
  { label: 'Lowest rated repositories', value: 'lowest' },
];

const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryListContainer = ({ repositories, setValue, setSearchQuery, searchQuery, selectedValue, onEndReach }) => {
  const history = useHistory();

  const repositoryNodes = repositories?.edges
    ? repositories.edges.map((edge) => { 
      return edge.node
    })
    : []


  return (
    <View style={styles.container}>
    <FlatList
      data={repositoryNodes === 'loading' ? [] : repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({item}) => <RepositoryItem showButton={false} item={item}/>  }
      contentContainerStyle={{ paddingBottom: 20 }}
      keyExtractor={(item, index) => index.toString()}
      onEndReached={onEndReach}
      onEndReachedThreshold={0.5}
      ListHeaderComponent={
        <OrderBar
          orderOptions={orderOptions}
          setValue={setValue}
          setSearchQuery={setSearchQuery}
          searchQuery={searchQuery}
          selectedValue={selectedValue}
        />
      }
    />
    </View>
  );
}

export default RepositoryListContainer;