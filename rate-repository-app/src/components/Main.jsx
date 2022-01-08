import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Route, Switch, Redirect } from 'react-router-native';

import RepositoryList from './repositoryList';
import AppBar from './AppBar';
import SignIn from './SignIn';
import Repository from './Repository'
import CreateReview from './CreateReview'
import SignUp from './SignUp';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
  },
});

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar/>
      <Switch>

        <Route path="/" exact>
          <RepositoryList />
        </Route>

        <Route path="/signin" exact>
          <SignIn/>
        </Route>
        
        <Route path="/repositories/:id" exact>
          <Repository />
        </Route>
        
        <Route exact path="/createReview">
          <CreateReview/>
        </Route>

        <Route exact path="/signup">
          <SignUp/>
        </Route>

        <Redirect to="/" />
      </Switch>    
    </View>
  );
};

export default Main;