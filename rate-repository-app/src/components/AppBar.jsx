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

  const signOut = useSignOut();

  const { data, error, loading } = useQuery(IS_AUTHORIZED, { fetchPolicy: 'cache-and-network' });

  
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
        <Link onPress={() => signOut()}>
          {
            data?.authorizedUser 
            ?
            <AppBarTab text={"sign out"} fontWeight={'bold'} color='textWhite' />
            :
            <AppBarTab/>

          }
        </Link>
      </View>
      </Pressable>
      <Pressable>
      <View style={styles.item}>
        <Link to='/signin'>
          {
            data?.authorizedUser 
            ?
            <AppBarTab/>
            :
            <AppBarTab text={"sign in"} fontWeight={'bold'} color='textWhite'/>

          }
        </Link>
      </View>
      </Pressable>
      <Pressable>
      <View style={styles.item}>
        <Link to='/createReview'>
        {
            data?.authorizedUser 
            ?
            <AppBarTab text={"Create review"} fontWeight={'bold'} color='textWhite'/>
            :
            <AppBarTab/>
          }
        </Link>
      </View>
      </Pressable>
      <Pressable>
      <View style={styles.item}>
        <Link to='/signup'>
            {
            data?.authorizedUser 
            ?
            <AppBarTab />
            :
            <AppBarTab text={"Sign up"} fontWeight={'bold'} color='textWhite'/>
          }
        </Link>
      </View>
      </Pressable>
    </ScrollView>
  </View>
  );
};

export default AppBar;