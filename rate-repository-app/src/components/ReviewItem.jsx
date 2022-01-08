import React from 'react'
import { View, Image, StyleSheet } from 'react-native';
import Text from './Text'
import theme from '../theme';
import { isValid, format, parseISO } from 'date-fns'



const styles = StyleSheet.create({
  rootContainer: {
    display: 'flex',
    height: 200,
    flexDirection: 'column',
    backgroundColor: '#ffffff',
    paddingRight: 20
  },
  upperContainer: {
    display: 'flex',
    flexDirection: 'row',
    height: 200,
    margin: 20

  },
  rating: {
    color: theme.backgrounds.languageTag,
    alignSelf: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
  imageContainer: {
    alignContent: 'center',
    justifyContent: 'center',
    borderColor: theme.backgrounds.languageTag,
    display: 'flex',
    borderWidth: 3,
    width: 50,
    height: 50,
    borderRadius: 25,
    borderStyle: "solid",
    
  },
  infoContainer: {
    display: 'flex',
    flexDirection: 'column',
    width: '85%',
    paddingLeft: 15,

  },
  image: {
    width: 50,
    height: 50,
  },
  text: {
    marginRight: 'auto',
  },
  createdAt: {
    color: "#888888"

  },
});


const ReviewItem = ({ review }) => {

  const formattedDate = () => {
    const d = format(parseISO(review.node.createdAt), 'PPP')
    return (
      <Text style={styles.createdAt} fontSize='body'>{d}</Text>
    )
  }

  return (


    <View key={review.node.createdAt} style={styles.rootContainer}>
      <View style={styles.upperContainer}>

        <View style={styles.imageContainer}>
          <Text fontWeight='bold' style={styles.rating} fontSize='subheading'>{review.node.rating}</Text>
        </View>

        <View style={styles.infoContainer}>
          <View style={styles.fullName}>
            <Text fontWeight='bold' fontSize='subheading'>{review.node.user.username}</Text>
          </View>

          <View >
            {formattedDate()}
          </View>

          <View style={styles.text}>
            <Text fontSize='body'>{review.node.text}</Text>
          </View>
        </View>

      </View>
    </View>   
  );
};

export default ReviewItem;