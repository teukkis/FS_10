import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import FormikTextInput from './FormikTextInput';


const styles = StyleSheet.create({
  formContainer: {
    margin: 15,
  },
  formItems: {
    marginBottom: 10,
  }
});

const SignInForm = ({ onSubmit }) => {

  return (
    <View style={styles.formContainer}>
      <FormikTextInput style={styles.formItems} name='username' placeholder='Username'/>
      <FormikTextInput style={styles.formItems} name='password' placeholder='Password'/>
        <Button
        style={styles.formItems}
        onPress={onSubmit}
        title='Sign in'
        /> 
    </View>
  );
};

export default SignInForm;

