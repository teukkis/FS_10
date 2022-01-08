import React from 'react';
import { View, Image, StyleSheet, Pressable, Button } from 'react-native';
import { useHistory } from 'react-router-native';
import * as Linking from 'expo-linking';

import { formProperNumber } from '../helpers/validation';
import theme from '../theme';
import Text from './Text';



const styles = StyleSheet.create({
  rootContainer: {
    display: 'flex',
    minHeight: 300,
    flexDirection: 'column',
    backgroundColor: '#ffffff',
    padding: 20

  },
  upperContainer: {
    display: 'flex',
    flexDirection: 'row',
    minHeight: 120,
    margin: 20

  },
  lowerContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    height: 90
    
  },
  imageContainer: {
    display: 'flex',
    flexDirection: 'column',
    width: '25%'

  },
  infoContainer: {
    display: 'flex',
    flexDirection: 'column',
    width: '75%'
  },
  image: {
    width: 50,
    height: 50,
  },
  languageTag: {
    backgroundColor: theme.backgrounds.languageTag,
    marginRight: 'auto',
    padding: 5,
    borderRadius: 4
  },
  fullName: {
    marginBottom: 0
  },
  description: {
    marginBottom: 10
  },
  githubButton: {
    height: 50
  }
});

const RepositoryItem = ({ item, showButton }) => {

  if (item.node) {
    item = item.node
  }

  const history = useHistory();

  const handleOpenRepository = (id) => {
    history.push(`/repositories/${id}`);
  };

  const handleOpenGithub = async (url) => {
    await Linking.openURL(url);
  };

  return (
      <View key={item.description} style={styles.rootContainer}>
      <Pressable onPress={() => handleOpenRepository(item.id)}>
        <View style={styles.upperContainer}>

          <View style={styles.imageContainer}>
            <Image
              style={styles.image}
              source={{ uri: item.ownerAvatarUrl }}
            />
          </View>

          <View style={styles.infoContainer}>
            <View style={styles.fullName}>
              <Text testID="fullName" fontWeight='bold' fontSize='subheading'>{item.fullName}</Text>
            </View>

            <View style={styles.description}>
              <Text testID="description" fontSize='body' >{item.description}</Text>
            </View>

            <View style={styles.languageTag}>
              <Text testID="language" fontSize='body' color='textWhite'>{item.language}</Text>
            </View>
          </View>

        </View>

        <View style={styles.lowerContainer}>
          <View >
            <Text testID="stargazersCount" fontWeight='bold' fontSize='subheading'>{formProperNumber(item.stargazersCount)}</Text>
            <Text fontSize='subheading'>Stars</Text>
          </View>
          
          <View >
            <Text testID="forksCount" fontWeight='bold' fontSize='subheading'>{formProperNumber(item.forksCount)}</Text>
            <Text fontSize='subheading'>Forks</Text>
          </View>
          
          <View>
            <Text testID="reviewCount" fontWeight='bold' fontSize='subheading'>{formProperNumber(item.reviewCount)}</Text>
            <Text fontSize='subheading'>Reviews</Text>
          </View>
          
          <View>
            <Text testID="ratingAverage" fontWeight='bold' fontSize='subheading'>{formProperNumber(item.ratingAverage)}</Text>
            <Text fontSize='subheading'>Rating</Text>
          </View>
        </View>
        </Pressable>
        {
          showButton ?
          <View>
            <Button
              onPress={() => handleOpenGithub(item.url)}
              title='Open in Github'
              style={styles.githubButton}
            />
          </View>
          :
          null
        }
      </View>
    
  );
};

export default RepositoryItem;