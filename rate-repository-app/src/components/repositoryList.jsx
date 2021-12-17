import React from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import useRepositories from '../hooks/useRepositories';
import RepositoryItem from './repositoryItem';

const styles = StyleSheet.create({
  separator: {
    marginTop: 20,
    height: 10,
    backgroundColor: '#bbbbbb'
  },
});

const ItemSeparator = () => <View style={styles.separator} />;


const RepositoryList = () => {

 const repositoryNodes  = useRepositories();
  return (

    <FlatList
      data={repositoryNodes === 'loading' ? [] : repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({item}) => <RepositoryItem item={item}/>  }
      contentContainerStyle={{ paddingBottom: 20 }}
    />
  );
};

export default RepositoryList;