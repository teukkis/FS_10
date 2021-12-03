import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

import { formProperNumber } from '../helpers/validation';
import theme from '../theme';
import Text from './Text';


const styles = StyleSheet.create({
  rootContainer: {
    display: 'flex',
    height: 180,
    flexDirection: 'column',
    backgroundColor: '#ffffff',
    padding: 20

  },
  upperContainer: {
    display: 'flex',
    flexDirection: 'row',
    height: 90,
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
  }
});

const RepositoryItem = ({ item }) => {


  return (
    <View style={styles.rootContainer}>
      
      <View style={styles.upperContainer}>

        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={{ uri: item.ownerAvatarUrl }}
          />
        </View>

        <View style={styles.infoContainer}>
          <View style={styles.fullName}>
            <Text fontWeight='bold' fontSize='subheading'>{item.fullName}</Text>
          </View>

          <View style={styles.description}>
            <Text fontSize='body' >{item.description}</Text>
          </View>

          <View style={styles.languageTag}>
            <Text fontSize='body' color='textWhite'>{item.language}</Text>
          </View>
        </View>

      </View>

      <View style={styles.lowerContainer}>
        <View >
          <Text fontWeight='bold' fontSize='subheading'>{formProperNumber(item.stargazersCount)}</Text>
          <Text fontSize='subheading'>Stars</Text>
        </View>
        
        <View >
          <Text fontWeight='bold' fontSize='subheading'>{formProperNumber(item.forksCount)}</Text>
          <Text fontSize='subheading'>Forks</Text>
        </View>
        
        <View>
          <Text fontWeight='bold' fontSize='subheading'>{formProperNumber(item.reviewCount)}</Text>
          <Text fontSize='subheading'>Reviews</Text>
        </View>
        
        <View>
          <Text fontWeight='bold' fontSize='subheading'>{formProperNumber(item.ratingAverage)}</Text>
          <Text fontSize='subheading'>Rating</Text>
        </View>
      </View>
    </View>
  );
};

export default RepositoryItem;