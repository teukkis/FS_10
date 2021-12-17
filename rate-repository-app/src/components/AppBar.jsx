import React, { useState } from 'react';
import { View, StyleSheet, Pressable, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import { Link } from 'react-router-native';
import { useQuery } from '@apollo/client';

import AppBarTab from './AppBarTab';
import theme from '../theme';
import { IS_AUTHORIZED  } from '../graphQl/queries';
import useSignOut from '../hooks/useSignOut'

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    paddingBottom: 5,
    paddingLeft: 10,
    backgroundColor: theme.appBar.backgroundColor,
    
  },
  item: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    margin: 2,
  }
});

const AppBar = () => {

  const { data, error, loading } = useQuery(IS_AUTHORIZED, { fetchPolicy: 'cache-and-network' });
  const [ isAuthorized, setIsAuthorized ] = useState(false)
  
  if (!loading && data.authorizedUser) {
    setIsAuthorized(true);
  }

  const signOut = useSignOut();
  console.log(data)
  return (
  <View style={styles.container}>
    <ScrollView horizontal>
      <Pressable>
      <View style={styles.item}>
        <Link to='/'>
            <AppBarTab text={"repositories"} fontWeight={'bold'} color='textWhite'/>
        </Link>
      </View>
      </Pressable>
      <Pressable>
      <View style={styles.item}>
        <Link to='/signin'>
          {
            isAuthorized 
            ?
            <AppBarTab text={"sign out"} fontWeight={'bold'} color='textWhite' onPress={() => signOut()}/>
            :
            <AppBarTab text={"sign in"} fontWeight={'bold'} color='textWhite'/>
          }
        </Link>
      </View>
      </Pressable>
    </ScrollView>
  </View>
  );
};

export default AppBar;