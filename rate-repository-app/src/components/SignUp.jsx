import React from 'react';
import FormikTextInput from './FormikTextInput';
import { Formik } from 'formik';
import { View, Button, StyleSheet } from 'react-native';
import * as yup from 'yup';
import useSignUp from '../hooks/useSignUp';

const styles = StyleSheet.create({
  formContainer: {
    margin: 15,
  },
  formItems: {
    marginBottom: 10,
  }
});

const SignUpForm = ({ onSubmit }) => {
  return (
    <View style={styles.formContainer}>
      <FormikTextInput style={styles.formItems} name="username" placeholder="Username" />
      <FormikTextInput style={styles.formItems} name="password" placeholder="Password" secureTextEntry={true} />
      <FormikTextInput style={styles.formItems} name="passwordConfirmation" placeholder="Password confirmation" secureTextEntry={true} />
      <Button
        style={styles.formItems}
        onPress={onSubmit}
        title='Sign up'
        /> 
    </View>
  );
};

const initialValues = {
  username: '',
  password: '',
  passwordConfirmation: '',
};

const validationSchema = yup.object().shape({
  username: yup.string()
    .min(2)
    .max(20)
    .required('Username is a required'),
  password: yup.string()
    .min(3)
    .max(60)
    .required('Password is a required'),
  passwordConfirmation: yup.string().oneOf([yup.ref('password'), null], 'Password does not match')
    .required('Password confirmation is required'),
});


export const SignUpContainer = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema} >
      { ({ handleSubmit }) => <SignUpForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

const SignUp = () => {
  const [signUp] = useSignUp();
  const onSubmit = async (values) => {
    const { username, password } = values;
    try {
      await signUp({ username, password });
    } catch (e) {
      console.log(e);
    }
  };
  return <SignUpContainer onSubmit={onSubmit} />;
};

export default SignUp;