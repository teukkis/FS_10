import React from 'react';
import { View, StyleSheet, Pressable, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import { Link } from 'react-router-native';

import AppBarTab from './AppBarTab';
import theme from '../theme';

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
          <AppBarTab text={"sign in"} fontWeight={'bold'} color='textWhite'/>
        </Link>
      </View>
      </Pressable>
    </ScrollView>
  </View>
  );
};

export default AppBar;