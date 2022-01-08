import React from 'react';
import { FlatList, View, StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import RepositoryItem from './repositoryItem';
import { useParams } from 'react-router-native';
import useRepository from '../hooks/useRepository';
import ReviewItem from './ReviewItem';


const styles = StyleSheet.create({
  separator: {
    marginTop: 10,
    height: 10,
    backgroundColor: '#cccccc'
  },
  contentContainer: {
    paddingVertical: 20
  },
  footerComponent: {
    marginTop: 30,
    height: 40,
    backgroundColor: '#cccccc'
  }
});

const ItemSeparator = () => <View style={styles.separator} />;
const footerComponent = () => <View style={styles.footerComponent} />;


const Repository = () => {
  const params_id = useParams().id;
  const { repository, loading, fetchMore }  = useRepository({id: params_id, first: 2});
  
  const onEndReach = () => {
    fetchMore();
  }

  return (
    <SafeAreaView style={styles.contentContainer}>
        
        <FlatList
          data={loading ? [] : repository.reviews.edges}
          renderItem={({ item }) => <ReviewItem review={item} />}
          keyExtractor={(item, index) => index.toString()}
          ListHeaderComponent={<RepositoryItem showButton={true} item={repository} />}
          ListFooterComponent={footerComponent}
          ItemSeparatorComponent={ItemSeparator}
          contentContainerStyle={{ marginBottom: 0 }}
          onEndReached={onEndReach}
          onEndReachedThreshold={0.5}
        />
        
    </SafeAreaView>
  );
}

export default Repository;